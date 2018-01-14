<template>
  <div class="banner-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">

  </div>

</template>

<script>
  export default {
    name: 'company-banner',
    components: {},
    data () {
      return {
        photoUrl: 'https://images.unsplash.com/photo-1494707924465-e1426acb48cb?auto=format&fit=crop&w=1650&q=80'
      }
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyBanner.css"></style>
