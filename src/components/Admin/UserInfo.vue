<template>
  <div class="info-wrapper">


    <h1>个人信息</h1>

    <div class="left-form-wrapper">
      <el-form :model="UserInfo" :rules="rules" ref="UserInfo" labelPosition="top">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="UserInfo.username"></el-input>
        </el-form-item>

        <el-form-item label="邮箱账号" prop="email">
          <el-input :disabled="true" v-model="UserInfo.email"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="UserInfo.phone"></el-input>
        </el-form-item>

        <el-form-item label="年龄（1至70岁之间）" prop="age">
          <el-input-number v-model="UserInfo.age" @change="" :min="1" :max="70"
                           label="年龄"></el-input-number>
        </el-form-item>

        <el-form-item label="城市" prop="options">
          <el-select v-model="UserInfo.city" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>
    </div>

    <div class="right-form-wrapper">
      <el-form :model="UserInfo" :rules="rules" ref="UserInfo" labelPosition="top">

        <el-form-item label="性别" prop="gender">
          <el-radio v-model="UserInfo.gender" label="男">男</el-radio>
          <el-radio v-model="UserInfo.gender" label="女">女</el-radio>
        </el-form-item>

        <el-form-item class="profession-selection" label="专业" prop="options">
          <el-cascader
            expand-trigger="hover"
            :options="UserInfo.professions"
            v-model="UserInfo.selectOption"
            @change="">
          </el-cascader>
        </el-form-item>

        <el-form-item label="学历" prop="options">
          <el-select v-model="UserInfo.degree" placeholder="请选择">
            <el-option
              v-for="item in degrees"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="工作经验（年）" prop="experience">
          <el-input-number v-model="UserInfo.experience" @change="" :min="0" :max="50" :step="0.5"
                           label="经验"></el-input-number>
        </el-form-item>

        <el-form-item label="技能" prop="age" class="tags-wrapper">
          <el-tag
            :key="tag"
            v-for="tag in UserInfo.skillTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>

        </el-form-item>

      </el-form>

    </div>

  </div>

</template>

<script>
  import { Button, Input, Form, FormItem, Message, InputNumber, Select, Option, Radio, Cascader, Tag } from 'element-ui'

  export default {
    name: 'user-info',
    components: {
      elButton: Button,
      elInput: Input,
      elForm: Form,
      elFormItem: FormItem,
      elInputNumber: InputNumber,
      elSelect: Select,
      elOption: Option,
      elRadio: Radio,
      elCascader: Cascader,
      elTag: Tag
    },
    data () {
      let checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入邮箱账号'))
        } else {
          callback()
        }
      }
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        activeName: 'first',
        UserInfo: {
          password: '',
          username: '',
          email: 'xxx@xxx.com',
          phone: '',
          age: 20,
          city: '北京',
          gender: '男',
          degree: '本科',
          experience: 0,
          skillTags: ['标签一', '标签二', '标签三'],
          professions: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
        },
        cities: [{
          value: '选项1',
          label: '北京'
        }, {
          value: '选项2',
          label: '上海'
        }, {
          value: '选项3',
          label: '广州'
        }, {
          value: '选项4',
          label: '南京'
        }, {
          value: '选项5',
          label: '西安'
        }],
        degrees: [
          {
            value: '选项1',
            label: '专科'
          }, {
            value: '选项2',
            label: '本科'
          }, {
            value: '选项3',
            label: '硕士'
          }, {
            value: '选项4',
            label: '博士'
          }
        ],
        inputVisible: false,
        inputValue: '',
        selectedOption: [],
        rules: {
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleClose (tag) {
        this.UserInfo.skillTags.splice(this.UserInfo.skillTags.indexOf(tag), 1)
      },
      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.UserInfo.skillTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped src="./UserInfo.css"></style>
