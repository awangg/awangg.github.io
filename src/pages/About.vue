<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <img src="@/assets/personality/kayak.jpg" class="img-fluid rounded-circle" />
      </div>
      <div class="col-sm-12 col-md-4">
        <img src="@/assets/personality/portrait.jpg" class="img-fluid rounded-circle" />
      </div>
      <div class="col-sm-12 col-md-4">
        <img src="@/assets/personality/group.jpg" class="img-fluid rounded-circle" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12">
        <p>I'm a junior at Rice University studying Computer Science and Statistics. I have a lot of 
        professional experience in software development, especially in full-stack web development, 
        and can pick up new technologies/frameworks extremely quickly. I'm particularly interested in 
        the design and development of large-scale software systems.</p>
        <p>I also love competing in hackathons, where I've won awards in 4 out of the 5 competitions I've
        participated in since entering college. I really enjoy the fast-paced process of taking a project 
        from design to release; working with friends to create a polished product that we can be proud of
        (and win us expensive prizes).</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$router.push('experience')
    },
    prevPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
img {
  height: 15rem;
  border: .25rem solid #ba2d2d;
}

p {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 1.3rem;
}
</style>