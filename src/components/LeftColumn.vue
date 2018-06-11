<template lang="html">
  <div class="col-7">
    <my-name :name="name"/>
    <studies-list :studies="studies"/>
    <experience-list :experiences="experiences" />
    <skills-list :skills="skills" />
  </div>
</template>

<script>
import MyName from './MyName.vue';
import StudiesList from './StudiesList.vue';
import ExperienceList from './ExperienceList.vue';
import SkillsList from './SkillsList.vue';

export default {
  props: ["name", "studies", "experiences", "skills"],
  components: {
    MyName, StudiesList, ExperienceList, SkillsList
  }
}
</script>
