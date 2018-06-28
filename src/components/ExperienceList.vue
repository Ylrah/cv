<template lang="html">
  <div class="card item" id="experiencia">
      <div class="card-header"><i class="fa fa-suitcase"></i> Experiences professionnels </div>
      <div class="card-block">
          <ul>
              <li class="item" v-for="e in experiences">
                <experience :experience="e"></experience>
              </li>
          </ul>
      </div>
  </div>

</template>

<script>
import Experience from './Experience.vue';

export default {
  props: ["experiences"],
  components: {
    Experience
  }
}
</script>
