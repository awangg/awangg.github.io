<template>
    <div>
        <card class="work-card border-0" hover shadow body-classes="py-5">
          <div v-if="project.accolades" class="accolade">
              <img :src="project.accolades.split('|')[0]" class="img-fluid"
                   v-b-tooltip.hover.bottom :title="project.accolades.split('|')[1]">
          </div>
          <div class="row justify-content-center">
                <div class="col-lg-5">
                    <img v-lazy="project.logo"
                        class="rounded-circle img-center img-fluid shadow shadow-lg--hover">
                </div>
            </div>
            <div class="pt-4 text-center">
                <h5 class="title">
                    <span class="d-block mb-3">{{ project.name }}</span>
                    <p class="text-muted text-left">{{ project.description }}</p>
                </h5>
                <div>
                    <badge type="primary" rounded v-for="(lang, index) in project.languages.slice(0, 3)" :key="index">
                        <span>{{ lang }}</span>
                    </badge>
                </div>
                <div class="mt-4 d-flex justify-content-center">
                    <base-button tag="a" :href="project.repo" icon="fa fa-github" rounded
                                  icon-only></base-button>
                    <base-button v-if="project.href" tag="a" :href="project.href" icon="ni ni-laptop" rounded
                                  icon-only></base-button>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style scoped>
.work-card {
    min-height: 23.1rem;
}

.accolade {
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
}
</style>