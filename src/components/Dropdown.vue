<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#" v-for="title in titles" :key="title">
      <font-awesome-icon v-if="isOpen" icon="chevron-down" />
      <font-awesome-icon v-else icon="chevron-right" /> &nbsp;
      {{ title }}
    </a>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div class="item" v-for="content in contents" :key="content">
          {{ content }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titles", "contents"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.menu-item {
  color: #545454;
  padding: 12px 20px;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
}
.menu-item {
  background-color: #fafafa;
}
.menu-item a {
  color: inherit;
  text-decoration: none;
}
.menu-item svg {
  width: 15px;
  height: 15px;
}
.item {
  padding: 15px 20px 10px 28px;
}
.menu-item .sub-menu {
  background-color: #fafafa;
  border-radius: 0px 0px 16px 16px;
}
.fas fa-chevron-down,
.fas fa-chevron-right {
  transition: 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
