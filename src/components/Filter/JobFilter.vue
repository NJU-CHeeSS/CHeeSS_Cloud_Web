<template>

  <div class="collapse-wrapper">
    <el-collapse v-model="activePanel">
      <el-collapse-item title="地点" name="1">
      </el-collapse-item>
      <el-collapse-item title="发布日期" name="2">
        <el-select v-model="date" placeholder="请选择">
          <el-option
            v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="工作职能" name="3">
      </el-collapse-item>
      <el-collapse-item title="所属行业" name="4">
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  import { Collapse, CollapseItem, Select, Option } from 'element-ui'

  export default {
    name: 'job-filter',
    components: {
      elCollapse: Collapse,
      elCollapseItem: CollapseItem,
      elSelect: Select,
      elOption: Option
    },
    data () {
      return {
        activePanel: ['1'],
        dateOptions: [{
          value: '选项1',
          label: '不限'
        }, {
          value: '选项2',
          label: '近24小时'
        }, {
          value: '选项3',
          label: '上周'
        }, {
          value: '选项4',
          label: '上月'
        }],
        date: '不限'
      }
    },
    methods: {}
  }
</script>

<style scoped src="./JobFilter.css"></style>
