<template lang="html">
  <div>
    <h5>{{ language.language }}</h5>
    <p class="subtitulo">{{ language.level }}</p>
    <p class="detalle"> {{ language.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["language"]
}
</script>
