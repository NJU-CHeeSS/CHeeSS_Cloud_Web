<template>

  <div id="skill-chart" :style="{width: '100%', height: '300px'}"></div>

</template>

<script type="text/babel">
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name: 'timeChart',
    components: {},
    props: {},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('skill-chart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            data: ['计算机', 'python', '大数据', '数据处理', 'Java', 'Hadoop']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      }
    }
  }
</script>
