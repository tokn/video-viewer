<template>
<div class="video">
  <header>
    <h1>{{ video.title }}</h1>
  </header>
  <div class="video__player">
    <video controls class="video-js vjs-default-skin" data-setup="{}" v-bind:poster="video.poster">
      <source v-bind:src="video.video" type="video/mp4">
    </video>
  </div>

  <script type="application/javascript" src="https://vjs.zencdn.net/7.8.2/video.js"></script>
  <link href="https://vjs.zencdn.net/7.8.2/video-js.css" rel="stylesheet" />
</div>
</template>

<script>
export default {
  name: 'Video',
  computed: {
    video() {
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

<style lang="scss">
h1{
  margin: 0;
}
.video {
    &__player {
        max-height: 600px;
        height: calc(100vh - 4rem);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .video-js {
        .vjs-big-play-button {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 2em;
            height: 2em;
            line-height: 1.8em;
            border-radius: 50%;
            border-color: transparent;
            transition: background 0.4s ease;
            background: rgba(0,0,0,0.5);
        }
        &:hover .vjs-big-play-button {
            background: #ffd700;
        }
    }
}
</style>
