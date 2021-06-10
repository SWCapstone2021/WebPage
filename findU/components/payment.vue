<template>
  <v-container class="white">
    <v-card class="transparent text-center my-3" elevation="0">
      <div class="text-h6">Select Card</div>
      <div>You can choose only one card</div>
      <div>Current Cards : {{ selectedCardName }}</div>
    </v-card>
    <v-row no-gutters align="center" justify="center">
      <v-col
        v-for="(item, idx) in cards"
        :key="idx"
        class="transparent"
        cols="2"
      >
        <div class="text-center">
          <v-hover v-slot="{ hover }">
            <v-img
              :elevation="idx === selectedCard ? true : hover ? 12 : 2"
              :class="{ 'on-hover': idx === selectedCard ? true : hover }"
              height="200"
              contain
              :src="item.src"
              @click="changePaymethod(idx)"
            ></v-img>
          </v-hover>
          <div class="font-weight-black">{{ item.time }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Payment',
  data() {
    return {
      cards: [
        { src: '/kb.png', name: 'KB', time: '', alias: 'KB국민' },
        { src: '/hn.png', name: 'Hana', time: '', alias: '하나' },
        { src: '/sh.png', name: 'Sinhan', time: '', alias: '신한' },
        { src: '/ss.jpg', name: 'Samgsung', time: '', alias: '삼성' },
        { src: '/wr.png', name: 'Woori', time: '', alias: '우리' },
      ],
      selectedCard: 0,
      selectedUID: '',
    }
  },
  computed: {
    selectedCardName() {
      if (this.selectedCard === -1) {
        return 'You did not use pro plan now'
      } else {
        return this.cards[this.selectedCard].name
      }
    },
    ...mapState(['userData']),
  },
  mounted() {
    this.getAllBillingKey()
  },
  methods: {
    getStr(uid) {
      const unixTime = parseInt(uid.split('_')[1])
      const date = new Date(unixTime)
      console.log(date.toLocaleDateString())
      return date
    },
    getAllBillingKey() {
      this.selectedCard = -1
      this.cards.forEach((card) => {
        card.time = ''
      })
      if (this.userData !== null && this.userData.membership === 'PRO') {
        console.log('userdata', this.userData)
        const cardName = this.userData.card_name
        const cardIdx = this.cards.findIndex((card) => {
          return card.alias === cardName
        })
        this.selectedUID = this.userData.uid[0]
        const time = this.getStr(this.selectedUID)
        this.cards[cardIdx].time = time
        this.selectedCard = cardIdx
      }
    },
    async changePaymethod(idx) {
      const title = 'Warning'
      let text = ''
      if (idx === this.selectedCard) {
        text = 'Do you really want to stop PRO PLAN?'
      } else {
        text = 'Do you really want to change payment method?'
      }
      const res = await this.$dialog.confirm({
        text,
        title,
      })
      if (res) {
        this.$fire.functions
          .httpsCallable('unsubscribe')({
            uid: this.selectedUID,
            payment_id: this.userData.payment_id,
          })
          .then((result) => {
            this.getAllBillingKey()
          })
        if (idx !== this.selectedCard) {
          this.$router.push('/profile/purchase')
        }
      }
    },
  },
}
</script>

<style scoped>
.v-image {
  transform: rotate(90deg);
  transition: opacity 0.4s ease-in-out;
}

.v-image:not(.on-hover) {
  opacity: 0.6;
}
</style>
