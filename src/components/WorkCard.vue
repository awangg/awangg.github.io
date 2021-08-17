<template>
  <div class="card my-4 mx-2" :style="cardStyle">
    <img :src="require(`@/assets/jobs/${img}`)" class="card-img img-fluid p-5" :alt="name" />
    <div class="img-overlay d-flex justify-content-center align-items-center">
      <div class="text-center text-white">
        <h2 class="card-title">{{name.toUpperCase()}}</h2>
        <hr class="mt-5" />
        <p class="px-3">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    description: String,
    languages: Array,
    color: String
  },
  data() {
    return {
      cardStyle: {
        'background-color': this.color
      }
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
</style>