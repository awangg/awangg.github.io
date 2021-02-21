<template>
  <div class="splash container-fluid d-flex flex-column justify-content-center align-items-center">
    <div class="biggo rounded">
      <div class="container card splash-card">
        <img src="@/assets/splash.png" v-if="showBg" class="img-fluid animated fadeIn" />
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <div class="d-flex typewriter">
            <span class="intro" v-if="showFirst">MY NAME IS</span>
            <span class="intro" v-if="showSecond">I AM A</span>
            <span class="intro" v-if="showThird">WELCOME :)</span>
          </div>
        </div>
      </div>
      <div class="container row mt-5" v-if="showTitles">
        <div class="col d-flex flex-row flex-wrap title-container">
          <h4 class="titles animated fadeInLeft" v-if="showTitle1"> Software Engineer. </h4>
          <h4 class="titles animated fadeInDown" v-if="showTitle2"> Edumacator. </h4>
          <h4 class="titles animated fadeInRight" v-if="showTitle3">
            <transition name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                leave-active-class="animated bounceOut"
                mode="out-in"
                duration="500">
              <a :href="factHref" v-if="factHref.length > 2" target="_blank">{{ fact }}.</a>
              <div v-if="factHref.length == 1">{{ fact }}.</div>
              <span v-else>{{ fact }}.</span>
            </transition>
          </h4>
        </div>
      </div>
      <div class="row mt-5" v-if="showArrow">
        <div class="col">
          <div class="bounce-down text-center">
            <i class="fas fa-chevron-down animated fadeIn" style="font-size: 1.5rem"></i>
          </div>
        </div> 
      </div>
    </div>
    <div class="container row mt-5">
      <div class="col-md-4 col-sm-12 d-flex align-items-center">
        <img src="@/assets/pog.jpg" class="img-fluid rounded-circle">
      </div>
      <div class="col-md-8 col-sm-12 d-flex align-items-center mt-4">
        <div class="card">
          <div class="card-body">
            <span class="text">
              hello! i'm a sophomore at Rice University majoring in computer science and statistics. i'm a full-stack
              web developer but specialize in back-end development with professional experience working in both 
              microservices-based and model-view-controller (MVC) architecture. i also love competing at 
              hackathons and have won awards in 4 out of the 5 hackathons i've attended (check out some of my projects
              in a sec!).
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col">
        <div class="bounce-right text-center">
          <button class="btn" v-on:click="nextPage">
            <span><small>click me to go to next page!</small></span><br/>
            <i class="fa fa-arrow-right arrow mt-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facts: [
        "Water Enthusiast",
        "Kitten Petter",
        "Stegosaurus"
      ],
      factHrefs: [
        "",
        "f",
        "https://www.youtube.com/watch?v=AqsdmomR4p0"
      ],
      fact: "",
      factHref: "",
      showFirst: true,
      showSecond: false,
      showThird: false,
      showBg: false,
      showTitles: false,
      showTitle1: false,
      showTitle2: false,
      showTitle3: false,
      showArrow: false
    }
  },
  created() {
    this.animationSequence()
  },
  methods: {
    nextPage() {
      this.$router.push('experience')
    },
    cycleFacts() {
      this.showTitle3 = true
      this.fact = this.facts[0]
      this.factHref = this.factHrefs[0]
      setTimeout(() => {
        this.fact = this.facts[1]
        this.factHref = this.factHrefs[1]
      }, 1000)
      setTimeout(() => {
        this.fact = this.facts[2]
        this.factHref = this.factHrefs[2]
      }, 2000)
    },
    animationSequence() {
      setTimeout(() => {
        this.showBg = true
      }, 1750)
      setTimeout(() => {
        this.showFirst = false
        this.showSecond = true
      }, 2750)
      setTimeout(() => {
        this.showTitles = true
      }, 4500)
      setTimeout(() => {
        this.showTitle1 = true
      }, 4500)
      setTimeout(() => {
        this.showTitle2 = true
      }, 5500)
      setTimeout(this.cycleFacts, 6500)
      setTimeout(() => {
        this.showSecond = false
        this.showThird = true
      }, 9000)
      setTimeout(() => {
        this.showArrow = true
      }, 10500)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.biggo {
  height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
}

.card.splash-card {
  border: 0;
  box-shadow: 0px 0px 0px 0px;
}

.intro {
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  letter-spacing: .5rem;
}

.titles {
  font-weight: normal;
  font-family: 'Montserrat', sans-serif;
  margin: 0rem .5rem;
}

.typewriter .intro {
  color: #000;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15rem solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: 
    typing 1.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes backing {
  from { width: 100% }
  to { width: 0 }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black }
}

/* Justify titles based on media */
@media (min-width: 576px) {
  .title-container {
    justify-content: start;
  }
}

@media (min-width: 768px) {
  .title-container {
    justify-content: center;
  }
}
</style>