<template>
  <div class="relative">
    <button
      href="#"
      class="button"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img
        v-if="this.$i18n.locale === 'mn'"
        src="../assets/flag_mn.png"
        alt="flag"
        width="30"
        height="30"
      />
      <img
        v-else
        src="../assets/flag_en.png"
        alt="flag"
        width="30"
        height="30"
      />
    </button>
    <transition name="dropdown-fade" class="dropdown-content">
      <ul
        v-on-clickaway="hideDropdown"
        v-if="isVisible"
        ref="dropdown"
        class="bg-white shadow overflow-hidden border mt-3 py-2 px-2"
      >
        <li>
          <a
            href="#"
            @click.prevent="setLocale('mn')"
            ref="account"
            class="flex items-center px-2 py-2 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../assets/flag_mn.png"
              alt="mongolia flag"
              width="20"
              height="20"
            />
            <span class="ml-2 px-1">Монгол</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('en')"
            class="flex items-center px-2 py-2 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../assets/flag_en.png"
              alt="english flag"
              width="20"
              height="20"
              class="h-8 w-8"
            />
            <span class="ml-2 px-2">English</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("lang", locale);
      // this.$router.push({
      //   params: { lang: locale },
      // });
      this.hideDropdown();
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  /* padding: 0; */
}
.relative {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 0 5px;
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #545454;
}
ul {
  list-style-type: none;
  position: absolute;
  top: 50px;
  z-index: 1;
}
a {
  text-decoration: none;
  color: #545454;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a:hover {
  text-decoration: none;
}
</style>
