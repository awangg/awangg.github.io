<template>
  <b-navbar toggleable class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
    <b-navbar-brand href="/"><img src="@/assets/logo.png" class="img-fluid logo" /></b-navbar-brand>
    <b-navbar-toggle class="navbar-toggler" target="navigation">
    </b-navbar-toggle>
    <b-collapse class="collapse navbar-collapse justify-content-end bg-white" id="navigation" is-nav>
      <b-navbar-nav class="nav navbar-nav text-center">
        <!-- <b-nav-item class="nav-item"><router-link class="nav-link" to="/profile">Profile</router-link></b-nav-item> -->
        <b-nav-item class="nav-item"><router-link class="nav-link" to="/experience">Experience</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link" to="/projects">Projects</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="nav navbar-nav text-center">
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
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');

a {
  color: #000;
}

a:hover {
  color: #aaa;
}

#brand {
  font-family: 'Kanit', sans-serif;
}

#navigation {
  background-color: #fff;
}

.social {
  margin-left: 1rem;
  margin-right: 1rem;
}

.navbar {
  padding: .5rem 1rem;
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
  color: #000;
  margin: 0rem 1rem;
}

.logo {
  width: 2rem;
  height: 2rem;
}

@media (min-width: 768px) {
  .navbar-brand {
    margin-left: 5rem;
  }
}
</style>