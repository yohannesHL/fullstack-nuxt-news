<template>
  <div>

            <!-- <v-subheader v-if="item.site" v-text="item.site"></v-subheader> -->

    <a class="list__tile list__tile--link" target="_blank" :key="item.header" :href="item.url">

      <li>
        <!-- <v-tile-text v-html="item.header.slice(0,100) + '...'">

        </v-tile-text > -->

        <div class="list__tile__title" v-html="item.header.slice(0,100) + '...'"></div>
        <span class="site" v-html="item.site"></span>

        <!-- <div class="list__tile__title" v-html="item.site"></div> -->
      </li>
    </a>
    <hr class="divider"/>

  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['item'],
  methods: {
    viewItem(e){
      const link = e.target.getElementsByTagName('a')[0];
      // link.href = this.item.url;
      console.info(link,e)
      if(link) {
        link.setAttribute('href', this.item.url)
        link.setAttribute('target', '_blank')
        link.click()
      }
      // location.href = this.item.url
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
</style>
