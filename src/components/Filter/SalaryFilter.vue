<template>

  <div class="collapse-wrapper">
    <el-collapse v-model="activePanel">
      <el-collapse-item title="筛选" name="1">
        <el-cascader
          expand-trigger="hover"
          :show-all-levels="false"
          :options="jobTypes"
          v-model="chosenJobType"
          @change="handleSearch">
        </el-cascader>
      </el-collapse-item>
      <el-collapse-item title="地点" name="2">
        <el-select v-model="city" placeholder="请选择" @change="handleSearch">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  import {Collapse, CollapseItem, Select, Option, Cascader} from 'element-ui'
  import {mapActions, mapState, mapMutations} from 'vuex'

  export default {
    name: 'job-filter',
    components: {
      elCollapse: Collapse,
      elCollapseItem: CollapseItem,
      elSelect: Select,
      elOption: Option,
      elCascader: Cascader
    },
    data() {
      return {
        city: '上海',
        activePanel: ['1', '2'],
        cities: [{
          value: '选项1',
          label: '上海'
        }, {
          value: '选项2',
          label: '北京'
        }, {
          value: '选项3',
          label: '南京'
        }],
        chosenJobType: ['按职位', '物流'],
        jobTypes: [{
          value: '按身份',
          label: '按身份',
          children: [{
            value: '主管 | 总监 | 经理',
            label: '主管 | 总监 | 经理'
          }, {
            value: '助理 | 经纪人',
            label: '助理 | 经纪人'
          }, {
            value: '出纳',
            label: '出纳'
          }, {
            value: '文员 | 文秘',
            label: '文员 | 文秘'
          }, {
            value: '前台 | 接待',
            label: '前台 | 接待'
          }, {
            value: '专员',
            label: '专员'
          }, {
            value: '代表',
            label: '代表'
          }, {
            value: '工程师',
            label: '工程师'
          }, {
            value: '客服',
            label: '客服'
          }, {
            value: '实习生',
            label: '实习生'
          }, {
            value: '顾问',
            label: '顾问'
          }, {
            value: '研究员 | 分析员 | 技术员',
            label: '研究员 | 分析员 | 技术员'
          }, {
            value: '后勤 | 内勤',
            label: '后勤 | 内勤'
          }, {
            value: '设计师',
            label: '设计师'
          }, {
            value: '业务员',
            label: '业务员'
          }, {
            value: '策划',
            label: '策划'
          }, {
            value: '安全员',
            label: '安全员'
          }]
        }, {
          value: '按职位',
          label: '按职位',
          children: [{
            value: '物流',
            label: '物流'
          }, {
            value: '销售 | 营销',
            label: '销售 | 营销'
          }, {
            value: '财务',
            label: '财务'
          }, {
            value: '产品',
            label: '产品'
          }, {
            value: '生产',
            label: '生产'
          }, {
            value: '行政',
            label: '行政'
          }, {
            value: '物业',
            label: '物业'
          }, {
            value: '心理',
            label: '心理'
          }, {
            value: '机械',
            label: '机械'
          }, {
            value: '咨询',
            label: '咨询'
          }, {
            value: '采购',
            label: '采购'
          }, {
            value: '供应链 | 计划',
            label: '供应链 | 计划'
          }, {
            value: '旅游 | 计调',
            label: '旅游 | 计调'
          }, {
            value: '推广',
            label: '推广'
          }, {
            value: '运营',
            label: '运营'
          }, {
            value: '室内 | 景观 | 平面设计',
            label: '室内 | 景观 | 平面设计'
          }, {
            value: '实验室 | 研发',
            label: '实验室 | 研发'
          }, {
            value: '外贸',
            label: '外贸'
          }, {
            value: '法务',
            label: '法务'
          }, {
            value: 'IT | 互联网 | 开发 | 软件',
            label: 'IT | 互联网 | 开发 | 软件'
          }, {
            value: '教育 | 培训 | 课程 | 老师',
            label: '教育 | 培训 | 课程 | 老师'
          }, {
            value: '信贷 | 网贷  证券 | 投资',
            label: '信贷 | 网贷  证券 | 投资'
          }, {
            value: '保险',
            label: '保险'
          }, {
            value: '银行 | 金融',
            label: '银行 | 金融'
          }, {
            value: '人事 | HR',
            label: '人事 | HR'
          }, {
            value: '剪辑 | 制作',
            label: '剪辑 | 制作'
          }, {
            value: '医疗 | 医学',
            label: '医疗 | 医学'
          }, {
            value: '售后',
            label: '售后'
          }, {
            value: '房产',
            label: '房产'
          }, {
            value: '电工',
            label: '电工'
          }, {
            value: '维修',
            label: '维修'
          }]
        }],
      }
    },
    methods: {
      ...mapActions('treatment', [
        'fetchTreatmentInfo'
      ]),
      handleSearch() {
        // console.log(this.chosenJobType)

        let searchInfo = {
          jobType: this.jobType,
          city: this.city
        }
        this.fetchTreatmentInfo({
          searchInfo: searchInfo
        })
      }
    }
  }
</script>

<style scoped src="./JobFilter.css"></style>
