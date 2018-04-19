<template>
  <section class="footer">
    <div class="foot-container">
      <div class="foot-icon">
        <img src="../assets/footer-logo.svg" alt="">
      </div>
      <div class="foot-sign-up">
        <h4>Sign up</h4>
        <p>To receive the <br> latest updates</p>
      </div>
      <div class="process">
        <h4>Our Process</h4>
        <p>Answers to <br> your questions</p>
      </div>
      <div class="gallery">
        <h4>Gallery</h4>
        <p>View photos <br> and videos</p>
      </div>
      <div class="food-for-thought">
        <p>There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky <br> computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often <br>have low picture quality and resolution. Modern advances with the LCD computer monitors have changed a lot of that. The screen itself is flat, and very thin, needing very little <br> desktop space, therefore giving you more room while working at your PC. A big advantage in my opinion is that LCD monitors don’t put off all the heat that the old monitors do.</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
  .footer {
    background-color: #092033;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 11px;
  }

  .foot-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2em;
    padding: 8em 10em;
    justify-content: center;
    color: #d2d2d2;
  }

  .foot-container h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.3em;
    font-weight: lighter;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
  }

  .foot-icon {
    grid-column: 1 / span 1;
    grid-row: 1;
    margin: 0 auto;
    padding-left: 3em;
  }

  .foot-sign-up {
    grid-column: 2 / span 1;
    grid-row: 1;
    margin: 0 auto;

  }

  .process {
    grid-column: 3 / span 1;
    grid-row: 1;
    margin: 0 auto;

  }

  .gallery {
    grid-column: 4 / span 1;
    grid-row: 1;
    margin: 0 auto;

  }

  .food-for-thought {
    grid-column: 1 / span 6;
    grid-row: 2;
    margin: 0 auto;
    line-height: 2em;
    color: rgba(200, 200, 200, 0.50);
  }






</style>
