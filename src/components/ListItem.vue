<template>
  <div class="video-listitem">
    <div class="video-listitem__poster">
      <router-link :to="{ name: 'Video', params: {title: encodeURI(movie.title)} }">
        <img v-bind:src="movie.poster" v-bind:alt="movie.title">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      movie: Object
    }
  }
</script>
