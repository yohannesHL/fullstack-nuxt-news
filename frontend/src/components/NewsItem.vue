<template>
<div>
  <v-list-tile class="news-item" avatar v-bind:key="item.header" @click="viewItem">
    <v-list-tile-content>
    <v-list-tile-title class="no-overflow" v-html="item.header"></v-list-tile-title>
    <v-list-tile-sub-title v-html="item.site"></v-list-tile-sub-title>

    </v-list-tile-content>

  </v-list-tile>
  <hr class="divider"/>
</div>

</template>

<script>
export default {
  name: 'NewsItem',
  props: ['item'],
  methods: {
    viewItem(e){
      const link = e.target.offsetParent;
      if (link) {
        link.setAttribute('href', this.item.url)
        link.setAttribute('target', '_blank')
        link.click()
      }
    }
  }
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js PWA'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #35495E;
}
.thumb{
  position: absolute;
  display: inline-block;
  top: 25%;
  right: 25px;
}
.site {
  position: absolute;
  top: 12px;
  right: 20px;
  color: grey;
}
.no-overflow {
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 90%;
  display: block;
  white-space: nowrap;
}
.news-item {
  display: flex;
  flex-direction: column;

}
</style>
