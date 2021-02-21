<template>
  <div class="splash container d-flex flex-column justify-content-center align-items-center" id="projects">
    <h1 class="display-3 mb-5"> projects </h1>
    <div class="row">
      <div class="col-12 d-flex align-items-center mb-4">
        <div class="row">
          <div class="col-md-4" v-for="project of data" :key="project.name">
            <ProjectCard :img="project.img" :name="project.name"
                      :description="project.description"
                      :repo="project.repo"
                      :prize="project.prize"
                      :languages="project.languages" />
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
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.data'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.data = projects
  },
  methods: {
    nextPage() {
      this.$router.push('/')
    },
    prevPage() {
      this.$router.push('experience')
    }
  }
}
</script>

<style scoped>
</style>