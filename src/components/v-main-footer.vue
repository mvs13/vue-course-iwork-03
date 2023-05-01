<template>
  <footer class="page-footer v-main-footer__footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{ footerTitle }}</h5>
          <p class="grey-text text-lighten-4">{{ footerDescr }}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li>
              <router-link to="/" class="v-main-footer__navlink">step to Catalog</router-link>
            </li>
            <li>
              <router-link to="/cart" class="v-main-footer__navlink">step to Cart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright v-main-footer__copyright">
      <div class="container">
      © 2023 Shop at the edge of the universe
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerTitle: 'Edge is reached!',
      footerDescr: 'You have one last chance to go back. What`s next is unknown to anyone.'
    }
  },
  name: 'v-main-footer'
}
</script>

<style scoped>
.v-main-footer__footer {
  background-color: var(--color-light);
}
.v-main-footer__navlink {
  color: var(--color-darck);
}

.v-main-footer__copyright {
  background-color: var(--color-semilight);
}
</style>
