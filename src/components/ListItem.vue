<template>
<div class="video-listitem">
  <div class="video-listitem__poster">
    <router-link :to="{ name: 'Video', params: {title: encodeURI(video.title)} }">
      <img v-bind:src="video.poster" v-bind:alt="video.title">
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    video: Object
  }
}
</script>

<style lang="scss">
.video-listitem {
    width: 400px;
    filter: grayscale(.9);
    transition: filter 0.3s;
    &.visible {
        filter: grayscale(0);
    }
    img {
        max-width: 100%;
    }
}
</style>
