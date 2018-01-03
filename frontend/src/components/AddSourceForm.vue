<template >
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Name"
      v-model="formData.name"
      :rules="nameRules"
      placeholder="ycombinator"
      :counter="25"
      required
    ></v-text-field>
    <v-text-field
      label="Url"
      placeholder="https://news.ycombinator.com"
      v-model="formData.url"
      :rules="urlRules"
      required
    ></v-text-field>
    <v-select
      label="Categories"
      v-model="formData.categories"
      :items="allCategories"

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
  </v-form>
</template>

<script>

export default {
  name: "AddSourceForm",
  data(){
    return {
      valid: true,
      formData: {
        name: '',
        url: ''
      },

      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 25 || 'Name must be less than 25 characters'
      ],

      urlRules: [
        (v) => !!v || 'Url is required',
        (v) => /^(http|https):[\/]{2}([\.-]?\w+)*(\.\w{2,3}).*$/.test(v) || 'Url must be valid',

        // (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],

      allCategories: [
        'Technology',
        'Design',
        'Business',
        'Finance',
        'Politics',
        'Culture',
        'Art'
      ],
    }
  },
  methods: {
    submit: function (value){
      if (!value) return;

      if (this.$refs.form.validate()) {
        this.$store.dispatch('addNewsSource', this.formData)
      }

      // location.href = this.item.url
    },
    clearForm: function(){
      this.formData = {}
    }
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
