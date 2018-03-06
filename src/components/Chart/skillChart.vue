<template>

  <div ref="skillChart" :style="{width: '100%', height: '300px'}"></div>

</template>

<script type="text/babel">

  import {mapState, mapActions} from 'vuex'
  import {store} from '../../main'
  import echarts from 'echarts'

  //  let echarts = require('echarts/lib/echarts') // 引入基本模板
  //  require('echarts/lib/chart/bar') // 引入柱状图组件
  //  require('echarts/lib/component/tooltip') // 引入提示框和title组件
  //  require('echarts/lib/component/title')

  export default {
    name: 'skill-chart',
    components: {},
    data() {
      return {}
    },
//    created() {
//      // this.fetchSkillInfo()
//      this.setEchart()
//    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'setEchart'
    },
    props: ['keywords'],
    computed: {
//      ...mapState('skill', {
//        keywords: state => state.keywords
//      }),
      x: {
        get: function () {
          let temp = []
          console.log(this.keywords)
          for (let i = 0; i < this.keywords.length; i++) {
            temp.push(this.keywords[i].keywords)
          }
          return temp
        }
      },
      y: {
        get: function () {
          let temp = []
          for (let i = 0; i < this.keywords.length; i++) {
            temp.push(this.keywords[i].figure)
          }
          return temp
        }
      }
    },
    methods: {
      ...mapActions('skill', [
        'fetchSkillInfo'
      ]),
      setEchart() {
        // 基于准备好的dom，初始化echarts实例
        console.log('set echart!!!')
        let myChart = echarts.init(this.$refs.skillChart)
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            data: this.x
          },
          yAxis: {},
          series: [{
            name: '',
            type: 'bar',
            data: this.y
          }]
        })
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.setEchart()
      })
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('fetchSkillInfo').then(next(true))
    }
  }
</script>
