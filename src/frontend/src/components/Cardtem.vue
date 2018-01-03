<template>
<v-layout row wrap>
  <v-flex xs12>
      <v-card color=" darken-2" >
        <v-card-title color="black" primary-title>
          <div class="headline">{{ item.header }}</div>

        </v-card-title>

        <img contain class="thumb" height="50%" src="https://vuetifyjs.com/static/doc-images/cards/halcyon.png"></img>
        <v-card-actions>
          <v-btn flat  color="black" @click="viewItem" dark>
            Read more<a></a></v-btn>
        </v-card-actions>
      </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['item'],
  methods: {
    viewItem(e){
      const link = e.target.getElementsByTagName('a')[0];
      // link.href = this.item.url;
      if(link) {
        link.setAttribute('href', this.item.url)
        link.setAttribute('target', '_blank')
        link.click()
      }
      // location.href = this.item.url
    }
  }

}
</script>

<style scoped>

.thumb{
  position: absolute;
  display: inline-block;
  top: 25%;
  right: 25px;
}
</style>
