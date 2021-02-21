<template>
  <div class="card text-white my-4 mx-2">
    <img :src="require(`@/assets/jobs/${img}`)" class="card-img img-fluid" :alt="name" />
    <div class="img-overlay"></div>
    <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
      <h4 class="card-title text-center">{{ name.toUpperCase() }}</h4>
      <p class="card-text text-center">{{ description }}</p>
      <div>
        <span class="badge badge-info mx-1" v-for="language in languages" :key="language">{{ language }}</span>
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
    languages: Array
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
  opacity: .8;
  width: 100.3%;
  height: 100.3%;
  position: absolute;
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
</style>