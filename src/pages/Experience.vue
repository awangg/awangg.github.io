<template>
  <div class="row">
    <div class="col-md-4" v-for="job of data" :key="job.name">
      <WorkCard :img="job.img" :name="job.name"
                :description="job.description"
                :languages="job.languages"
                :color="job.color" />
    </div>
  </div>
</template>

<script>
import WorkCard from '../components/WorkCard'
import jobs from '../data/jobs.data'

export default {
  components: {
    WorkCard
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.data = jobs
  }
}
</script>

<style scoped>
</style>