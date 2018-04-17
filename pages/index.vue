<template>
  <div class="container">
    <section class="hero">
      <img class="hero-img" src="../assets/profile.png" alt="">
      <div class="hero-text">
        <h1 class="hero-name">Matt Bledsoe</h1>
        <button class="sign-up">SIGN UP TODAY</button>
      </div>
    </section>
    <section class="video-tips">
      <img class="video" src="../assets/video-image.jpg" alt="">
      <img class="play-button" src="../assets/play-button.svg" alt="">
      <h4 class="play-text"><b>PLAY VIDEO</b></h4>
      <div class="tips">
      <p>12 Handy Tips For<br>Generating Leads Through <br>Cold Calling</p>
      <div></div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style>
/*  font-family: 'Open Sans', sans-serif 400 700 800;
    font-family: 'Playfair Display', serif;
    Document colors:
    - Primary: #00DFD4,
    - Primary Hover: #009E97,
    - Secondary: #092033,
    - Secondary Hover: #343E45
*/
  .container {


  }

  .hero {
    background: url('../assets/header-image.jpg');
    background-size: 100% 100%;
    height: 38em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-img {
    width: 180px;
    height: auto;
  }

  .hero-text {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .hero-name {
    font-family: 'Playfair Display', serif;
    font-size: 2.7em;
  }

  .sign-up {
    background-color: #00DFD4;
    color: white;
    padding: 10px;
    font-family: 'Open-Sans', sans-serif;
    font-weight: 400;
  }

  .sign-up:hover {
    background-color: #009E97;
  }

  .video-tips {
    width: 100%;
    height: 310px;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .video {
    width: auto;
    height: 310px;
    margin: 0;
    padding: 0;
    left: 0;
    position: relative;
  }

  .play-button {
    z-index: 2;
    position: absolute;
    margin-left: 280px;
    align-self: center;
    height: 80px;
    width: auto;
  }

  .play-text {
    z-index: 2;
    position: absolute;
    margin-left: 275px;
    margin-top: 60px;
    align-self: center;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

  }

  .tips {
    margin: 100px 0 0 100px;
    font-family: 'Playfair Display', serif;
    font-size: 1.7em;
  }

  .tips div {
    margin-top: 13px;
    width: 40px;
    height: 10px;
    background-color: black;
  }
</style>
