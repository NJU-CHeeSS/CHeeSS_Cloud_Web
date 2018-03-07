<template>

  <div ref="multipleBarChart" :style="{width: '100%', height: '300px'}"></div>

</template>

<script type="text/babel">

  import {mapState, mapActions} from 'vuex'
  import {store} from '../../main'
  import echarts from 'echarts'

  export default {
    name: 'multiple-bar-chart',
    components: {},
    data() {
      return {}
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'setEchart',
      average(oldY, newY) {
        this.setEchart()
      }
    },
    props: ['x', 'average', 'low', 'high'],
    computed: {},
    methods: {
      setEchart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.multipleBarChart)
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
          color: ['#4e7ede', '#5689f2', '#8DC6FF'],
          xAxis: {
            data: this.x.map(data => {
              return [data.slice(0, data.length / 2), '\n', data.slice(data.length / 2)].join('')
            })
          },
          yAxis: {},
          legend: {
            data: ['最低薪资', '平均薪资', '最高薪资'],
            show: true,
          },
          series: [
            {
              name: '最低薪资',
              type: 'bar',
              data: this.low,
              barGap: 0,
            },
            {
              name: '平均薪资',
              type: 'bar',
              data: this.average,
            },
            {
              name: '最高薪资',
              type: 'bar',
              data: this.high
            }
          ]
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
