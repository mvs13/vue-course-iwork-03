<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <vMainWrapper/>
  </div>
</template>

<script>
// @ is an alias to /src
import vMainWrapper from '@/components/v-main-wrapper.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    vMainWrapper
  }
}
</script>
