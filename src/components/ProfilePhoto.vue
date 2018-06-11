<template lang="html">
  <div class="text-center item" id="foto-container">
    <img :src="'./src/assets/'+photo" width="53%" id="foto" class="rounded-circle">
  </div>
</template>

<script>
export default {
  props: ["photo"]
}
</script>
