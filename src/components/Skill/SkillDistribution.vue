<template>

  <div class="skill-wrapper">
    <div-header :header="'技能要求'"></div-header>
    <bar-chart v-if="keywords.length !== 0" :x="list.x" :y="list.y"></bar-chart>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import BarChart from '../Chart/barChart.vue'

  export default {
    name: 'skill-distribution',
    components: {
      DivHeader,
      BarChart
    },
    props: ['keywords'],
    computed: {
      list: {
        get: function () {
          let x = []
          let y = []
          this.keywords.forEach((keywords, index) => {
            x.push(keywords.keywords)
            y.push(keywords.figure)
          })

          let temp = {}
          temp.x = x
          temp.y = y
          return temp
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped src="./Skill.css"></style>
