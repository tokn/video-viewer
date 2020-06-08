<template>
<div class="videos">
  <template v-if="videosLoaded">
    <div class="videos__container videos__container--loaded">
      <swiper ref="videoCarousel" :options="swiperOptions">
        <swiper-slide v-for="video in videos" v-bind:key="video.title.split(' ').join('-').toLowerCase()">
          <list-item v-bind:video="video"></list-item>
        </swiper-slide>
      </swiper>
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
import {
  Swiper,
  SwiperSlide,
  directive
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

let dimVideos = function() {
  let videos = document.querySelectorAll('.video-listitem');
  videos.forEach((video) => {
    let bounds = video.getBoundingClientRect();
    if (bounds.left >= 0 && bounds.left <= window.innerWidth && bounds.right <= window.innerWidth) {
      video.classList.add('visible')
    } else {
      video.classList.remove('visible')
    }
  })
}

export default {
  name: 'Home',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on: {
          slideChangeTransitionEnd: dimVideos,
          imagesReady: dimVideos,
        }
      }
    }
  },
  computed: {
    videos() {
      return this.$store.state.videos;
    },
    videosLoaded() {
      return this.$store.state.videosLoaded;
    }
  },
  components: {
    ListItem,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}

new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
</script>

<style lang="scss">
.videos {
    &__container {
        padding: 40px 0 40px 40px;
    }
    img {
        border: 2px solid transparent;
        display: block;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: #ffd700;
        }
    }
}
.swiper-slide {
    width: auto;
}
</style>
