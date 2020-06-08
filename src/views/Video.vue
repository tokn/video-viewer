<template>
<div class="video">
  <header>
    <h1>{{ video.title }}</h1>
    <router-link :to="{ name: 'Home'}">Return to home</router-link>
  </header>
  <div class="video__player">
    <video controls class="video-js vjs-default-skin vjs-16-9" data-setup="{}" v-bind:poster="video.poster">
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
  },
  mounted() {
    // Add listeners to enable 'theatre-mode'
    document.querySelector('.video video').addEventListener('play', function () {
        document.querySelector('body').classList.add('video--playing')
    })
    document.querySelector('.video video').addEventListener('pause', function () {
        document.querySelector('body').classList.remove('video--playing')
    })
  }
}
</script>

<style lang="scss">

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1{
    margin: 0;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color:inherit;
  }
}
.video {
    &__player {
        max-height: 600px;
        height: calc(100vh - 5rem);
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1100px;
        padding: 0 17px;
        margin: 0 auto;
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
