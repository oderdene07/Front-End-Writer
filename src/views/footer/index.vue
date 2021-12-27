<template>
  <footer class="footer-items">
    <p class="copyright">
      {{ $t("footer.message") }} &copy; 2021 {{ $t("footer.message1") }}
    </p>
  </footer>
</template>

<script></script>

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
