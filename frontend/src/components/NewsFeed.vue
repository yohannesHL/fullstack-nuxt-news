<template>
  <v-container fluid style="min-height: 0;" grid-list-lg >
    <v-layout row >
      <v-flex xs12 sm10 offset-sm1>
        <v-toolbar >
          <span class="last-update" v-html="lastUpdate"></span>
          <v-btn round flat icon @click="refreshNews"> <v-icon>refresh</v-icon></v-btn>
          <v-btn right round flat absolute to="/sources">Configure</v-btn>
        </v-toolbar>

        <v-card>
          <v-list three-lines v-for="item in items">
              <news-item v-bind:key="item.header" :item="item"/>
          </v-list>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import CategoryFilter from "./CategoryFilter";
import AddSourceForm from "./AddSourceForm";
import NewsItem from "./NewsItem";

export default {
  name: "NewsFeed",
  data(){
    return {
      dialog: false,
      category:[],
    }
  },
  computed:{
    lastUpdate () {
      const d = this.$store.state.lastUpdate
      const day = d.getDay() == (new Date().getDay()) ? 'Today' : 'Yesterday'
      const time = d.toLocaleTimeString()
      return `${day} at ${time}`
    },
    items (){
      return this.$store.state.feeds
    }
  },
  methods: {
    onClickCategory(choices){
      let params = '';

      params += '?' + choices[0];
      choices.slice(1).forEach((v, index)=>{
        params += '&' + v;
      })
      // this.reloadData(params)
      // console.info('click category', params, choices)
    },
    refreshNews (){
      this.$store.dispatch('fetchLatestNews')
    }

  },
  components: {
    NewsItem,
    CategoryFilter
  },
  created() {

    this.$store.dispatch("fetchNews");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
.last-update {
  font-size: 0.8rem;
  color: #878787;
}
</style>
