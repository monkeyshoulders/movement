
<template>
    <nav class="main-nav">
      <div class="logo-container">
        <img class="logo" src="../../assets/logo.png" alt="">
      </div>
      <div class="hamburger-container">
        <i class="icon fa fa-bars"></i>
      </div>
    </nav>
</template>


<style scoped>


.main-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.logo-container {
  display: flex;
}

.logo {
  width: 50px;
  height: 50px;
  align-self: flex-end;
  margin-left: 30px;

}

.hamburger-container {
  display: flex;
  justify-content: flex-end;
}

.icon {
  align-self: center;
  font-size: 2.5em;
  margin-right: 28px;
}
</style>
