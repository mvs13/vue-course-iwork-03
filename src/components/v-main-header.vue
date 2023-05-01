<template>
  <header class="v-main-header">
    <div class="container v-main-header__block">
      <nav>
        <div class="nav-wrapper v-main-header__wrapper">
          <a href="#" class="brand-logo v-main-header__logolinck">{{ headerTitle }}</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link to="/" class="v-main-header__navlink">step to Catalog</router-link>
            </li>
            <li>
              <router-link to="/cart" class="v-main-header__navlink">step to Cart</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-main-header',
  data() {
    return {
      headerTitle: 'A few steps from the edge of the universe...'
    }
  }
}
</script>

<style scoped>
header{
  padding: 8px 0px;
  background-color: var(--color-semidarck);
}

nav {
  box-shadow: none;
}

.v-main-header__wrapper {
  background-color: var(--color-semidarck);
}

.v-main-header__logolinck {
  position: relative;
}

.v-main-header__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-main-header__navlist {
  display: flex;
}

.v-main-header__navlink {
  margin-right: 10px;
}
</style>
