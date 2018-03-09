<template>

  <div class="skill-analyse-wrapper">
    <div v-if="keywords !== null">
      <skill-keywords :keywords="keywords"></skill-keywords>
      <skill-distribution :keywords="keywords"></skill-distribution>
    </div>

    <div v-else :style="{textAlign: 'center'}">
      <img src="../../assets/img/loading.gif" width="200"/>
    </div>
  </div>

</template>

<script>
  import SkillKeywords from './SkillKeywords.vue'
  import SkillDistribution from './SkillDistribution.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'skill-analyse',
    components: {
      SkillKeywords,
      SkillDistribution
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('skill', {
        keywords: state => state.keywords
      })
    },
    methods: {}
  }
</script>

<style scoped src="./SkillAnalyse.css"></style>
