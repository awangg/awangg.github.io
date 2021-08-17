<template>
  <div class="row">
    <div class="col-sm-12 col-md-4" v-for="project of data" :key="project.name">
      <ProjectCard :img="project.img" :name="project.name"
                :description="project.description"
                :repo="project.repo"
                :prize="project.prize"
                :languages="project.languages"
                :color="project.color" />
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
  }
}
</script>

<style scoped>
</style>