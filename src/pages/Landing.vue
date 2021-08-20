<template>
  <div class="mb-5 pb-5">
    <div class="splash d-flex justify-content-center align-items-end">
      <div class="text-center px-2">
        <h1 class="display-3 title">hello, i'm <span class="accent">andy wang</span></h1>
        <p class="subtitle mt-4">an experienced software developer studying at Rice University interested in large-scale software systems</p>
        <div class="mt-4">
          <a href="mailto:andynmnwang@gmail.com"><i class="social fas fa-envelope"></i>&nbsp;<span class="email ml-1">andynmnwang@gmail.com</span></a>
        </div>
        <DownArrow class="mt-5" />
      </div>
    </div>

    <div class="projects container mt-5">
      <h1 class="title pl-2" id="projects">cool projects</h1>
      <Projects />
      <DownArrow class="text-center mt-5" />
    </div>

    <div class="projects container mt-5">
      <h1 class="title pl-2" id="experience">places i've worked at</h1>
      <Experience />
      <DownArrow class="text-center mt-5" />
    </div>

    <div class="about container mt-5">
      <h1 class="title pl-2" id="about">definition of andy wang</h1>
      <About class="mt-5 " />
    </div>
  </div>
</template>

<script>
import DownArrow from '../components/DownArrow';

import Projects from './Projects';
import Experience from './Experience';
import About from './About';

export default {
  name: "Landing",
  components: { DownArrow, Projects, Experience, About },
  mounted() {
    setTimeout(() => this.scrollFix(this.$route.hash), 1)
  },
  methods: {
    scrollFix(hashbang) {
      location.hash = hashbang
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Palanquin:wght@600&display=swap');

@media (max-width: 576px) {
  .splash {
    height: 80vh;
  }
}

@media (min-width: 768px) {
  .splash {
    height: 55vh;
  }
}

.title {
  font-family: 'Palanquin', sans-serif;
}

.subtitle {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-style: italic;
  color: #999;
  font-size: 1.3rem;
}

a:hover {
  text-decoration: none;
}

.social {
  color: #ba2d2d;
  font-size: 1.5rem;
}

.email {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 1.5rem;
  color: #000;
}
</style>