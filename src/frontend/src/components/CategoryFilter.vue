<template >

    <v-select
      label="Categories"
      v-model="categories"
      :items="allCategories"
      @change="handleChange"
      chips
      tags
    >
      <template slot="selection" slot-scope="data">
        <v-chip
          @input="data.parent.selectItem(data.item)"
          class="chip--select-multi"
          :selected="data.selected"
          :disabled="data.disabled"
          :key="JSON.stringify(data.item)"
        >
          <v-avatar class="accent">{{ data.item.slice(0, 1).toUpperCase() }}</v-avatar>
          {{ data.item }}
        </v-chip>
      </template>
    </v-select>
</template>

<script>

export default {
  name: "CategoryFilter",
  data(){
    return {
      categories:[],
      allCategories: [
        'Technology',
        'Business',
        'Finance',
        'Politics',
        'Culture',
        'Art'
      ],
    }
  },
  methods: {
    filter: function (filters){
      this.$store.dispatch('fetchNews', filters)
    },
    handleChange: function (values){
      const filters = values.map( (i)=> this.allCategories[i] ).join(',')

      this.filter({where: { category: filters}})
    }
  }
};
</script>

<style>

</style>
