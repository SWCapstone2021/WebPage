// eslint-disable-next-line no-unused-vars
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
var Iamport = require('iamport');
var iamport = new Iamport({
  impKey: functions.config().iamport.key,
  impSecret: functions.config().iamport.service
});
const cors = require('cors')({origin: true});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.getAllBillingKey = functions.https.onCall((request, context) => {
  const userEmail = context.auth.token.email;
  const userRef = admin.firestore().collection('user')
  return userRef.doc(userEmail)
    .get()
    .then((doc)=>{
      if (!doc.exists) {
        admin.firestore().collection('user').doc(userEmail).set({
          membership: 'FREE',
        })
      }
      return iamport.subscribe_customer.get({
        customer_uid: doc.data().uid[0]
      }).then(function(result){
        return result;
      }).catch(function(error){
        return error;
      });
    })
});

exports.subscribe = functions.https.onCall((data, context) => {
  const newUID = data.newUID
  const userEmail = context.auth.token.email;
  const payment_id = [ newUID + '_' + new Date().getTime(), newUID + '_' + (new Date().getTime()+1) ]
  iamport.subscribe_customer.get({
    customer_uid: newUID
  }).then(function(result){
    const userRef = admin.firestore().collection('user')
    userRef.doc(userEmail).update({
      membership: 'PRO',
      unread_msg: admin.firestore.FieldValue.increment(2),
      card_name: result.card_name,
      last_order: getDate(0),
      next_order: getDate(6),
      uid: admin.firestore.FieldValue.arrayUnion(newUID),
      payment_id: admin.firestore.FieldValue.arrayUnion(payment_id[0],payment_id[1])
    })
    const paymentRef = admin.firestore().collection('payment')
    let month = 0
    return payment_id.forEach((id)=>{
      paymentRef.doc(id).set({
        id:id,
        email:userEmail,
        amount:6,
        order_date: new Date(),
        payment_date: getDate(month),
        card_name: result.card_name,
        status:'Not Yet',
      })
      month += 6
    })
  }).catch(function(error){
    const userRef = admin.firestore().collection('user')
    userRef.doc(userEmail).update({
      membership: 'PRO',
      card_name: 'KB국민',
      unread_msg: admin.firestore.FieldValue.increment(2),
      last_order: getDate(0),
      next_order: getDate(6),
      uid: admin.firestore.FieldValue.arrayUnion(newUID),
      payment_id: admin.firestore.FieldValue.arrayUnion(payment_id[0],payment_id[1])
    })
    const paymentRef = admin.firestore().collection('payment')
    let month = 0
    return payment_id.forEach((id)=>{
      paymentRef.doc(id).set({
        id:id,
        email:userEmail,
        amount:6,
        order_date: new Date(),
        payment_date: getDate(month),
        card_name: 'KB국민',
        status:'Not Yet',
      })
      month += 6
    })
  });

  // iamport.subscribe.schedule({
  //   customer_uid: newUID,
  //   schedules: getSchedule()
  // })
})

exports.unsubscribe = functions.https.onCall((data, context) => {
  const newUID = data.uid
  const userEmail = context.auth.token.email;
  data.payment_id.forEach((id)=>{
    admin.firestore().collection("payment").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  })
  const userRef = admin.firestore().collection('user')
  userRef.doc(userEmail).update({
    membership: 'FREE',
    last_order: '',
    next_order: '',
    unread_msg: 0,
    card_name: admin.firestore.FieldValue.delete(),
    uid: admin.firestore.FieldValue.delete(),
    payment_id: admin.firestore.FieldValue.delete(),
  })
  return iamport.subscribe_customer.delete({
    customer_uid: newUID,
  }).then((result)=>{
    return result
  }).catch((error)=>{
    return error
  })
})


exports.deleteAccount = functions.https.onCall((data, context) => {
  const email = data.user.email
  return admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      return admin
        .auth()
        .deleteUser(userRecord.uid)
        .then((result)=>{
          return result
        })
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
  // iamport.subscribe.schedule({
  //   customer_uid: newUID,
  //   schedules: getSchedule()
  // })
})


exports.updateDisplayName = functions.https.onCall((data, context) => {
  const email = data.email
  const displayName = data.displayName
  return admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      return admin
        .auth()
        .updateUser(userRecord.uid, {displayName: displayName})
        .then((result)=>{
          return result
        })
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
  // iamport.subscribe.schedule({
  //   customer_uid: newUID,
  //   schedules: getSchedule()
  // })
})


function getDate(month) {
  const targetDate = new Date()

  const dd = targetDate.getDate()
  const mm = targetDate.getMonth() + month + 1 // 0 is January, so we must add 1
  const yyyy = targetDate.getFullYear()

  const dateString = yyyy + '-' + mm + '-' + dd
  return dateString
}

function getSchedule() {
  return [{
    "merchant_uid": 'merchant_1_' + new Date().getTime(),
    "schedule_at": getDate(0),
    "amount": 100,
  },
    {
      "merchant_uid": 'merchant_2_' + new Date().getTime(),
      "schedule_at": getDate(6),
      "amount": 100,
    }]
}

exports.initUserData = functions.auth.user().onCreate((UserRecord, EventContext) => {
  const email = UserRecord.email
  const displayName = UserRecord.displayName
  const creationTime = UserRecord.metadata.creationTime

  const userRef = admin.firestore().collection('user')
  return userRef.doc(email).set({
    membership: 'FREE',
    last_order: '',
    next_order: '',
    email: email,
    unread_msg: 0,
    displayName: displayName,
    creationTime: creationTime,
    manager: false,
  })
})

exports.deleteUserData = functions.auth.user().onDelete((UserRecord, EventContextEvent) => {
  const email = UserRecord.email
  const userRef = admin.firestore().collection('user')
  return userRef.doc(email).delete()
})


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
  const original = req.query.text;
  const writeResult = await admin.firestore().collection('messages').add({original: original});
  res.json({result: `Message with ID: ${writeResult.id} added.`});
})

exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
  .onCreate((snap, context) => {
    // Grab the current value of what was written to Firestore.
    const original = snap.data().original;

    // Access the parameter `{documentId}` with `context.params`
    functions.logger.log('Uppercasing', context.params.documentId, original);

    const uppercase = original.toUpperCase();

    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to Firestore.
    // Setting an 'uppercase' field in Firestore document returns a Promise.
    return snap.ref.set({uppercase}, {merge: true});
  });




