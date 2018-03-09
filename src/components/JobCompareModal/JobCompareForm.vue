<template>
  <div class="job-compare-modal-wrapper">
    <el-button
      class="close-button"
      type="primary"
      icon="el-icon-close"
      @click="closeBox"></el-button>

    <div class="title-wrapper">
      {{compareResult.job1Name}} VS {{compareResult.job2Name}}
    </div>

    <multiple-bar-chart :x="x"
                        :average="average"
                        :low="low"
                        :high="high"></multiple-bar-chart>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="item"
        label=""
      >
      </el-table-column>
      <el-table-column
        prop="job1"
        :label="this.compareResult.job1Name"
      >
      </el-table-column>
      <el-table-column
        prop="job2"
        :label="this.compareResult.job2Name"
      >
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  import {Button, Table, TableColumn} from 'element-ui'
  import {mapState, mapMutations} from 'vuex'
  import MultipleBarChart from '../Chart/multipleBarChart.vue'

  export default {
    name: 'job-compare-form',
    components: {
      elButton: Button,
      elTable: Table,
      elTableColumn: TableColumn,
      MultipleBarChart
    },
    props: ['compareResult'],
    data() {
      let company1Keywords = []
      this.compareResult.company1Keywords.forEach((keywords, index) => {
        company1Keywords.push(keywords + ' ')
      })

      let company2Keywords = []
      this.compareResult.company2Keywords.forEach((keywords, index) => {
        company2Keywords.push(keywords + ' ')
      })

      let job1Keywords = []
      this.compareResult.job1Keywords.forEach((keywords, index) => {
        job1Keywords.push(keywords + ' ')
      })

      let job2Keywords = []
      this.compareResult.job2Keywords.forEach((keywords, index) => {
        job2Keywords.push(keywords + ' ')
      })

      return {
        x: [
          this.compareResult.job1Name,
          this.compareResult.job2Name
        ],
        average: [
          (this.compareResult.job1MinSalary + this.compareResult.job1MaxSalary) / 2,
          (this.compareResult.job2MinSalary + this.compareResult.job2MaxSalary) / 2
        ],
        low: [
          this.compareResult.job1MinSalary,
          this.compareResult.job2MinSalary
        ],
        high: [
          this.compareResult.job1MaxSalary,
          this.compareResult.job2MaxSalary
        ],
        tableData: [
          {
            item: '所属公司',
            job1: this.compareResult.company1Name,
            job2: this.compareResult.company2Name
          },
          {
            item: '公司关键词',
            job1: company1Keywords,
            job2: company2Keywords
          },
          {
            item: '职位性质',
            job1: this.compareResult.job1Property,
            job2: this.compareResult.job2Property
          },
          {
            item: '工作地点',
            job1: this.compareResult.job1Location,
            job2: this.compareResult.job2Location
          },
          {
            item: '招聘人数',
            job1: this.compareResult.job1PeopleNum,
            job2: this.compareResult.job2PeopleNum
          },
          {
            item: '职位关键词',
            job1: job1Keywords,
            job2: job2Keywords
          }
        ]
      }
    },
    methods: {
      ...mapMutations('job', [
        'saveCompareResult'
      ]),
      closeBox() {
        this.$modal.hide('job-compare-modal')
        this.saveCompareResult(null)
      }
    }
  }
</script>

<style scoped src="./JobCompareForm.css"></style>

