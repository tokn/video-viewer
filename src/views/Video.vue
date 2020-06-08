<template>
  <div class="video">
    <h1>{{ video.title }}</h1>
    <div class="video__player">
      <video controls class="video-js vjs-default-skin vjs-fill" data-setup="{}" v-bind:poster="video.poster">
      <source v-bind:src="video.video" type="video/mp4">
    </video>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Video',
    computed: {
      video () {
        // Gets this video's details from the videos store based on decoded title param
        let thisVideo = [];
        this.$store.state.videos.forEach((video) => {
          if (video.title === decodeURI(this.$route.params.title)) {
            thisVideo = video;
          }
        });
        return thisVideo;
      }
    }
  }
</script>
