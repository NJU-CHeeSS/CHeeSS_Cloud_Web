<template>
  <div class="auth-wrapper">

    <h1>注&nbsp;&nbsp;册</h1>

    <div class="left-form-wrapper">


      <el-form :model="registerForm" :rules="rules" ref="registerForm" labelPosition="top">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>

        <el-form-item label="邮箱账号" prop="email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="registerForm.confirmPassword" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-radio v-model="registerForm.gender" label="男">男</el-radio>
          <el-radio v-model="registerForm.gender" label="女">女</el-radio>
        </el-form-item>

      </el-form>

    </div>


    <div class="right-wrapper">

      <el-form :model="registerForm" :rules="rules" ref="registerForm" labelPosition="top">
        <el-form-item label="年龄（1至70岁之间）" prop="age">
          <el-input-number v-model="registerForm.age" @change="" :min="1" :max="70"
                           label="年龄"></el-input-number>
        </el-form-item>

        <el-form-item label="城市" prop="options">
          <el-select v-model="registerForm.city" placeholder="请选择">
            <el-option
              v-for="item in registerForm.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="工作经验（年）" prop="age">
          <el-input-number v-model="registerForm.experience" @change="" :min="1" :max="50" :step="0.5"
                           label="经验"></el-input-number>
        </el-form-item>

        <el-form-item label="技能" prop="age" class="tags-wrapper">
          <el-tag
            :key="tag"
            v-for="tag in registerForm.skillTags"
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

        <el-form-item>
          <div class="go-sign-in">
            <span>已有账号？</span>
            <el-button
              type="text"
              @click="goToLoginPage"
            >
              去登录
            </el-button>
          </div>
          <div class="sign-in-button-wrapper">
            <el-button type="text" @click="submitForm('registerForm')">注册</el-button>
          </div>
          <!--<el-button @click="resetForm('signInForm')">重置</el-button>-->
        </el-form-item>


      </el-form>

    </div>

  </div>
</template>

<script>
  import { Button, Input, Form, FormItem, Radio, InputNumber, Select, Option, Tag, Message } from 'element-ui'
  import { router } from '../../main'

  export default {
    name: 'register-form-page',
    components: {
      elButton: Button,
      elInput: Input,
      elForm: Form,
      elFormItem: FormItem,
      elRadio: Radio,
      elInputNumber: InputNumber,
      elSelect: Select,
      elOption: Option,
      elTag: Tag
    },
    data () {
      let checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }
      let checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入邮箱账号'))
        } else if (!/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(value)) {
          return callback(new Error('请输入正确的邮箱格式'))
        } else {
          callback()
        }
      }
      let validatePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      let validateConfirmPassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }

      return {
        activeName: 'first',
        registerForm: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          gender: '男',
          age: 20,
          experience: 0,
          city: '北京',
          options: [{
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
          skillTags: ['标签一', '标签二', '标签三'],
        },
        inputVisible: false,
        inputValue: '',
        rules: {
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          confirmPassword: [
            {validator: validateConfirmPassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      goToLoginPage () {
        router.push({name: 'LoginPage'})
      },
      submitForm () {

      },
      handleClose (tag) {
        this.registerForm.skillTags.splice(this.registerForm.skillTags.indexOf(tag), 1)
      },

      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.registerForm.skillTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped src="./RegisterForm.css"></style>
