<template>
  <v-app>
    <v-app-bar
      app
      outlined
      elevation="0"
      color="transparent"
      class="text--black"
    >


      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon light>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer class="back-color" dark permanent app fixed>
      <div class="text-center ma-4 ml-3 white--text" style="font-size: 1.3rem;">
        Check My Network
      </div>

      <v-list nav class="my-2">
        <div class="grey--text" v-for="item in items" :key="item.title">
          <v-list-item
            link
           color="white"
            :to="item.to"
            class="my-3"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <v-switch
          v-model="$vuetify.theme.dark"
          class="mx-3"
          label="Dark Theme"
          persistent-hint
        ></v-switch>
        <v-list nav class="pa-0">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Photos", icon: "mdi-image", to: "/about" },
      { title: "About", icon: "mdi-help-box", to: "/asd" },
    ],
    //
  }),
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
* {
  font-family: "Open Sans", sans-serif !important;
}
.v-application {
  background-color: var(--v-background-base) !important;
  font-family: "Open Sans", sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: "Open Sans", sans-serif !important;
  }
  .display-2 {
    // To pin point specific classes of some components
    font-family: "Open Sans", sans-serif !important;
  }
  .subheading {
    // To pin point specific classes of some components
    font-family: "Open Sans", sans-serif !important;
  }
  .font-weight-bold {
    // To pin point specific classes of some components
    font-family: "Open Sans", sans-serif !important;
  }
}
.list-item-active {
  .v-icon {
    color: #004b86;
  }
}
.v-list-item {
  color: grey;
}
.back-color{
  background-image: linear-gradient(to right, #004b86, #0a4f74);
}
.back {
  background-color: #1f1f24;
}
.link {
  color: #b1b1cc;
  font-size: 1rem;
}
.activeClass {
  &.theme--dark:before{
    opacity:.5  !important;
    border-radius: 0;
  }
  .v-icon {
    color: #004b86 !important;
  }
  margin-right:-1px;
  color: var(--v-primary-base) !important;
  border-right: 5px solid  var(--v-primary-base);
  opacity:0.9 !important;
  background-color: white;
}

.app-title{
  font-size: 2rem;
  background: -webkit-linear-gradient(right, rgb(28, 141, 216), #004b86);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>
