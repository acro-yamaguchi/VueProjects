<template>
  <v-app>
    <v-navigation-drawer
      app
      class="pt-6"
      color="grey lighten-3"
      permanent
      width="65px"
    >
      <v-btn
      class="ml-1 mb-9"
      fab
      dark
      color="blue-grey darken-3"
      to="/"
    >
      <v-icon dark large>
        mdi-home-circle-outline
      </v-icon>
    </v-btn>
    <v-btn
      class="ml-1 mb-9"
      fab
      dark
      color="blue-grey darken-3"
      to="/about"
    >
      <v-icon dark large>
        mdi-information
      </v-icon>
    </v-btn>
    <v-btn
      class="ml-1 mb-9"
      fab
      dark
      color="blue-grey darken-3"
      to="/time"
    >
      <v-icon dark large>
        mdi-clock-time-three-outline
      </v-icon>
    </v-btn>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
