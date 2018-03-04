<template>
  <div class="letter-wrapper">
    <span @click="handleSearch">{{ letter }}</span>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'letter-filter',
    components: {},
    data () {
      return {}
    },
    props: ['letter'],
    methods: {
      ...mapActions('company', [
        'searchCompany'
      ]),
      handleSearch() {
        console.log(this.letter)
        this.searchCompany({
          searchInfo: {
            keyword: this.letter
          }
        })
      }
    }
  }
</script>

<style scoped src="./LetterFilter.css"></style>
