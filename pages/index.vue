<template>
<div class="container">
  <TheHero></TheHero>
  <TheVideo></TheVideo>
  <TheAbout></TheAbout>
  <TheEmail></TheEmail>
</div>
</template>

<script>
  import TheHero from '@/components/TheHero';
  import TheVideo from '@/components/TheVideo';
  import TheAbout from '@/components/TheAbout';
  import TheEmail from '@/components/TheEmail';

  export default {
    components: {
      'TheHero': TheHero,
      'TheVideo': TheVideo,
      'TheAbout': TheAbout,
      'TheEmail': TheEmail
    }
  }
// export default {
//   asyncData(context) {
//     return context.app.$storyapi.get('/v1/spaces/:43984/assets')
//   }
// }
</script>

<style>

</style>
