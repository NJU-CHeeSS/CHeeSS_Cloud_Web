<template>

  <div class="job-list-header-wrapper">
    <p>1,234 个符合条件的职位</p>
    <img src="../../assets/img/right.png" width="25"/>
    <button>推荐职位</button>

    <div class="right-wrapper">
      <span>排序方式</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    </div>
  </div>

</template>

<script>
  import { Select, Option } from 'element-ui'

  export default {
    name: 'job-list-header',
    components: {
      elSelect: Select,
      elOption: Option
    },
    data () {
      return {
        options: [{
          value: '选项1',
          label: '发布日期'
        }, {
          value: '选项2',
          label: '热度'
        }, {
          value: '选项3',
          label: '距离'
        }, {
          value: '选项4',
          label: '薪资'
        }],
        value: ''
      }
    },
    methods: {}
  }
</script>

<style scoped src="./JobListHeader.css"></style>
