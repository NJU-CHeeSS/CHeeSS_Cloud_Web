<template>

  <div ref="barChart" :style="{width: '100%', height: '300px'}"></div>

</template>

<script type="text/babel">

  import {mapState, mapActions} from 'vuex'
  import {store} from '../../main'
  import echarts from 'echarts'

  export default {
    name: 'bar-chart',
    components: {},
    data() {
      return {}
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'setEchart',
      y(oldY, newY) {
        this.setEchart()
      }
    },
    props: ['x', 'y'],
    computed: {},
    methods: {
      setEchart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.barChart)
        // 绘制图表
        myChart.setOption({
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 2,
            textStyle: {
              color: '#000'
            },
          },
          legend: {
            data: ['数量'],
            show: true,
          },
          color: ['#4e7ede'],
          xAxis: {
            data: this.x.map(data => {
              return [data.slice(0, data.length / 2), '\n', data.slice(data.length / 2)].join('')
            })
          },
          yAxis: {},
          series: [{
            name: '数量',
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
    }
  }
</script>
