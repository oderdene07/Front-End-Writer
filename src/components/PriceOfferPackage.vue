<template>
  <div class="package bg-white shadow overflow-hidden">
    <section class="package-header">
      <h2>{{ Package.plan }}</h2>
      <hr />
      <h3>{{ Package.price }}</h3>
      <span>{{ Package.duration }}</span>
    </section>
    <section class="package-body">
      <ul>
        <li v-for="advantage in Package.advantages" :key="advantage.plan">
          <span>{{ advantage }}</span>
        </li>
      </ul>
      <div class="btn">
        <router-link :to="`/login`">
          <b-button variant="primary">Авах</b-button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["Package"],
};
</script>

<style scoped>
* {
  font-family: "Arial", sans-serif;
  font-variant: tabular-nums;
}
.package {
  min-width: 250px;
  border-radius: 12px;
  margin: 15px;
  background-color: #fff;
  transition: transform 0.2s;
}
.package:hover {
  transform: scale(1.1);
}
.package .package-header {
  padding: 15px;
  text-align: center;
  background-color: #1a2289;
  color: #fff;
}
.package-header h2 {
  font-size: 24px;
}
.package-header h3 {
  font-weight: 700;
  letter-spacing: 3px;
}
.package-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: #545454;
}
.package-body ul {
  list-style: none;
  padding: 0;
}
.package-body ul li:before {
  content: "✓";
  color: #1a2289;
}
.package-body ul li {
  padding: 0 5px;
  font-size: 13px;
}
</style>
