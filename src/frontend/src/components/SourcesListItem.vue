<template>

  <v-list-tile v-bind:key="item.name" @click.capture.stop="itemTap">
    <v-list-tile-avatar>
      <v-checkbox v-model="selected"></v-checkbox>
    </v-list-tile-avatar>
    <v-list-tile-content>
    <v-list-tile-title v-html="item.name"></v-list-tile-title>
    <v-list-tile-sub-title v-html="item.url"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>

</template>

<script>

export default {
  name: "SourcesListItem",
  props: ['item'],

  data(){
    return {
      selected: !!this.item.selected,
      category:[]
    }
  },
  methods: {
    itemTap(e){
      this.item.selected = !this.item.selected;
      this.selected = this.item.selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.url {
    position: absolute;
    top: 12px;
    right: 20px;
    color: grey;
}
</style>
