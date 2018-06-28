<template lang="html">
   <div class="study-item">
    <p>{{ study.period }}</p>
    <h5>{{ study.place }}</h5>
    <p class="position">{{ study.position }}</p>
    <p class="detalle">{{ study.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["study"]
}
</script>
