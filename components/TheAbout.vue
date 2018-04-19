<template>
  <section class="about-facts-map">
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
      </div>
    </div>
  </section>
</template>


<style scoped>
.about-facts-map {
  height: auto;
  background-color: #eaebed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}

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
</style>
