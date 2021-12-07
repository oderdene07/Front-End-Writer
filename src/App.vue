<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <nav class="topbar">
          <app-top-bar class="menu" />
          <app-language-switcher />
        </nav>
      </div>
    </header>
    <main class="container">
      <router-view class="router-view"></router-view>
    </main>
    <footer class="footer">
      <div class="container">
        <app-footer></app-footer>
      </div>
    </footer>
  </div>
</template>

<script>
import topBar from "./views/topBar/index.vue";
import footer from "./views/footer/index.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
export default {
  components: {
    appTopBar: topBar,
    appFooter: footer,
    appLanguageSwitcher: LanguageSwitcher,
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 10%, 0.1);
}
* {
  margin: 0;
  /* padding: 0; */
  font-variant: tabular-nums;
  font-family: "Arial", sans-serif;
}
.btn-primary {
  border: 1px solid #1a2289 !important;
  background-color: #1a2289 !important;
  color: #fff !important;
}
.btn-primary:hover {
  border: 1px solid #3e48d1 !important;
  background-color: #3e48d1 !important;
}
.btn-outline-primary {
  border: 1px solid #1a2289 !important;
  color: #1a2289 !important;
  background-color: #fff !important;
}
.btn-outline-primary:hover {
  border: 1px solid #1a2289 !important;
  color: #fff !important;
  background-color: #1a2289 !important;
}
.secondary {
  color: #545454 !important;
}
.header {
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  color: #545454;
}
.topbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.b-sidebar-body {
  background: #1a2289;
}
.menu {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu1 p {
  margin: 0 15px;
}
.spinner {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-view {
  margin-bottom: 90px;
}
.footer {
  border-top: 1px solid #e8e8e8;
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: white;
  z-index: 99;
}
.modalPosition {
  transform: translateY(-8%) !important;
}
.page-item.active .page-link {
  color: #fff !important;
  background-color: #1a2289 !important;
  border-color: #1a2289 !important;
}
.page-link {
  color: #1a2289 !important;
}
.page-item.disabled .page-link {
  color: #6c757d !important;
  background-color: #fff !important;
  border-color: #dee2e6 !important;
}
.alert {
  width: max-content;
  position: absolute !important;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1099;
}
</style>
