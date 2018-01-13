<template>
  <div class="letter-wrapper">
    <span>{{ letter }}</span>
  </div>

</template>

<script>
  export default {
    name: 'letter-filter',
    components: {},
    data () {
      return {}
    },
    props: ['letter'],
    methods: {}
  }
</script>

<style scoped src="./LetterFilter.css"></style>
