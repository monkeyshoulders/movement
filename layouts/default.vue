<template>
  <div>
    <TheHeader />
    <nuxt/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader/TheHeader'
  export default {
    components: {
      TheHeader
    }
  }
</script>

<style>

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
