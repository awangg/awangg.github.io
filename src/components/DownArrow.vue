<template>
  <h1 class="bounce-down accent">
    <i class="fas fa-chevron-down"></i>
  </h1>
</template>

<style scoped>
.bounce-down {
  -moz-animation: right 2s infinite;
  -webkit-animation: right 2s infinite;
  animation: down 2s infinite;
}

@keyframes down {
  0%, 50%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(10px);
  }
  75% {
    transform: translateY(10px);
  }
}
</style>