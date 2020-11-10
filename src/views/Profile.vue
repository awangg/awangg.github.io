<template>
    <div class="profile-page" id="profile">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/headshot.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">9</span>
                                        <span class="description">Languages</span>
                                    </div>
                                    <div>
                                        <span class="heading">140</span>
                                        <span class="description">WPM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">26</span>
                                        <span class="description">Repos</span>
                                    </div>
                                    <div>
                                        <span class="heading">3</span>
                                        <span class="description">Internships</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Andy Wang
                                <span class="font-weight-light">, {{ year - 2001 }}</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Boston, Massachusetts</div>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Houston, Texas</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>BA in Computer Science & Statistics</div>
                            <div><i class="ni education_hat mr-2"></i>Rice University, 2023</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Hello! My name is Andy, I'm originally from Boston, MA but I'm currently an undergraduate at Rice 
                                    University studying Computer Science and Statistics. I'm an experienced full-stack web developer, 
                                    having a few internships and numerous projects under my belt, with an interest in teaching, 
                                    particularly in secondary education.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <hr id="experience" />
        <section class="section section-skew">
            <div class="container">
                <h1 class="display-1 text-center">Work Experience</h1>
                <div class="row row-grid mt-5 pt-2">
                    <div class="col-lg-4 col-sm-12 mb-2" v-for="(work, index) in experience" :key="index">
                        <WorkCard :company="work.company"
                                  :title="work.title"
                                  :languages="work.languages"
                                  :img="work.img"
                                  :responsibilities="work.responsibilities" />
                    </div>
                </div>
            </div>
        </section>
        <hr id="projects" />
        <section class="section section-skew">
            <div class="container">
                <h1 class="display-1 text-center">Projects</h1>
                <div class="row row-grid mt-5 pt-2">
                    <div class="col-lg-4 col-sm-12 mb-2" v-for="(work, index) in experience" :key="index">
                        <WorkCard :company="work.company"
                                  :title="work.title"
                                  :languages="work.languages"
                                  :img="work.img"
                                  :responsibilities="work.responsibilities" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import WorkCard from './components/WorkCard';

import experience from '../data/work.data';

export default {
  components: { WorkCard },
  data() {
    return {
      year: new Date().getFullYear(),
      experience: []
    }
  },
  created() {
    this.experience = experience
  }
};
</script>
<style>
</style>
