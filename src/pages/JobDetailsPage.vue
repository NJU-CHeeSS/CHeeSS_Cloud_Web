<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">

        <job-details></job-details>


      </div>
    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import JobDetails from '../components/JobDetails/JobDetails.vue'

  export default {
    name: 'job-details-page',
    components: {
      Layout,
      JobDetails
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

