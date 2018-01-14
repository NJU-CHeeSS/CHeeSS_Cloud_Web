<template>
  <div class="header-wrapper">

    <div class="container">

      <div class="up-wrapper">
        <div class="company-icon">
          <img src="../../assets/img/companyIcon.png"/>
        </div>

        <div class="company-info">
          <p>公司名称</p>
          <span>公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍
          公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</span>
        </div>

        <div class="follow-wrapper">
          <button>关注</button>
        </div>
      </div>

      <div class="down-wrapper">

        <div class="tab-wrapper">
          <button>公司详情</button>
          <button>公司水平</button>
          <button>相关公司</button>
        </div>
      </div>
    </div>


  </div>

</template>

<script>

  export default {
    name: 'company-header',
    components: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./CompanyHeader.css"></style>
