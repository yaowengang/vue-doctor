<template>
  <div id="app">
  
    <top></top>
  
    <foot></foot>
  
    <div class="contain">
  
      <router-view></router-view>
  
    </div>
  
  
  
  </div>
</template>

<script>
  import foot from './components/comment/footer.vue'
  
  import top from './components/comment/header.vue'
  
  export default {
  
    components: {
  
      foot,
  
      top
  
    }
  
  }
</script>

<style lang='less' scoped>
  .contain {
  
    margin-top: 4.5rem;
  
  }
</style>
