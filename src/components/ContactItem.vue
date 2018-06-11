<template lang="html">
  <tr>
      <td width="10%" class="text-center">
        <i :class="'fa fa-' + icon"></i>
      </td>
      <td>
        <slot></slot>
      </td>
  </tr>
</template>

<script>
  export default {
    props: ["icon"]
  }
</script>
