<template>
  <v-container fluid style="min-height: 0;" grid-list-lg >
    <v-layout row flex>
      <v-flex xs12 md9>
        <template v-for="item in items">
          <news-item :key="item.title" :item="item"></news-item>
        </template>
      </v-flex>
      <v-flex xs12 md3>
        <v-card>
          <v-card-title>Categories</v-card-title>
          <v-card-text>
            <v-chip>
              <v-avatar class="teal">A</v-avatar>
                  ANZ Bank
            </v-chip>
          </v-card-text>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import NewsItem from "./NewsItem";

export default {
  name: "NewsFeed",
  computed:{
    items(){
      return this.$store.state.feeds
    }
  },
  components: {
    NewsItem
  },
  created() {
    console.info(this.$store);
    this.$store.dispatch("getNewsFromUrl", "http://localhost:3030/news");
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
