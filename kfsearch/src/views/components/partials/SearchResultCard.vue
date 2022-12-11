<template>
    <v-card class="fill-height">
        <v-card-title >{{title}}</v-card-title>
          <v-col>
        <h3>In this episode...</h3>
        <div v-if="episode.topics">
          <ul v-for="(item, index) in episode.topics" :key="index">
            <li>{{item}}</li>
          </ul>
      </div>
      </v-col>
      <v-col>
      <div v-if="episode.alex_says">
        <h3>Alex says...</h3>
        <ul v-for="(item, index) in episode.alex_says" :key="index">
            <li>{{item}}</li>
          </ul>
      </div>
    </v-col>
    <v-col>
      <div v-if="episode.people">
        <h3>This episode features...</h3>
        <ul v-for="(item, index) in episode.people" :key="index">
            <li>{{item}}</li>
          </ul>
      </div>
    </v-col>
    </v-card>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchResultCard',
  data: function () {
    return {
    };
  },
  props: ["title", "episode"],
//   components: {
//     // HelloWorld
//   },
//   computed: {
//     getTerms:{
//         get() {
//         return this.GET_SEARCH_TERMS
//       },
//       set(newValue) {
//         this.SET_SEARCH_TERMS(newValue)
//       }
//     },
//     fieldGetAndSet: {
//       get() {
//         return this.GET_SEARCH_FIELDS;
//       },
//       set(value) {
//         this.SET_SEARCH_FIELDS(value);
//       },
//     },
//     ...mapGetters('Whoosh', ["GET_SEARCH_TERMS", "GET_SEARCH_FIELDS", "GET_AVAILABLE_SEARCH_FIELDS", "GET_SEARCH_RESULTS"])
//   },
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