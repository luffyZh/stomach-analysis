<template>
  <div>
    <div class="header-top">
      <div class="title">学习胃镜流程</div>
      <div>
    <a-button  @click="goHome">
      首页
    </a-button>
      <a-button  @click="goHome">
      上一页
    </a-button>
     <a-button @click="goStep3">
      下一页
    </a-button>
      </div>
    </div>
    <div class="play_video">
      <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :options="playerOptions"
          :playsinline="true"
        >
        </video-player>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import videoSrc from '../assets/video.mp4'
import { videoPlayer } from 'vue-video-player';
export default {
  name:'step2',
   components: {
    videoPlayer,
  },
  data(){
    return{
     playerOptions: {
        height: '100%',
        autoplay: false,
        muted: true,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: '',
            src:videoSrc,
          },
        ],
        aspectRatio: '16:9',
        poster: '',
        notSupportedMessage: '无法找到此课节视频源',
      },
    }
  },
  methods:{
    goHome(){
      this.$router.push({path:'/'})
    },
    goStep3(){
      this.$router.push({path:'/step3'})
    }
  }
}
</script>

<style scoped>
.header-top{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
}
.title{
  font-size:24px;

}
.play_video {
     width:800px;
     margin:30px auto;
    }
</style>
