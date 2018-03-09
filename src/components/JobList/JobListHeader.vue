<template>

  <div class="job-list-header-wrapper">
    <p>1,234 个符合条件的职位</p>
    <img src="../../assets/img/right.png" width="25"/>
    <button v-if="pageType==='filter'" @click="goToJobRecommendPage">推荐职位</button>
    <button v-if="pageType==='recommend'" @click="goToJobFilterPage">筛选职位</button>

    <div class="right-wrapper">
      <span>排序方式</span>
      <el-select v-model="order" placeholder="请选择" @change="handleChangeOrder">
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
          value: 'date',
          label: '发布日期'
        }, {
          value: 'hot',
          label: '热度'
        }, {
          value: 'low_money',
          label: '薪资'
        }],
        order: '发布日期'
      }
    },
    computed: {
      ...mapState('job', {
        filterOrder: state => state.filterOrder,
        filterInfo: state => state.filterInfo,
        currentPage: state => state.currentPage,
      }),
    },
    props: ['pageType'],
    methods: {
      ...mapMutations('job', [
        'saveFilterOrder',
        'savePageType'
      ]),
      ...mapActions('job', [
        'fetchJobList',
        'fetchRecommendJobList'
      ]),
      goToJobRecommendPage() {
        this.savePageType('recommend')
        router.push({name: 'JobRecommendPage'})
      },
      goToJobFilterPage() {
        this.savePageType('filter')
        router.push({name: 'JobFilterPage'})
      },
      handleChangeOrder() {
        this.saveFilterOrder(this.order)
        if (this.pageType === 'filter') {
          let searchInfo = {
            order: this.filterOrder,
            page: this.currentPage,
            location: this.filterInfo.location,
            diploma: this.filterInfo.diploma,
            earlyReleaseDate: this.filterInfo.earlyReleaseDate,
            property: this.filterInfo.property[this.filterInfo.property.length - 1]
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
        } else {
          let searchInfo = {
            order: this.filterOrder,
            page: this.currentPage,
          }
          this.fetchRecommendJobList({
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
  }
</script>

<style scoped src="./JobListHeader.css"></style>
