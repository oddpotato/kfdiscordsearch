<template>
  <div class="home">
    <SearchForm />
    <SearchResults />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    SearchForm,
    SearchResults
  }
}
</script>
