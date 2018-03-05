<template>

  <div class="salary-level-wrapper">

    <div-header :header="'公司平均薪资水平'"></div-header>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="averageSalary"
        label="平均薪资"
      >
      </el-table-column>
      <el-table-column
        prop="minSalary"
        label="最低薪资"
      >
      </el-table-column>
      <el-table-column
        prop="maxSalary"
        label="最高薪资"
      >
      </el-table-column>
    </el-table>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Table, TableColumn} from 'element-ui'
  import {mapState} from 'vuex'

  export default {
    name: 'company-salary-level',
    components: {
      DivHeader,
      elTable: Table,
      elTableColumn: TableColumn
    },
    props: ['companySalary'],
    data() {
      let tableData = []
      tableData.push(this.companySalary)
      return {
        tableData: tableData
      }
    },
    methods: {}
  }
</script>

<style scoped src="./CompanySalaryLevel.css"></style>
