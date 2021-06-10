<template>
  <div>
    <v-card>
      <v-card-title>
        User Manage
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="userData"
        :items-per-page="15"
        sort-by="created"
        class="elevation-1"
        :search="search"
        show-select
        item-key="email"
        show-expand
        :expanded.sync="expanded"
        :single-expand="singleExpand"
      >
        <template #item.email="{ item }">
          <v-chip color="primary" dark>
            {{ item.email }}
          </v-chip>
        </template>

        <template #item.unread_msg="{ item }">
          <v-chip
            v-if="item.unread_msg !== 0"
            color="deep-purple accent-4"
            dark
          >
            {{ item.unread_msg }}
          </v-chip>
          <v-chip v-if="item.unread_msg === 0" color="grey" dark>
            {{ item.unread_msg }}
          </v-chip>
        </template>

        <template #item.displayName="props">
          <v-edit-dialog
            :return-value.sync="props.item.displayName"
            @save="saveSnack(props.item)"
            @cancel="cancelSnack"
            @open="openSnack"
            @close="closeSnack"
          >
            {{ props.item.displayName }}
            <template #input>
              <v-text-field
                v-model="props.item.displayName"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>

        <template #item.membership="{ item }">
          <v-chip :color="getColor(item.membership)" dark>
            {{ item.membership }}
          </v-chip>
        </template>

        <template #item.manager="{ item }">
          <v-simple-checkbox
            v-model="item.manager"
            @click="flipManager(item)"
          ></v-simple-checkbox>
        </template>

        <template #item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-attachment
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>

        <template #expanded-item="{ headers, item }">
          <td v-if="item.unread_msg !== 0" :colspan="headers.length">
            Subscription Payment Info {{ item.email }} <br />
            FindU schedule {{ item.unread_msg }} new payment for this user.
            <br />
            The card user use is {{ item.card_name }} <br />
            {{ getStr(item.payment_id[0]) }}
          </td>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title> subscription payment </v-card-title>
        <v-card v-for="(item, idx) in editedItem" :key="idx">
          <v-card-subtitle>{{ item.payment_date }}</v-card-subtitle>
          <v-card-text>
            current status : {{ item.status }} <br />
            amount : {{ item.amount }} <br />
            Subscription Payment Info {{ item.email }} <br />
            FindU schedule this payment at {{ timeStamp(item.order_date) }}
            <br />
            The card user use is {{ item.card_name }}
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template #action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Manager',
  layout: 'DashboardLayout',
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      headers: [
        {
          text: 'Email',
          align: 'start',
          value: 'email',
        },
        { text: 'msg', value: 'unread_msg' },
        { text: 'display name', value: 'displayName' },
        { text: 'created', value: 'created' },
        { text: 'membership', value: 'membership' },
        { text: 'manager', value: 'manager' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      userData: [],
      search: '',
      selected: [],
      expanded: [],
      singleExpand: true,
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: (v) => v.length <= 25 || 'Input too long!',
    }
  },
  computed: {
    isManager() {
      return (
        this.$store.state.userData !== null &&
        this.$store.state.userData !== undefined &&
        this.$store.state.userData.manager !== undefined &&
        this.$store.state.userData.manager
      )
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    expanded(newVal, oldVal) {
      if (oldVal.length > 0) {
        this.$fire.firestore.collection('user').doc(oldVal[0].email).update({
          unread_msg: 0,
        })
      }
    },
  },
  mounted() {
    if (!this.isManager) {
      this.$router.push('/profile/account')
    }
    this.getUserData()
  },
  methods: {
    flipManager(item) {
      this.$fire.firestore.collection('user').doc(item.email).update({
        manager: item.manager,
      })
    },
    getColor(membership) {
      return membership === 'PRO' ? 'green' : 'grey'
    },
    getUserData() {
      this.$fire.firestore.collection('user').onSnapshot((querySnapshot) => {
        const userData = []
        querySnapshot.forEach((doc) => {
          const item = doc.data()
          item.email = doc.id
          item.created = this.getDate(item.creationTime)
          userData.push(item)
        })
        this.userData = userData
      })
    },
    getDate(date) {
      const targetDate = new Date(parseInt(date))
      console.log(targetDate)
      const dd = targetDate.getDate()
      const mm = targetDate.getMonth() + 1 // 0 is January, so we must add 1
      const yyyy = targetDate.getFullYear()

      const dateString = yyyy + '-' + mm + '-' + dd
      return dateString
    },
    getStr(uids) {
      if (uids !== undefined) {
        const uid = uids[0]
        const unixTime = parseInt(uid.split('_')[2])
        const date = new Date(unixTime)
        console.log(date.toLocaleDateString())
        return date
      }
      return ''
    },
    timeStamp(item) {
      if (item !== undefined) {
        console.log(item)
        const date = new Date(item.seconds)
        return date
      }
      return ''
    },
    editItem(item) {
      const prevThis = this
      this.editedItem = []
      if (item.payment_id !== undefined) {
        this.$fire.firestore
          .collection('payment')
          .where('id', 'in', item.payment_id)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, ' => ', doc.data())
              prevThis.editedItem.push(doc.data())
            })
          })
          .catch((error) => {
            console.log('Error getting documents: ', error)
          })
      } else {
        this.editedItem.push({ payment_date: 'no subscription' })
      }
      this.dialog = true
    },
    deleteItem(item) {
      const prevThis = this
      this.editedIndex = this.userData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.$dialog
        .confirm({
          text: 'Do you really want to delete account?',
          title: 'Please confirm to continue',
        })
        .then(function (dialog) {
          if (dialog) {
            prevThis.$fire.functions
              .httpsCallable('deleteAccount')({
                user: prevThis.editedItem,
              })
              .then((result) => {
                console.log('deleteAccount', result)
              })
          }
        })
        .catch(function (error) {
          console.log('Clicked on cancel')
          console.log(error)
        })
    },
    deleteItemConfirm() {
      this.userData.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.userData[this.editedIndex], this.editedItem)
      } else {
        this.userData.push(this.editedItem)
      }
      this.close()
    },
    saveSnack(item) {
      this.$fire.firestore.collection('user').doc(item.email).update({
        displayName: item.displayName,
      })
      this.$fire.functions
        .httpsCallable('updateDisplayName')({
          email: item.email,
          displayName: item.displayName,
        })
        .then((result) => {
          console.log('updateDisplayName', result)
        })
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancelSnack() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    openSnack() {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    closeSnack() {
      console.log('Dialog closed')
    },
  },
}
</script>
