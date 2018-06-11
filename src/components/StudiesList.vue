<template lang="html">
  <div class="card item" id="educacion">
      <div class="card-header"><i class="fa fa-graduation-cap"></i> Formations </div>
      <div class="card-block">
          <ul>
              <li class="item" v-for="s in studies">
                  <study :study="s"></study>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Study from './Study.vue';

export default {
  props: ["studies"],
  components: {
    Study
  }
}
</script>
