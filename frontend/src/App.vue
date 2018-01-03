<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="primary">
          <v-toolbar-title>My News Feed</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn flat @click="about=true"> About</v-btn>
      </v-toolbar>
      <v-content>
          <router-view></router-view>
      </v-content>
      <v-dialog
        v-model="about"
        dark
      >
        <v-card>
          <v-card-title>Tech Stack</v-card-title>
          <v-card-text>
            <template v-for="(value, key) in details">
              <div class="about-item" :key="key">
                <span v-text="key"></span>:
                <span v-text="value"></span>
              </div>
            </template>

          </v-card-text>

        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      about: false,
      details: {
        Frontend: 'JS ES6 + Webpack + Vue + Vuex + Vuetify + Axios',
        Backend: 'Node.js + Loopback',
        Database: 'MongoDB',
        Hosting: 'Heroku',
        'Packaging & Deployment': 'Docker + Docker Compose'
      }
    }
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

.about-item span {
    color: #636363;
}
.about-item span:nth-child(2) {
    color: #464e46;
    font-size: 1.25rem;
}
</style>
