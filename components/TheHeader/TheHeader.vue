
<template>
  <header class="main-header">
    <nav class="main-nav">
      <nuxt-link to="/">
        <a><img class="logo" src="../../assets/logo.png" alt=""></a>
      </nuxt-link>
      <!-- <nuxt-link to="/"><i class="icon fa fa-bars"></i></nuxt-link> -->
    </nav>
  </header>
</template>


<style scoped>

.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;

}

.main-nav {
  display: flex;
}

.logo {
  width: 50px;
  height: auto;
  margin: 30px 0 20px 30px;
}

.icon {
  justify-content: flex-end;
  align-items: center;
  font-size: 2em;
}
</style>
