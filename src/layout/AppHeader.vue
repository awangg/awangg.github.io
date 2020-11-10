<template>
    <header class="header-global sticky-top">
        <base-nav class="navbar-main bg-white" type="" effect="light" expand>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-12 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="#profile">Profile</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="#experience">Experience</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="#projects">Projects</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="#skills">Skills</router-link>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="mailto:andynmnwang@gmail.com" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Shoot me an email">
                        <i class="fa fa-envelope"></i>
                        <span class="nav-link-inner--text d-lg-none">Email</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/andy-wang-219479192/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Connect with me on LinkedIn">
                        <i class="fa fa-linkedin"></i>
                        <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/awangg"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow me on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://awangg.github.io/docs/resume.pdf"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Check out my resume">
                        <i class="fa fa-file"></i>
                        <span class="nav-link-inner--text d-lg-none">Resume</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
