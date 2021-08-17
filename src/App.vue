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
.bg-accent {
  background-color: #ba2d2d;
}

.accent {
  color: #ba2d2d;
}
</style>
