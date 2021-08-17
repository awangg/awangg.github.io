<template>
  <b-navbar toggleable class="navbar navbar-expand-lg fixed-top bg-white">
    <b-navbar-toggle class="navbar-toggler" target="navigation">
    </b-navbar-toggle>
    <b-collapse class="collapse navbar-collapse justify-content-center bg-white" id="navigation" is-nav>
      <b-navbar-nav class="nav navbar-nav text-center mr-auto">
        <b-nav-item class="nav-item"><router-link class="nav-link" to="#projects">PROJECTS</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link" to="#experience">EXPERIENCE</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link" to="#about">ABOUT</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="nav navbar-nav text-center ml-auto">
        <div>
          <a href="https://github.com/awangg"><i class="social fab fa-github" v-b-tooltip.hover.bottom="'Check out my Github!'" variant="primary"></i></a>
          <a href="https://www.linkedin.com/in/andy-wang-219479192/"><i class="social fab fa-linkedin" v-b-tooltip.hover.bottom="'Connect with me on LinkedIn!'" variant="primary"></i></a>
          <a href="https://drive.google.com/file/d/1jklfX7UE_oKZiDD4tGpnJmbyaJi55bvG/view?usp=sharing"><i class="social fas fa-file" v-b-tooltip.hover.bottom="'Download my resume!'" variant="primary"></i></a>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Palanquin:wght@600&display=swap');

.navbar {
  font-family: 'Palanquin', sans-serif;
  background-color: transparent;
  padding: .5rem 1rem;
}

i:hover,
.nav-item .nav-link a {
  color: #ba2d2d;
}

.nav-item {
  padding: .25rem 0rem;
}

.nav-item:hover {
  background-color: #eee;
  transition: .5s;
}

.nav-link,
.nav-link:hover {
  margin: 0rem 1rem;
}

i {
  color: #000;
}

.social {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>