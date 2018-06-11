<template lang="html">
  <div class="card item" id="skills">
   <div class="card-header"><i class="fa fa-desktop"></i> Connaissances</div>
      <div class="card-block">
          <ul class="skills-list">
              <li v-for="k in skills">
                <skill :skill="k"></skill>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
  props: ["skills"],
  components: {
    Skill
  }
}
</script>

<style lang="css">
</style>
