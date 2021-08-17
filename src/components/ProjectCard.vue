<template>
  <div class="card my-4 mx-2" :style="cardStyle" v-on:click="goToRepo(repo)">
    <img :src="require(`@/assets/projects/${img}`)" class="card-img img-fluid p-5" :alt="name" />
    <div class="img-overlay d-flex justify-content-center align-items-center">
      <div class="text-center text-white">
        <h2 class="card-title">{{name.toUpperCase()}}</h2>
        <hr class="mt-5" />
        <p class="px-3">{{description}}</p>
        <p class="px-3 font-weight-bold">{{prize.split('|')[1]}}</p>
      </div>
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
    repo: String,
    color: String
  },
  data() {
    return {
      cardStyle: {
        'background-color': this.color
      }
    }
  },
  methods: {
    goToRepo(url) {
      window.open(url, '_blank').focus();
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Palanquin:wght@600&display=swap');

.card {
  border-radius: 8px;
  border: 0px;
}

.img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 8px;
  opacity: 0;
}

.card-title {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: 'Palanquin', sans-serif;
}

.img-overlay:hover {
  opacity: .8;
  transition: .5s;
}

.accolade {
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
}
</style>