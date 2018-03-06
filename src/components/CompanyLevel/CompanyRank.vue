<template>

  <div class="rank-wrapper">

    <div-header :header="'同类公司排行'"></div-header>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="rank"
        label="排名"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="公司名称"
      >
      </el-table-column>
      <el-table-column
        prop="industry"
        label="公司类型"
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
    name: 'company-rank',
    components: {
      DivHeader,
      elTable: Table,
      elTableColumn: TableColumn
    },
    computed: {},
    props: ['companyRank'],
    data() {
      let table = []
      this.companyRank.forEach((company, index) => {
        table.push({
          rank: index + 1,
          name: company.name,
          industry: company.industry
        })
      })
      console.log(table)
      return {
        tableData: table
      }
    },
    created() {
//      console.error(this)
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyRank.css"></style>
