<template lang="html">
  <div class="col-5">
    <profile-photo :photo="photo" />
    <personal-info :info="info" />
    <contact :contact="contact"/>
    <languages-list :languages="languages"/>
  </div>
</template>

<script>
import PersonalInfo from './PersonalInfo.vue';
import Contact from './Contact.vue';
import LanguagesList from './LanguagesList.vue';
import ProfilePhoto from './ProfilePhoto.vue';

export default {
  props: ["photo", "info", "contact", "languages"],
  components: {
    PersonalInfo, Contact, LanguagesList, ProfilePhoto
  }
}
</script>
