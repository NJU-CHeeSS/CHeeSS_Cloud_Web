<template>

  <div class="collapse-wrapper">
    <el-collapse v-model="activePanel">
      <el-collapse-item title="地点" name="1">
        <el-select v-model="chosenPlace" placeholder="请选择" @change="handleSearch">
          <el-option
            v-for="item in places"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="发布日期" name="2">
        <el-select v-model="chosenDate" placeholder="请选择" @change="handleSearch">
          <el-option
            v-for="item in releaseDate"
            :key="item.value"
            :label="item.label"
            :value="item.label">
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
  import {Collapse, CollapseItem, Select, Option, Message} from 'element-ui'
  import {mapActions, mapState} from 'vuex'
  import {router, store} from '../../main'

  export default {
    name: 'job-filter',
    components: {
      elCollapse: Collapse,
      elCollapseItem: CollapseItem,
      elSelect: Select,
      elOption: Option,
      Message
    },
    data() {
      return {
        activePanel: ['1'],

        chosenDate: '不限',
        chosenPlace: '上海',

        places: [{
          value: '选项1',
          label: '不限'
        }, {
          value: '选项2',
          label: '北京'
        }, {
          value: '选项3',
          label: '上海'
        }, {
          value: '选项4',
          label: '广州'
        }],
        releaseDate: [{
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

      }
    },
    computed: {
      ...mapState('job', {
        filterOrder: state => state.filterOrder
      })
    },
    created() {
    },
    methods: {
      ...mapActions('job', [
        'fetchJobList'
      ]),
      handleSearch() {
        console.log(this.chosenPlace)
        let searchInfo = {
          keyword: this.chosenPlace,
          order: this.filterOrder,
          page: 1,
        }
        this.fetchJobList({
          searchInfo: searchInfo,
          onSuccess: (success) => {
            Message({
              message: '成功获得招聘信息！',
              type: 'success'
            })
          },
          onError: (error) => {
            Message.error(error)
          }
        })
      }
    }
  }
</script>

<style scoped src="./JobFilter.css"></style>
