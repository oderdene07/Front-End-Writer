<template>
  <div v-if="!data" class="spinner">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
  </div>
  <div v-else>
    <section>
      <Dropdown
        :titles="data.faq_page.titles"
        :contents="data.faq_page.contents"
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
  data() {
    return {
      data: null,
    };
  },
  created() {
    fetch("https://api.jsonbin.io/b/6189e787763da443125db51e/2")
      .then(async (response) => await response.json())
      .then((data) => (this.data = data));
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
