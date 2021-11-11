<template>
  <div v-if="!data" class="spinner">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
  </div>
  <div v-else class="container">
    <section class="one_content">
      <h1>
        {{ data.about_page.title_1 }}
      </h1>
      <p>
        {{ data.about_page.content_1 }}
        <br />
        {{ data.about_page.content_2 }}
      </p>
    </section>
    <section class="body">
      <article class="content">
        <h1>{{ data.about_page.title_2 }}</h1>
        <p>
          {{ data.about_page.content_3 }}
        </p>
      </article>
      <article class="content">
        <h1>{{ data.about_page.title_3 }}</h1>
        <p>
          {{ data.about_page.content_4 }}
        </p>
      </article>
      <article class="content">
        <h1>{{ data.about_page.title_4 }}</h1>
        <p>{{ data.about_page.content_5 }}</p>
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
  created() {
    fetch("https://api.jsonbin.io/b/6189e787763da443125db51e/2")
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
.one_content h1 {
  color: #1a2289;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.3;
}
.one_content p {
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
