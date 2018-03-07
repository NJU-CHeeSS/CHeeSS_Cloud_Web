<template>

  <div class="skill-analyse-wrapper">

    <skill-keywords :keywords="keywords"></skill-keywords>
    <skill-distribution :keywords="keywords"></skill-distribution>
  </div>

</template>

<script>
  import SkillKeywords from './SkillKeywords.vue'
  import SkillDistribution from './SkillDistribution.vue'

  export default {
    name: 'skill-analyse',
    components: {
      SkillKeywords,
      SkillDistribution
    },
    props: ['keywords'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./SkillAnalyse.css"></style>
