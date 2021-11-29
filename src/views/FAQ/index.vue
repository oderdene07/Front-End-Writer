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
  watch: {
    "$i18n.locale": function() {
      if (this.$i18n.locale === "mn") {
        fetch("https://api.jsonbin.io/b/6189e787763da443125db51e/2")
          .then(async (response) => await response.json())
          .then((data) => (this.data = data));
      } else {
        fetch("https://api.jsonbin.io/b/61a58e3c01558c731ccb3548")
          .then(async (response) => await response.json())
          .then((data) => (this.data = data));
      }
    },
  },
  created() {
    // console.log(this.$i18n.locale);
    if (this.$i18n.locale === "mn")
      fetch("https://api.jsonbin.io/b/6189e787763da443125db51e/2")
        .then(async (response) => await response.json())
        .then((data) => (this.data = data));
    else
      fetch("https://api.jsonbin.io/b/61a58e3c01558c731ccb3548")
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
