<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/Logo_Université_de_Caen_Normandie_2018.png"
          transition="scale-transition"
          width="40"
        />

        WEB SEARCH ENGINE
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Lekkimone92/search-engine"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
<!--      <container-component/>-->
    </v-content>

    <v-footer
            max-width="100%"
            height="auto"
            class="primary pr-0"
    >
      <v-card
              flat
              tile
              class="primary white--text text-md-center justify-center row mr-0"
      >

        <v-card-text class="white--text col-12">
          Search Engine Application built by Mamadou Alpha BAH and Manel REKIK for Educational Purpose
        </v-card-text>

        <v-divider class="grey lighten-5 mr-0"></v-divider>

        <v-card-text class="white--text col-12">
          &copy;2019 — <strong>UNIVERSITE DE CAEN</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import ContainerComponent from './components/containerComponent/ContainerComponent';

export default {
  name: 'App',

  components: {
    ContainerComponent,
  },

  data: () => ({
    //
  }),
};
</script>
