<template>
  <div id="app" class="container">
    <div class="row">
      <transition name="desde-izq" appear @after-appear="showRightCol = true">
        <left-column
          :name="name"
          :studies="studies"
          :experiences="experience"
          :skills="skills" />
      </transition>
      <transition name="desde-der">
        <right-column v-show="showRightCol"
          :photo="photo"
          :info="personalInfo"
          :contact="contact"
          :languages="languages"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import cv from './data.js';
  import LeftColumn from './components/LeftColumn.vue';
  import RightColumn from './components/RightColumn.vue';

  export default {
    name: 'app',
    data () {
      return { ...cv, showRightCol: false }
    },
    components: {
      LeftColumn, RightColumn
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.min.css';
  @import '~font-awesome/css/font-awesome.min.css';
  @import './assets/css/app.css';
</style>
