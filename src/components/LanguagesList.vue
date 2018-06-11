<template lang="html">
  <div class="card item" id="idiomas">
      <div class="card-header"><i class="fa fa-language"></i> Langue </div>
      <div class="card-block">
          <ul>
              <li class="lol"v-for="l in languages">
                <language class="langue" :language="l"></language>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Language from './Language.vue';

export default {
  props: ["languages"],
  components: { Language }
}
</script>

<style lang="css">
</style>
