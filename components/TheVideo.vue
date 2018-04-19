<template>
  <section class="video-tips">
    <div class="video">
      <img class="play-button" src="../assets/play-button.svg" alt="">
      <h4 class="play-text"><b>PLAY VIDEO</b></h4>
    </div>
    <div class="tips">
      <p>12 Handy Tips For<br>Generating Leads Through <br>Cold Calling</p>
      <div class="line"></div>
    </div>
  </section>
</template>


<style scoped>
.video-tips {
  height: 310px;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #acacac;
}

.video {
  background: url('../assets/video-image.jpg') no-repeat;
  background-size: contain;
  display: grid;
  justify-content: center;
}

.play-button {
  align-self: flex-end;
  height: 80px;
  width: auto;
}

.play-text {
  align-self: flex-start;
  padding-top: 10px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.tips {
  font-family: 'Playfair Display', serif;
  font-size: 1.7em;
  display: grid;
  align-content: center;
}

.tips p {
  margin-left: 3em;
}

.tips div {
  margin: 1em 0 0 3em;
  width: 45px;
  height: 8px;
  background-color: black;
}
</style>
