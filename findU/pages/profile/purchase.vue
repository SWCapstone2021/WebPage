<template>
  <base-section class>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-container>
          <p class="text-h5 font-weight-bold text-center">Purchase Page</p>
          <v-divider class="my-5"></v-divider>
          <v-progress-linear
            v-if="!isEnd"
            indeterminate
            color="primary"
          ></v-progress-linear>
          <p v-show="isEnd && isSuccess" class="text-center">
            Subscription procedure finish successfully. Now go and check your
            status
            <nuxt-link to="/profile/billing" class="text-decoration-none"
              >billing</nuxt-link
            >
          </p>
          <p v-if="isEnd && !isSuccess" class="text-center">
            Subscription procedure failed. please retry.
          </p>
        </v-container>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
import BaseSection from '@/components/base/Section'
export default {
  name: 'Purchase',
  components: { BaseSection },
  layout: 'DashboardLayout',
  data() {
    return {
      isJQueryLoaded: false,
      isIamPortLoaded: false,
      isEnd: false,
      isSuccess: false,
    }
  },
  head() {
    return {
      title: 'Payment Page - My awesome project',
      script: [
        {
          hid: 'jsquery',
          src: 'https://code.jquery.com/jquery-1.12.4.min.js',
          defer: true,
          // Changed after script load
          callback: () => {
            this.isJQueryLoaded = true
          },
        },
        {
          hid: 'import',
          src: 'https://cdn.iamport.kr/js/iamport.payment-1.1.8.js',
          defer: true,
          // Changed after script load
          callback: () => {
            this.isIamPortLoaded = true
          },
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    userID() {
      return this.user ? this.user.userId : '0'
    },
    userName() {
      return this.user ? this.user.displayName : 'APC'
    },
    userEmail() {
      return this.user ? this.user.email : 'example@abcd.email'
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    IMP.init('imp92001067')
    this.loadInicis()
  },
  methods: {
    loadInicis() {
      const prevThis = this
      // eslint-disable-next-line no-undef
      IMP.request_pay(
        {
          pg: 'html5_inicis.INIBillTst', // 실제 계약 후에는 실제 상점아이디로 변경
          pay_method: 'card', // 'card'만 지원됩니다.
          merchant_uid: 'merchant_' + new Date().getTime(),
          name: '최초인증결제',
          amount: 1, // 결제창에 표시될 금액. 실제 승인이 이뤄지지는 않습니다. (모바일에서는 가격이 표시되지 않음)
          customer_uid: prevThis.userID, // customer_uid 파라메터가 있어야 빌링키 발급을 시도합니다.
          buyer_email: prevThis.userEmail,
          buyer_name: prevThis.userName,
          buyer_tel: '02-1234-1234',
        },
        function (rsp) {
          if (rsp.success) {
            prevThis.isEnd = true
            prevThis.isSuccess = true
            prevThis.updateMembership()
          } else {
            prevThis.isEnd = true
            prevThis.isSuccess = true
            prevThis.updateMembership()
          }
        }
      )
    },
    updateMembership() {
      const prevThis = this
      const userRef = this.$fire.firestore.collection('user')

      userRef.doc(this.userEmail).set({
        membership: 'PRO',
        last_order: prevThis.getDate(0),
        next_order: prevThis.getDate(6),
      })
    },
    getDate(month) {
      const targetDate = new Date()

      const dd = targetDate.getDate()
      const mm = targetDate.getMonth() + month + 1 // 0 is January, so we must add 1
      const yyyy = targetDate.getFullYear()

      const dateString = yyyy + '-' + mm + '-' + dd
      return dateString
    },
  },
}
</script>
