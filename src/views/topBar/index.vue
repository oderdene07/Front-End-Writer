<template>
  <nav>
    <nav>
      <button v-b-toggle.sidebar-1 class="btn burger">
        <font-awesome-icon icon="bars" />
      </button>
      <b-sidebar id="sidebar-1" no-header backdrop width="250px">
        <div class="img__container">
          <router-link :to="`/vuejs-pwa/`">
            <img width="100" src="../../assets/logo.svg" />
          </router-link>
        </div>

        <div class="px-4 py-2">
          <ul class="side-list">
            <li>
              <router-link :to="`/vuejs-pwa/about`">{{
                $t("topBar.aboutUs")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/vuejs-pwa/priceOffer`">{{
                $t("topBar.priceOffer")
              }}</router-link>
            </li>
            <li>
              <router-link :to="`/vuejs-pwa/FAQ`"
                >{{ $t("topBar.FAQ") }}
              </router-link>
            </li>
            <li>
              <router-link :to="`/vuejs-pwa/login`">{{
                $t("topBar.login")
              }}</router-link>
            </li>
          </ul>
        </div>
      </b-sidebar>
    </nav>
    <router-link :to="`/vuejs-pwa/`">
      <img
        width="120"
        src="../../assets/chimege_writer.svg"
        alt="Chimege Writer Logo"
      />
    </router-link>
    <ul class="list">
      <li>
        <router-link :to="`/vuejs-pwa/about`">{{
          $t("topBar.aboutUs")
        }}</router-link>
      </li>
      <li>
        <router-link :to="`/vuejs-pwa/priceOffer`">{{
          $t("topBar.priceOffer")
        }}</router-link>
      </li>
      <li>
        <router-link :to="`/vuejs-pwa/FAQ`"
          >{{ $t("topBar.FAQ") }}
        </router-link>
      </li>
      <li>
        <router-link :to="`/vuejs-pwa/login`">{{
          $t("topBar.login")
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  /* padding: 0; */
  margin: 0;
}
.img__container {
  padding: 0 20px;
  width: 100%;
  background-color: #130f40;
}
.burger {
  display: none;
  overflow-anchor: none;
  margin-right: 10px;
  color: #545454;
}
.side-list {
  padding: 0;
}
.side-list li {
  list-style: none;
  margin: 20px 0;
}
.side-list a {
  color: #e8e8e8;
  text-decoration: none;
}
.list {
  display: flex;
  list-style-type: none;
  flex-direction: row;
  padding-left: 2vw;
}
.list li a {
  font-size: 0.9rem;
  padding-right: 2vw;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #545454;
  cursor: pointer;
  text-decoration: none;
}
.list li a:hover {
  color: #23458d;
}
.router-link-active {
  color: #1a2289 !important;
}
@media screen and (max-width: 768px) {
  .burger {
    display: block;
  }
  .list {
    display: none;
  }
  .router-link-active {
    color: #e8e8e8 !important;
  }
}
</style>
