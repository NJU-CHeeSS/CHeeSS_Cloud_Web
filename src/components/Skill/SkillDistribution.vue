<template>

  <div class="skill-wrapper">
    <div-header :header="'技能要求'"></div-header>
    <skill-chart></skill-chart>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SkillChart from '../Chart/skillChart.vue'

  export default {
    name: 'skill-distribution',
    components: {
      DivHeader,
      SkillChart
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Skill.css"></style>
