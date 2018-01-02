<template>
  <v-container fluid style="min-height: 0;" grid-list-lg >
    <v-layout row >
      <v-flex xs12 sm10 offset-sm1>
        <v-toolbar >
          <v-btn @click="saveConfig" primary>Back</v-btn>
          <v-btn
            @click.native="dialog = true"
            absolute
            dark
            right
            color="orange"
          >
          <v-icon>add</v-icon>
        </v-btn>
        </v-toolbar>
        <v-card>
          <v-subheader v-text="'Filter'"></v-subheader>
          <v-list two-line>
            <v-layout child-flex>

            <template v-for="item in items">
              <sources-list-item v-bind:key="item.name" :item="item">
              </sources-list-item>
            </template>
            </v-layout>
          </v-list>

        </v-card>

        <v-dialog
          v-model="dialog"
          persistent
          dark
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card>
            <v-card-title>Request a News Source</v-card-title>
            <v-card-text>
            <add-source-form ref="addSourceForm"></add-source-form>
            </v-card-text>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="submitForm">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AddSourceForm from "./AddSourceForm";
import SourcesListItem from "./SourcesListItem";

export default {
  name: "SourcesList",
  components:{
    AddSourceForm,
    SourcesListItem
  },
  data(){
    return {
      dialog: false,
      category:[]
      }
  },
  computed:{
    items(){
      return this.$store.state.sources
    }
  },
  methods: {
    saveConfig(e){
      const config = {}

      this.items.forEach((item)=>{
        config[item.name] = { ...item }
      })

      this.$store.dispatch('setSourcesConfig', config)
      this.$router.back()
    },
    submitForm(e){
      if ( this.$refs.addSourceForm.$refs.form.validate() ){

        this.$refs.addSourceForm.submit(e);

        this.dialog = false
        this.$refs.addSourceForm.clearForm(e);
      }

    },
  },
  created() {
    this.$store.dispatch('fetchSources');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.name {
    position: absolute;
    top: 12px;
    right: 20px;
    color: grey;
}
</style>
