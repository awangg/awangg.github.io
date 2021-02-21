<template>
  <div class="splash container d-flex flex-column justify-content-center align-items-center" id="experience">
    <h1 class="display-3 mb-5"> experience </h1>
    <div class="row">
      <div class="col-12 d-flex align-items-center mb-4">
        <div class="row">
          <div class="col-md-4" v-for="job of data" :key="job.name">
            <WorkCard :img="job.img" :name="job.name"
                      :description="job.description"
                      :languages="job.languages" />
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col">
        <div class="bounce-left text-center">
          <button class="btn" v-on:click="prevPage">
            <i class="fa fa-arrow-left arrow"></i>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="bounce-right text-center">
          <button class="btn" v-on:click="nextPage">
            <i class="fa fa-arrow-right arrow"></i>
          </button>
        </div>
      </div>
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
  },
  methods: {
    nextPage() {
      this.$router.push('projects')
    },
    prevPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>