<template>
  <div id="app">
    <Navbar />
    <transition name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                mode="out-in"
                :duration="{ enter: 250, leave: 500 }">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './pages/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
html,
body {
  position: relative;
  overflow-x: hidden;
}

.card {
  border: 2px solid black;
  box-shadow: 0px 0px 3px 3px rgb(220,220,220,.7);
}

.splash {
  padding-top: 7rem;
  padding-bottom: 2rem;
}

.bounce-left {
  -moz-animation: left 2s infinite;
  -webkit-animation: left 2s infinite;
  animation: left 2s infinite;
}

.bounce-right {
  -moz-animation: right 2s infinite;
  -webkit-animation: right 2s infinite;
  animation: right 2s infinite;
}

.bounce-down {
  -moz-animation: right 2s infinite;
  -webkit-animation: right 2s infinite;
  animation: down 2s infinite;
}

@keyframes right {
  0%, 50%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(10px);
  }
}

@keyframes left {
  0%, 50%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(-10px);
  }
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

.arrow {
  font-size: 1.5rem;
}

.card {
  border: 1px solid black;
}

.text {
  font-family: 'Roboto-Mono', monospace;
  font-size: 1.2rem;
}
</style>
