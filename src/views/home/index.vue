<template>
  <div>
    <section class="banner">
      <div class="text">
        <h1>{{ $t("home-page.title-1") }}</h1>
        <ul>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ $t("home-page.list-1") }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ $t("home-page.list-2") }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ $t("home-page.list-3") }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ $t("home-page.list-4") }}
          </li>
          <li>
            <span class="icon"><font-awesome-icon icon="check"/></span
            >{{ $t("home-page.list-5") }}
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
          <h1>{{ $t("home-page.title-2") }}</h1>
          <p>{{ $t("home-page.content-1") }}</p>
        </div>
      </article>
      <article class="content">
        <div class="text">
          <h1>{{ $t("home-page.title-3") }}</h1>
          <p>
            {{ $t("home-page.content-2") }} <br /><br />

            {{ $t("home-page.content-3") }}
          </p>
        </div>
        <img src="../../assets/2_performance.png" alt="performance picture" />
      </article>
      <article class="content">
        <img src="../../assets/3_speed.png" alt="speed picture" />
        <div class="text">
          <h1>{{ $t("home-page.list-1") }}</h1>
          <p>{{ $t("home-page.content-4") }}</p>
        </div>
      </article>
      <article class="content">
        <div class="text">
          <h1>{{ $t("home-page.list-3") }}</h1>
          <p>{{ $t("home-page.content-5") }}</p>
        </div>
        <img src="../../assets/4_money.png" alt="money picture" />
      </article>
      <article class="content">
        <img src="../../assets/5_productivity.png" alt="productivity picture" />
        <div class="text">
          <h1>{{ $t("home-page.list-2") }}</h1>
          <p>{{ $t("home-page.content-6") }}</p>
        </div>
      </article>
      <article class="content">
        <div class="text">
          <h1>{{ $t("home-page.list-4") }}</h1>
          <p>
            {{ $t("home-page.content-7") }} <br />
            <br />
            {{ $t("home-page.content-8") }}
          </p>
        </div>
        <img src="../../assets/6_quality.png" alt="quality picture" />
      </article>
      <article class="content">
        <img src="../../assets/7_lead.png" alt="lead picture" />
        <div class="text">
          <h1>{{ $t("home-page.list-5") }}</h1>
          <p>{{ $t("home-page.content-9") }}</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script></script>

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
