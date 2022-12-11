<template>
<v-container align-self="center">
    <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="6" justify="center">
    <v-card>
        <v-card-subtitle>Please separate search terms by comma</v-card-subtitle>
    <v-form ref="searchform" justify="center" v-on:submit.prevent="search()">
        <v-text-field v-model="searchTerms" 
        required
        @blur="termsexist()"
        label="Enter Search Terms"
        @keyup.enter="submit"></v-text-field>
<v-row>
    <div v-for="(field, index) in GET_AVAILABLE_SEARCH_FIELDS" :key="index">
  <v-col>
    <v-checkbox
      v-model="fieldGetAndSet"
      :value="field"
      :label="fieldname(field)"
    ></v-checkbox>
    </v-col>
    </div>
</v-row>
    </v-form>
    <v-row>
        <v-col>
    <div class="displayErrors" v-if="errors.length" style="color: #c21a0e">
      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="displayMessage" v-if="cheating.length">
      {{ message }}
    </div>
</v-col>
    </v-row>
    <v-row>
    <v-col justify="right">
    <v-btn @click="search()">Search</v-btn>
</v-col>
    </v-row>
    </v-card>
    </v-col>
</v-row>
</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchForm',
  data: function () {
    return {
        // boop: "Boop",
        errors: [],
        cheating: [],
        searchTerms: ""
    };
  },
  components: {
  },
  computed: {
    getTerms:{
        get() {
        return this.GET_SEARCH_TERMS
      },
      set(newValue) {
        this.SET_SEARCH_TERMS(newValue)
      }
    },
    fieldGetAndSet: {
      get() {
        return this.GET_SEARCH_FIELDS;
      },
      set(value) {
        this.SET_SEARCH_FIELDS(value);
      },
    },
    ...mapGetters('Whoosh', ["GET_SEARCH_TERMS", "GET_SEARCH_FIELDS", "GET_AVAILABLE_SEARCH_FIELDS", "GET_SEARCH_RESULTS"])
  },
  methods: {
    ...mapActions('Whoosh', ["SET_SEARCH_TERMS", "SET_SEARCH_FIELDS", "PERFORM_SEARCH", "RESET_FIELDS"]),
    search(){
      if (this.searchTerms.toLowerCase() == "alex"){
        this.cheating.push("That's cheating")
        this.searchTerms = ""
      }
      else{
        this.cheating = []
        this.errors = []
        this.SET_SEARCH_TERMS(this.searchTerms)
        console.log(this.GET_SEARCH_TERMS)
        console.log("ARE OUR SEARCH TERMS SET?")
        this.PERFORM_SEARCH()
        this.RESET_FIELDS()
        this.searchTerms = ""
      }
    },
    isAlex(){
      this.errors.push("That's cheating")
    },
    termsexist(){
        this.errors = []
        if(!this.searchTerms.length){
            this.errors.push("Please enter search term")
        }
        else{
            this.SET_SEARCH_TERMS(this.searchTerms)
        }
    },
    resetform(){
        this.$refs["searchform"].reset();
        },
    setSearchTerms(search){
        this.SET_SEARCH_TERMS(search)
    },
    // This is literally just to make it look nicer because I don't know if my lambda function will
    // ignore capitalization and it's now Sunday and again I am doing this for fun
    capitalize(s)
    {
        return s && s[0].toUpperCase() + s.slice(1);
    },
    // I'm removing 'to string' on the front end but keeping it in the store
    fieldname(field){
        let to_capital = this.capitalize(field)
        let fieldformat = to_capital.replace("_"," ")
        return fieldformat.slice(0,-9)
    }
}
}

</script>

<style scoped>
/* .browsesubwikicard {
  border: 1px;
  border-style: solid;
  border-color: #f5f5f5;
}

.browsesubwikitop {
  border-bottom: 2px solid #f5f5f5;
}

.browsesubwikibottom {
  border-top: 2px solid #f5f5f5;
}

.browsesubwikitop .v-card__title {
  word-break: normal;
  display: block;
  text-align: center;
  line-height: 1.5;
} */

</style>
