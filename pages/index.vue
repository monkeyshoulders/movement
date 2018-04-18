<template>
<div class="container">
  <section class="hero">
    <img class="profile" src="../assets/profile.png" alt="">
    <h1 class="name">Matt Bledsoe</h1>
    <button class="sign-up">SIGN UP TODAY</button>
  </section>
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
  <section class="about-facts-map">
    <!-- <div class="afm-container"> -->
    <div class="card about">
      <h1 class="card-title">About Me</h1>
      <h1 class="card-desc">A few things to know</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ullamcorper dui, in mattis libero. Curabitur eu diam augue. Maecenas blandit elementum vulputate. Etiam sollicitudin urna vel est tempus condimentum.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ullamcorper dui, in mattis libero. Curabitur eu diam augue.
      </p>
    </div>
    <div class="card facts">
      <h1 class="card-title">Facts</h1>
      <h1 class="card-desc">What makes us so good</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ullamcorper dui, in mattis libero. Curabitur eu diam augue.</p>
      <div class="list">
        <div class="first-line">
          <img class="chatbox" src="../assets/facts-chatbox.svg" alt="">
          <h5>Lorem ipsum dolor sit amet vel est</h5>
        </div>
        <div class="second-line">
          <img class="notes" src="../assets/facts-notes.svg" alt="">
          <h5>Lorem ipsum vel est tempus urna</h5>
        </div>
        <div class="third-line">
          <img class="chatbox2" src="../assets/facts-chatbox.svg" alt="">
          <h5>Lorem ipsum dolor sit amet vel est</h5>
        </div>
      </div>
    </div>
    <div class="card map">
      <div class="location">
        <h1 class="card-title">Location</h1>
        <h1 class="card-desc">We welcome you</h1>
        <address class="address">
          8024 Calvin Hall Rd <br>
          Indian Land, SC 28277 <br>
          <br>
          Hours: 8:00AM - 5:00PM
        </address>
        <button type="button" name="directions">GET DIRECTIONS</button>
      </div>
      <div id="map">
        <iframe width="100%" height="250" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBCfKSxLTGlrRMM9byxWqgft39GzwBNElw&&center=34.998891,-80.871246&zoom=18&maptype=roadmap" allowfullscreen>
        </iframe>
        <!-- <GmapMap
          :center="{lat:34.998891, lng:-80.871246}"
          :zoom="7"
          map-type-id="roadmap">
        </GmapMap> -->
      </div>

    </div>
    <!-- </div> -->
  </section>
  <section class="email">
    <div class="email-blurb">
      <h4>Sometimes you need to <br>receive these things in <br>your inbox for free!</h4>
    </div>
    <div class="email-headline">
      <h2>Sign up to receive the latest updates</h2>
      <div class="email-line"></div>
      <form class="email-sign">
        <input type="email" name="email" placeholder="Email address">
        <button type="button" name="email-button">SIGN UP</button>
      </form>
    </div>
  </section>
</div>
</template>

<script>
// export default {
//   asyncData(context) {
//     return context.app.$storyapi.get('/v1/spaces/:43984/assets')
//   }
// }
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

.container {}

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

.about-facts-map {
  height: auto;
  background-color: #eaebed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}

.afm-container {}

.card {
  height: auto;
  padding: 30px 30px 40px 30px;
  background: #ffffff;
  border-top: 5px solid #092033;
  font-family: 'Open Sans', sans-serif;
}

.about {
  grid-column: 1;
  margin: 4em 0 0 9em;
}

.card-title {
  text-transform: uppercase;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 14px;
}

.card-desc {
  color: #092033;
  font-weight: 800;
  font-size: 1.1em;
  padding: 1em 0;
}

.about-facts-map p {
  color: #aaaaaa;
  line-height: 1.7em;
  font-size: 14px;
  padding-top: 12px;
}

.about p:nth-child(even) {
  padding-top: 25px;
}

.facts {
  grid-column: 2 / span 2;
  margin: 4em 9em 0 0;
  padding-right: 8em;
}

.list {
  margin-top: 1.2em;
}

.list h5 {
  color: #707070;
}

.first-line,
.second-line,
.third-line {
  display: flex;
  align-items: center;
}

.first-line img {
  height: 7em;
  width: auto;
}

.second-line {
  margin-top: 5px;
}

.third-line h5,
.second-line h5 {
  padding-left: 5em;
}

.map {
  grid-column: 1 / span 3;
  margin: 0 9em 4em 9em;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

address {
  font-style: normal;
  color: #aaaaaa;
  font-size: 14px;
  margin-top: 4em;
}

.map button {
  margin-top: 3em;
  background-color: black;
  color: white;
  width: 15em;
  padding: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
}

.email {
  height: 310px;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;

}

.email-blurb {
  color: white;
  background-color: #00DFD4;
  display: flex;
  justify-content: center;
}

.email-blurb h4 {
  align-self: center;
  font-weight: 400;
}

.email-headline {
  background: url('../assets/signup-image.jpg') no-repeat;
  background-size: cover;
  display: grid;
  align-content: center;
  padding-left: 20%;
}

.email-headline h2 {
  font-family: 'Playfair Display', serif;
  color: white;
  font-size: 1.7em;
}

.email-line {
  margin: 1em 0;
  width: 40px;
  height: 8px;
  background-color: white;
}

.email-sign {
  margin-top: 1em;
}

.email-sign input {
  height: 3.5em;
  width: 30em;
}

.email-sign button {
  height: 3.5em;
  width: 20em;
  background-color: #00DFD4;
  color: white;
  font-weight: 700;
}

button:hover {
  background-color: #009E97;
}




</style>
