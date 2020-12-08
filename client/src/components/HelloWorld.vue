<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class=" mb-3 title-message">Check IP</h2>

        <p class="subheading font-weight-regular ">
          Enter the Destination IP Address and press search
        </p>
      </v-col>
    </v-row>
    <v-row class="center-text">
      <v-col class="mx-auto text-center" cols="6">
        <v-text-field label="Enter your IP" outlined>
        <template v-slot:append >
          <v-btn dark rounded class="back-color" style="top:-7px;"><v-icon>mdi-magnify</v-icon></v-btn>
        
        </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.colss {
  color: white;
}
.title-message{
  font-weight:700;
  font-size: 50px;
    background-color: #0864f8;
    background-image: linear-gradient(to right, #004b86, #0082ca);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}
.back-color{
  background-image: linear-gradient(to right, #004b86, #0082ca);
}
.subheading{
  color: rgb(161, 161, 161);
}
</style>