<template>
  <div class="card text-white my-4 mx-2">
    <img :src="require(`@/assets/projects/${img}`)" class="card-img img-fluid" :alt="name" />
    <div class="img-overlay"></div>
    <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
      <h4 class="card-title text-center">{{ name.toUpperCase() }}</h4>
      <p class="card-text text-center">{{ description }}</p>
      <div>
        <span class="badge badge-info mx-1" v-for="language in languages" :key="language">{{ language }}</span>
      </div>
      <a class="btn btn-primary btn-sm mt-3" :href="repo"><i class="fab fa-github"></i></a>
      <h6 class="card-title text-center mt-3" v-if="prize">{{ prize.split('|')[1] }}</h6>
    </div>
    <div v-if="prize" class="accolade">
      <img :src="require(`@/assets/icons/${prize.split('|')[0]}`)" class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    description: String,
    prize: String,
    languages: Array,
    repo: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.card {
  box-shadow: 0px 0px 4px 4px rgb(220,220,220,.9);
}

.card:hover {
  box-shadow: 10px 10px 5px grey;
  transition: .5s;
}

.card:hover > .img-overlay,
.card:active > .img-overlay {
  background-color: #000;
  opacity: .7;
  width: 100.3%;
  height: 100.3%;
  position: absolute;
  border-radius: 4px;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
}

.card-img-overlay {
  opacity: 0;
}

.card-img-overlay:hover,
.card-img-overlay:active {
  opacity: 1;
}

.accolade {
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
}
</style>