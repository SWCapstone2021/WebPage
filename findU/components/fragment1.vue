<template>
  <v-container>
    <v-row justify="center" class="mt-10 mx-40">
      <v-col cols="5">
        <v-container>
          <v-row justify="center">
            <v-col>
              <p class="text-h3 font-weight-black mb-10">
                Search Engine For Youtube
              </p>
              <p class="text-body-1 mb-10">
                FindU find keywords from video and visualize it on the timeline.
                Our goal is to save your time searching whole youtube video.
              </p>
              <p class="text-body-1 mb-10">
                Stop spending your valuable time, Start use FindU. If you want
                If you want to use it, click below button now.
              </p>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" class="d-flex justify-center">
              <v-btn elevation="0" large class="secondary">
                <v-icon left>mdi-download</v-icon>
                Download Latest Version</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="7" class="d-flex justify-center my-10">
        <v-img
          :src="require('@/assets/sample gif.gif')"
          contain
          height="100%"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Fragment1',
}
</script>
