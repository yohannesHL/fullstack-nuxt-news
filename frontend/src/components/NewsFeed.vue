<template>
  <v-container fluid style="min-height: 0;" grid-list-lg >
    <v-layout row >
      <v-flex xs12 sm10 offset-sm1>
        <v-card>

        <v-list three-lines>
        <template v-for="item in items">
          <news-item v-if="item.header" :key="item.header" :item="item"></news-item>

        </template>
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
    items(){
      return this.$store.state.feeds
    }
  },
  methods: {
    viewItem(e){
      const link = e.target.getElementsByTagName('a')[0];
      // link.href = this.item.url;
      if (link) {
        link.setAttribute('href', this.item.url)
        link.setAttribute('target', '_blank')
        link.click()
      }
      // location.href = this.item.url
    },


    onClickCategory(choices){
      let params = '';

      params += '?' + choices[0];
      choices.slice(1).forEach((v, index)=>{
        params += '&' + v;
      })

      // this.reloadData(params)
      console.info('click category', params, choices)
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
</style>
