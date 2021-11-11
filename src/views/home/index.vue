<template>
  <!-- <div> -->
  <div v-if="!data" class="spinner">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
  </div>
  <div v-else>
    <section class="banner">
      <div class="text">
        <h1>{{ data.home_page.title_1 }}</h1>
        <ul>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ data.home_page.list_1 }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ data.home_page.list_2 }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ data.home_page.list_3 }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ data.home_page.list_4 }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ data.home_page.list_5 }}
          </li>
        </ul>
      </div>
      <img
        src="../../assets/home.png"
        alt="home main picture"
        width="55%"
        height="55%"
      />
    </section>
    <section class="subClass">
      <article class="content">
        <img src="../../assets/1_dream.png" alt="dream picture" />
        <div class="text">
          <h1>{{ data.home_page.title_2 }}</h1>
          <p>{{ data.home_page.content_1 }}</p>
        </div>
      </article>
      <article class="content">
        <div class="text">
          <h1>{{ data.home_page.title_3 }}</h1>
          <p>
            {{ data.home_page.content_2 }} <br /><br />

            {{ data.home_page.content_3 }}
          </p>
        </div>
        <img src="../../assets/2_performance.png" alt="performance picture" />
      </article>
      <article class="content">
        <img src="../../assets/3_speed.png" alt="speed picture" />
        <div class="text">
          <h1>{{ data.home_page.list_1 }}</h1>
          <p>{{ data.home_page.content_4 }}</p>
        </div>
      </article>
      <article class="content">
        <div class="text">
          <h1>{{ data.home_page.list_3 }}</h1>
          <p>{{ data.home_page.content_5 }}</p>
        </div>
        <img src="../../assets/4_money.png" alt="money picture" />
      </article>
      <article class="content">
        <img src="../../assets/5_productivity.png" alt="productivity picture" />
        <div class="text">
          <h1>{{ data.home_page.list_2 }}</h1>
          <p>{{ data.home_page.content_6 }}</p>
        </div>
      </article>
      <article class="content">
        <div class="text">
          <h1>{{ data.home_page.list_4 }}</h1>
          <p>
            {{ data.home_page.content_7 }} <br />
            <br />
            {{ data.home_page.content_8 }}
          </p>
        </div>
        <img src="../../assets/6_quality.png" alt="quality picture" />
      </article>
      <article class="content">
        <img src="../../assets/7_lead.png" alt="lead picture" />
        <div class="text">
          <h1>{{ data.home_page.list_5 }}</h1>
          <p>{{ data.home_page.content_9 }}</p>
        </div>
      </article>
    </section>
  </div>
  <!-- </div> -->
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
div {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.icon {
  color: blue;
  padding-right: 1rem;
}
.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.banner h1 {
  padding-top: 10vh;
  color: #262626;
  font-size: 20pt;
  padding-left: 6vw;
  font-weight: 400;
}
.banner ul li {
  padding-left: 5vw;
  font-size: 16pt;
  line-height: 3rem;
  color: #545454;
  list-style: none;
  display: block;
}
.banner ul li span {
  color: #1a2289;
}
.subClass h1 {
  color: rgb(68, 68, 68);
  font-size: 20px;
  font-weight: 500;
}
.subClass p {
  text-align: justify;
  font-size: 18px;
  color: rgb(68, 68, 68);
  line-height: 1.8rem;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 3%);
  border-radius: 10px;
  padding: 2rem;
  margin: 3rem 0;
}
.content img {
  padding: 0 25px;
}
@media (max-width: 768px) {
  .banner {
    flex-wrap: wrap;
  }
  .banner img {
    width: 80%;
  }
  .banner h1 {
    padding-top: 5vh;
    font-size: 16pt;
  }
  .banner ul li {
    padding-left: 5vw;
    font-size: 14pt;
    line-height: 2.5rem;
  }
}
@media (max-width: 576px) {
  .content {
    flex-wrap: wrap;
    padding: 1.5rem;
  }
  .content img {
    margin: 18px 0;
  }
  .subClass h1 {
    font-size: 18px;
  }
  .subClass p {
    font-size: 16px;
  }
}
</style>
