<template lang="html">
  <div class="card item" id="contacto">
      <div class="card-header"><i class="fa fa-inbox"></i> Contact</div>
      <div class="card-block">
          <table class="table">
              <tbody>
                  <contact-item icon="home">
                      {{ contact.location }}
                  </contact-item>
                  <contact-item icon="envelope">
                      {{ contact.email }}
                  </contact-item>
                  <contact-item icon="phone">
                      {{ contact.phone }}
                  </contact-item>
                  <contact-item icon="github">
                      {{ contact.github }}
                  </contact-item>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

export default {
  props: ["contact"],
  components: { ContactItem }
}
</script>
