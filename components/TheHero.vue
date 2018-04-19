
<template>
  <section class="hero">
    <img class="profile" src="../assets/profile.png" alt="">
    <h1 class="name">Matt Bledsoe</h1>
    <button class="sign-up">SIGN UP TODAY</button>
  </section>
</template>


<style scoped>
.hero {
  background: url('../assets/header-image.jpg');
  background-size: 100% 100%;
  height: 40em;
  width: 100%;
  display: grid;
  grid-template-rows: 3, 1fr;
  padding: 60px 0 90px 0;
}

.profile {
  width: 180px;
  height: auto;
  margin: 0 auto;
  align-self: flex-end;
}

.name {
  font-family: 'Playfair Display', serif;
  font-size: 2.7em;
  margin: 0 auto;
  align-self: center;
}

.sign-up {
  background-color: #00DFD4;
  color: white;
  padding: 10px 5px;
  font-family: 'Open-Sans', sans-serif;
  font-weight: 400;
  width: 120px;
  height: 40px;
  margin: 0 auto;
  align-self: flex-start;
}

.sign-up:hover {
  background-color: #009E97;
}
</style>
