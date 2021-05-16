<template>
  <v-container fluid class="grey lighten-4 py-15">
    <v-row justify="center">
      <v-col
        v-for="(item, idx) in items"
        :key="idx"
        cols="12"
        md="3"
        class="d-flex flex-column align-center"
      >
        <v-avatar color="indigo" class="mb-n4" style="z-index: 9999">
          <img :src="item.src" />
        </v-avatar>
        <v-card class="text-center pt-5 px-5 rounded-xl" width="80%">
          <p class="text-body-2">
            {{ item.text }}
          </p>
          <p class="font-weight-bold text-body-2">{{ item.name }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Fragment2',
  data() {
    return {
      items: [
        {
          src: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F06%2FE0MG76-e1560965378507-1200x1270.jpg',
          name: 'einstein',
          text: 'I have knew it!\nFindU makes us saving time',
        },
        {
          src: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxMzkwNTQzNzgyMjI1OTAy/gettyimages-90733811.jpg',
          name: 'newton',
          text: 'I am bored to watch youtube so long time',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IAM7vSOFM_OEHeeP8SqwQH4bnZdPZ-pdSDYxmjHWaD6RjwwPYJjkf1Ofibzc5s0DSlE&usqp=CAU',
          name: 'Boltzmann',
          text: 'This is the most creative idea since I made Boltzmann machine',
        },
      ],
    }
  },
}
</script>
