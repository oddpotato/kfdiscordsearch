<template>
    <v-container align-self="center">
    <div v-if="GET_NO_RESULTS">
        <v-row justify="center">
        <h1 class="text-center white--text">NO RESULTS FOUND</h1>
    </v-row>
    </div>
    <div v-else>
      <div v-if="Object.keys(GET_SEARCH_RESULTS).length">
        <v-row justify="center" class="d-flex fill-height">
          <v-col v-for="(item, index) in GET_SEARCH_RESULTS" :key="index" cols="12" lg="6" md="8" sm="6" justify="center"
          >
        <SearchResultCard :title="index" :episode="item"/>
      </v-col>
    </v-row>
  </div>
  <div v-if="GET_IS_SEARCHING">
        <v-progress-linear
          indeterminate
          color="green darken-2"
        ></v-progress-linear>
      </div>
    </div>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchResultCard from './partials/SearchResultCard.vue';

export default {
  name: 'SearchResults',
  data: function () {
    return {
        // boop: "Boop",
        // errors: [],
        // searchTerms: ""
    };
  },
  props: ["title", "episode"],
  components: {
    SearchResultCard
  },
  computed: {
    ...mapGetters('Whoosh', ["GET_SEARCH_RESULTS", "GET_IS_SEARCHING", "GET_NO_RESULTS"])
  },
//   methods: {
//     ...mapActions('Whoosh', ["SET_SEARCH_TERMS", "SET_SEARCH_FIELDS", "PERFORM_SEARCH", "RESET_FIELDS"]),
//     search(){
//         this.SET_SEARCH_TERMS(this.searchTerms)
//         console.log(this.GET_SEARCH_TERMS)
//         console.log("ARE OUR SEARCH TERMS SET?")
//         this.PERFORM_SEARCH()
//         this.RESET_FIELDS()
//         this.searchTerms = ""
//         //this.resetform()
//     },
//     termsexist(){
//         this.errors = []
//         if(!this.searchTerms.length){
//             this.errors.push("Please enter search term")
//         }
//         else{
//             this.SET_SEARCH_TERMS(this.searchTerms)
//         }
//     },
//     resetform(){
//         this.$refs["searchform"].reset();
//         },
//     setSearchTerms(search){
//         this.SET_SEARCH_TERMS(search)
//     },
//     // This is literally just to make it look nicer because I don't know if my lambda function will
//     // ignore capitalization and it's now Sunday and again I am doing this for fun
//     capitalize(s)
//     {
//         return s && s[0].toUpperCase() + s.slice(1);
//     },
//     // I'm removing 'to string' on the front end but keeping it in the store
//     fieldname(field){
//         let to_capital = this.capitalize(field)
//         let fieldformat = to_capital.replace("_"," ")
//         return fieldformat.slice(0,-9)
//     }
// }
}
</script>