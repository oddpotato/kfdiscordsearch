import axios from "axios";

export default {
    namespaced: true,
    state: {
        searchResults: {},
        searchTerms: [],
        allSearchFields: ['alex_says_tostring', 'topics_tostring', 'people_tostring'],
        selectedSearchFields: ['alex_says_tostring', 'topics_tostring', 'people_tostring'],
        isSearching: false,
        noResults: false
    },
    actions: {
        PERFORM_SEARCH({ commit, state }) {
            state.isSearching = true
            state.noResults = false
            state.searchResults = {}
            console.log(state.searchResults)
            console.log("THESE ARE OUR SEARCH RESULTS")
                let dataforcall = {
                    "fields": state.selectedSearchFields,
                    "queries": state.searchTerms
                }
                axios
                .post("https://62fm88kr45.execute-api.us-east-1.amazonaws.com/prod/standardquery", dataforcall).then(res => {
                    console.log(res.data.body)
                        if(Object.keys(res.data.body).length > 2){
                            commit("SET_SEARCH_RESULTS", res.data.body)
                    }
                    else{
                        commit("NO_RESULTS")
                    }
                        }).catch(() => {
                            console.log("Search results bb")
                            }).finally(() => {  
                                console.log("It didn't trigger an error message")
                                // commit("SET_SEARCH_RESULTS", res.data.body)
                        });},
        SET_SEARCH_TERMS( {commit}, payload ){
            let search_terms = payload.split(',');
            commit("SET_SEARCH_TERMS", search_terms)
            },
        SET_SEARCH_FIELDS({commit}, payload){
            commit("SET_SEARCH_FIELDS", payload)
        },
        RESET_FIELDS({commit}){
            commit("RESET_FIELDS")
        }
            },
    mutations: {
        RESET_FIELDS(state){
            state.searchTerms = []
            state.selectedSearchFields = state.allSearchFields
        },
        SET_SEARCH_RESULTS(state, payload){
            let resultstoJSON = JSON.parse(payload)
            state.searchResults = resultstoJSON
            state.isSearching = false
        },
        SET_SEARCH_TERMS(state, payload){
            state.searchTerms = payload
        },
        SET_SEARCH_FIELDS(state, payload){
            console.log("We hit set search fields")
            state.selectedSearchFields = payload
        },
        NO_RESULTS(state){
            state.noResults = true
        }
    },
    getters: {
        GET_SEARCH_TERMS(state) {
            return state.searchTerms;
        },
        GET_SEARCH_FIELDS(state) {
            console.log(state.searchFields)
            return state.selectedSearchFields;
        },
        GET_SEARCH_RESULTS(state){
            return state.searchResults
        },
        GET_AVAILABLE_SEARCH_FIELDS(state){
            return state.allSearchFields
        },
        GET_IS_SEARCHING(state){
            return state.isSearching
        },
        GET_NO_RESULTS(state){
            return state.noResults
        }
    }
}
