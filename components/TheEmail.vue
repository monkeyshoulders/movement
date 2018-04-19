<template>
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
</template>

<style scoped>
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
