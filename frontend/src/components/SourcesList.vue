<template>
  <v-container fluid style="min-height: 0;" grid-list-lg >
    <v-layout row >
      <v-flex xs12 sm8 offset-sm2>
        <v-toolbar >
          <v-btn to="/" primary>Back</v-btn>
        <v-btn
          @click.native="dialog = true"
          absolute
          dark
          fab
          right
          color="pink"
        >
          <v-icon>add</v-icon>
        </v-btn>
        </v-toolbar>
        <v-card>

          <v-list>
            <template v-for="item in items">
              <div :key="item.name">
                <hr class="divider"/>
                <a class="list__tile list__tile--link" href="#">
                  <li>
                    <div class="list__tile__title" v-html="item.url"></div>
                    <span class="name" v-html="item.name"></span>
                  </li>
                </a>
              </div>
            </template>
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
            <v-card-title>Add News source</v-card-title>
            <v-card-text>
            <add-source-form ref="addSourceForm"></add-source-form>
            </v-card-text>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="submitForm">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


      </v-flex>

    </v-layout>


  </v-container>
</template>

<script>
import AddSourceForm from "./AddSourceForm";

export default {
  name: "SourcesList",
  components:{
    AddSourceForm
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
    viewItem(e){


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
