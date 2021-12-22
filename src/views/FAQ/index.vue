<template>
  <div>
    <section>
      <Dropdown
        :titles="$t('faq_page.titles')"
        :contents="$t('faq_page.contents')"
      />
    </section>
  </div>
</template>

<script>
import Dropdown from "../../components/Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
}
</style>
