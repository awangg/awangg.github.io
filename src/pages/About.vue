<template>
  <div class="splash container d-flex flex-column justify-content-center align-items-center" id="profile">
    <h1 class="display-3 mb-5"> about me </h1>
    <div class="row">
      <div class="col-12 d-flex align-items-center mb-4">
        <div class="card">
          <div class="card-body">
            <span class="text">
              hello! i'm a sophomore at Rice University majoring in computer science and statistics. i'm a full-stack
              web developer but specialize in back-end development. i have professional experience working in both 
              microservices-based and model-view-controller (MVC) back-end architecture. i also love competing at 
              hackathons and have won awards in 4 out of the 5 hackathons i've attended (check out some of my projects
              in a sec!).
            </span>
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
export default {
  methods: {
    nextPage() {
      this.$router.push('experience')
    },
    prevPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>