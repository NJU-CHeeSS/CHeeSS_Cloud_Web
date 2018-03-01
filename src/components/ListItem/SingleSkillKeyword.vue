<template>

  <div class="single-skill-keyword-wrapper">
    <button>{{keyword}}</button>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {mapState, mapActions} from 'vuex'
  import {store} from '../../main'

  export default {
    name: 'single-skill-keyword',
    components: {},
    props: ['keyword'],
    data() {
      return {}
    },
  }
</script>

<style scoped src="./SingleSkillKeyword.css"></style>
