<template lang="html">
  <div>
    <hr>
      <p id="mi-nombre" class="text-center">

        <div class="c">
          <div class="logo">
             <i class="close icon" v-on:click="close"></i>

             <span class="left"><</span>{{ name }}<span class="right">/></span>
          <div class="text">
             <span class="web">Développeur</span><span class="word">Web</span>
            </div>
          </div>
        </div>
      </p>
    <hr>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>
