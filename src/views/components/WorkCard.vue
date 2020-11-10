<template>
    <div>
        <card class="work-card border-0" hover shadow body-classes="py-5">
            <img v-lazy="img"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;">
            <div class="pt-4 text-center">
                <h5 class="title">
                    <span class="d-block mb-1">{{ company }}</span>
                    <small class="h6 text-muted">{{ title }}</small>
                </h5>
                <div>
                    <badge type="primary" rounded v-for="(lang, index) in languages.slice(0, 3)" :key="index">
                        <span>{{ lang }}</span>
                    </badge>
                </div>
                <button class="btn btn-primary mt-3 mb-sm-0" @click="modals.job = true; info = { name: company, brags: responsibilities, langs: languages }">
                    <span class="text-white"> Show More </span>
                </button>
            </div>
        </card>
        <modal :show.sync="modals.job" :modalClasses="'modal-lg'">
            <template slot="header">
                <h3 class="modal-title">{{info.name}}</h3>
            </template>
            <div>
                <div class="row mb-2">
                    <ul>
                        <li class="my-2" v-for="(resp, index) in info.brags" :key="index">
                            {{ resp }}
                        </li>
                    </ul>
                </div>
                <div class="row justify-content-center">
                    <badge class="mx-1" type="primary" rounded v-for="(lang, index) in languages" :key="index">
                        <span>{{ lang }}</span>
                    </badge>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  components: { Modal },
  props: {
    img: String,
    company: String,
    title: String,
    languages: Array,
    responsibilities: Array
  },
  data() {
    return {
      modals: { job: false },
      info: {}
    }
  }
}
</script>

<style scoped>
.work-card {
  min-height: 31rem;
}
</style>