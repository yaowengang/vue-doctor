<template>
  <div class="mui-slider" id="banner">
    <div class="mui-slider-group mui-slider-loop">
      <!--支持循环，需要重复图片节点-->
      <div class="mui-slider-item mui-slider-item-duplicate">
        <a href="#"><img src="/static/images/TopicCircle_02.png" /></a>
      </div>
      <div v-for='imgSrc in bannerImg' class="mui-slider-item">
        <a href="##">
          <img :src='imgSrc.src'>
        </a>
      </div>

      <!--支持循环，需要重复图片节点-->
      <div class="mui-slider-item ">
        <a href="#"><img :src="firstImg" /></a>
      </div>

    </div>
    <div class="mui-slider-indicator">
      <div v-for="list in bannerImg" class="mui-indicator" :class="'mui-'+ list.active"></div>
    </div>
  </div>
</template>
<style>
</style>
<script>
import mui from '../../../static/js/mui.min.js'
mui.init()
var gallery = mui('.mui-slider')
gallery.slider({
  interval: 3000
})
export default{
  data () {
    return {
      bannerImg: [
        {src: '/static/images/TopicCircle_02.png', active: 'active'},
        {src: '/static/images/TopicCircle_02.png'},
        {src: '/static/images/TopicCircle_02.png'},
        {src: '/static/images/TopicCircle_02.png'}
      ],
      firstImg: '/static/images/TopicCircle_02.png'
    }
  },
  mui
}
</script>

