<template>
  <div v-if="!data" class="spinner">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
  </div>
  <div v-else class="container">
    <section class="one-content">
      <h1>
        {{ $t("about-page.title-1") }}
      </h1>
      <p>
        {{ $t("about-page.content-1") }}
        <br />
        {{ $t("about-page.content-2") }}
      </p>
    </section>
    <section class="body">
      <article class="content">
        <h1>{{ $t("about-page.title-2") }}</h1>
        <p>
          {{ $t("about-page.content-3") }}
        </p>
      </article>
      <article class="content">
        <h1>{{ $t("about-page.title-3") }}</h1>
        <p>
          {{ $t("about-page.content-4") }}
        </p>
      </article>
      <article class="content">
        <h1>{{ $t("about-page.title-4") }}</h1>
        <p>{{ $t("about-page.content-5") }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
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
.container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: justify;
}
.one-content h1 {
  color: #1a2289;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.3;
}
.one-content p {
  font-size: 15px;
  line-height: 2;
  font-weight: 400;
  color: #545454;
}
.body {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.content {
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 3%);
  border-radius: 10px;
  width: 33vw;
}
.body h1 {
  margin-bottom: 1rem;
  color: #1a2289;
  font-weight: 400;
  text-align: start;
  font-size: 24px;
  line-height: 1.3;
}
.body p {
  color: #545454;
  line-height: 1.5;
  font-weight: 400;
  font-size: 15px;
}

@media screen and (max-width: 1200px) {
  .body {
    flex-direction: column;
  }
  .content {
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
