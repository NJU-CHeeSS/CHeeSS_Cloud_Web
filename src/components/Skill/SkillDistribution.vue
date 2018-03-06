<template>

  <div class="skill-wrapper">
    <div-header :header="'技能要求'"></div-header>
    <skill-chart v-if="keywords.length !== 0" :keywords="keywords"></skill-chart>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SkillChart from '../Chart/skillChart.vue'
  import {store} from '../../main'
  import {mapState} from 'vuex'

  export default {
    name: 'skill-distribution',
    components: {
      DivHeader,
      SkillChart
    },
    computed: {
      ...mapState('skill', {
        keywords: state => state.keywords
      })
    },
    data() {
      return {}
    },
    methods: {},
    beforeRouteEnter(to, from, next) {
      store.dispatch('fetchSkillInfo').then(next(true))
    }
  }
</script>

<style scoped src="./Skill.css"></style>
