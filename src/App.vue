<template>
  <div id="app">
    <top></top>
    <foot></foot>
    <router-view></router-view>
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

<style>

</style>
