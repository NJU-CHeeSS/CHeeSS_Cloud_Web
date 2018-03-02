<template>

  <div class="job-list-header-wrapper">
    <p>1,234 个符合条件的职位</p>
    <img src="../../assets/img/right.png" width="25"/>
    <button v-if="type==='filter'" @click="goToJobRecommendPage">推荐职位</button>
    <button v-if="type==='recommend'" @click="goToJobFilterPage">筛选职位</button>

    <div class="right-wrapper">
      <span>排序方式</span>
      <el-select v-model="order" placeholder="请选择" @change="handleChangeOrder">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.label">
        </el-option>
      </el-select>

    </div>
  </div>

</template>

<script>
  import {router} from '../../main.js'
  import {Select, Option, Message} from 'element-ui'
  import {mapMutations, mapState, mapActions} from 'vuex'

  export default {
    name: 'job-list-header',
    components: {
      elSelect: Select,
      elOption: Option,
      Message
    },
    data() {
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
        order: '发布日期'
      }
    },
    computed: {
      ...mapState('job', {
        filterOrder: state => state.filterOrder,
        filterInfo: state => state.filterInfo,
        currentPage: state => state.currentPage
      }),
    },
    props: ['type'],
    methods: {
      ...mapMutations('job', [
        'saveFilterOrder',
        'saveType'
      ]),
      ...mapActions('job', [
        'fetchJobList'
      ]),
      goToJobRecommendPage() {
        this.saveType('recommend')
        router.push({name: 'JobRecommendPage'})
      },
      goToJobFilterPage() {
        this.saveType('filter')
        router.push({name: 'JobFilterPage'})
      },
      handleChangeOrder() {
        this.saveFilterOrder(this.order)
        let searchInfo = {
          keyword: this.filterInfo,
          order: this.filterOrder,
          page: this.currentPage,
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

<style scoped src="./JobListHeader.css"></style>
