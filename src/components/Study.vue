<template lang="html">
  <div class="study-item">
    <h5>{{ study.degree }}</h5>
    <p class="subtitulo">{{ study.place }}</p>
    <p v-if="study.description" class="detalle">{{ study.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["study"]
}
</script>
