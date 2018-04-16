<template>
  <section class="container">
    <div class="hero">
      <img class="hero-img" src="../assets/profile.png" alt="">
      <h1 class="hero-name">Matt Bledsoe</h1>
    </div>
  </section>
</template>

<script>

</script>

<style>
  .container {


  }

  .hero {
    background: url('../assets/header-image.jpg') no-repeat fixed;
    background-size: contain;
    height: 700px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  .hero-img {
    width: 200px;
    height: auto;
  }

  .hero-name {
    display: block;
  }
</style>
