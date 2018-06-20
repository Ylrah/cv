<template lang="html">
  <div class="experience-item">
    <p>{{ experience.period }}</p>
    <h5>{{ experience.place }}</h5>
    <p class="position">{{ experience.position }}</p>
    <p class="detalle">{{ experience.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["experience"]
}
</script>
