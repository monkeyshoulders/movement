<template>
  <div>
    <TheHeader />
    <nuxt/>
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader'
  import TheFooter from '@/components/TheFooter'
  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>

<style>

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
