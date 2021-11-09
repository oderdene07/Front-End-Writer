<template>
  <footer class="footer-items">
    <p v-if="data" class="copyright">
      {{ data.footer.message }} &copy; 2021 {{ data.footer.message1 }}
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  async created() {
    fetch("https://api.jsonbin.io/b/6189e787763da443125db51e/1")
      .then(async (response) => await response.json())
      .then((data) => (this.data = data));
  },
};
</script>

<style scoped>
* {
  margin: 0;
  /* padding: 0; */
}
.footer-items {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer-items .copyright {
  font-size: 14px;
  padding: 14px 0;
  font-family: "Arial", sans-serif;
  font-variant: tabular-nums;
  color: #545454;
}
</style>
