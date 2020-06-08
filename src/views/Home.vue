<template>
  <div class="videos">
    <template v-if="videosLoaded">
      <div class="videos__container videos__container--loaded">
        <list-item
          v-for="video in videos"
          v-bind:key="video.title.split(' ').join('-').toLowerCase()"
          v-bind:movie="video"
        ></list-item>
      </div>
    </template>
    <template v-else>
      <div class="videos__container videos__container--loading">
        Loading movies...
      </div>
    </template>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue"

export default {
  name: 'Home',
  computed: {
    videos() {
      return this.$store.state.videos;
    },
    videosLoaded() {
      return this.$store.state.videosLoaded;
    }
  },
  components: {
    ListItem
  }
}
</script>
