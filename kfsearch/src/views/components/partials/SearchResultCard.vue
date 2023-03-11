<template>
    <v-card class="fill-height resultcard">
        <v-card-title>{{title}}</v-card-title>
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
    <!-- <v-toolbar style="background-color: #191a1a;">Boop</v-toolbar> -->
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
  props: ["title", "episode"]
}
</script>

<style scoped>

.resultcard {
  color:white;
  background:#191a1a;
  border: 1px;
  border-style: solid;
  border-color: #f5f5f5;

}

</style>