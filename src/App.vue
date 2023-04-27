<script>
import vMainHeader from './components/v-main-header.vue'
import vMainWrapper from './components/v-main-wrapper.vue'
import vMainFooter from './components/v-main-footer.vue'

export default {
  components: {
    vMainHeader,
    vMainFooter,
    vMainWrapper
  },
  data () {
    return {
      mainTitle: 'Welcome to the Shop at the edge of the universe'
    }
  }
}
</script>

<template>
  <vMainHeader/>
  <main id="app">
    <h1 class="title__main">{{ mainTitle }}</h1>
    <vMainWrapper/>
  </main>
  <vMainFooter/>
</template>

<style lang="scss">
// https://colorscheme.ru/#4n91Tw0w0w0w0
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-color: #330066;
  color: wheat;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title__main {
  color:wheat;
}
</style>
