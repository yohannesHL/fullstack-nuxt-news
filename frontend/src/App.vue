<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="primary">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>My News Feed</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn to="/sources" @change="onClickConfigure">Configure</v-btn>
      </v-toolbar>
      <v-content>
          <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    onClickConfigure(){

    }
  },
  components:{

  }
}
</script>

<style>
/* @import '../node_modules/vuetify/dist/vuetify.min.css' */

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
