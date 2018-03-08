<template>
  <div class="input-wrapper">
    <el-input class="search-input"
              placeholder=""
              v-model="input"
              @keyup.enter.native="handleSearch"
    >
      <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i>
    </el-input>
  </div>

</template>

<script>

  import {Input, Message} from 'element-ui'
  import {mapActions} from 'vuex'

  export default {
    name: 'search-input',
    components: {
      elInput: Input,
      Message
    },
    data() {
      return {
        input: ''
      }
    },
    props: ['letter'],
    methods: {
      ...mapActions('company', [
        'searchCompany'
      ]),
      handleSearch() {
        if (this.input.length === 0) {
          Message.warning('请输入搜索内容！')
        } else {
          console.log(this.input)
          this.searchCompany({
            searchInfo: {
              keyword: this.input,
              page: 1
            }
          })
        }
      }
    }
  }
</script>

<style scoped src="./SearchInput.css"></style>
