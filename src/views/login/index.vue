<template>
  <div class="login">
    <div class="login-wrapper bg-white shadow overflow-hidden">
      <img src="../../assets/bolorsoft.png" />
      <p>
        {{ $t("login-page.title-1") }}
      </p>
      <a class="button">
        {{ $t("login-page.button") }}
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.login {
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  max-width: 380px;
  padding: 30px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
}
.login-wrapper p {
  padding-top: 30px;
  text-align: center;
  color: #545454;
  font-size: 14px;
}
.login-wrapper img {
  width: 90px;
}
.button {
  cursor: pointer;
  text-align: center;
  padding: 16px 35px;
  margin: 10px 45px;
  border: 1px solid #d9d9d9;
}
a {
  text-decoration: none;
}

@media screen and (max-width: 575px) {
  .login {
    padding-top: 30px;
    align-items: flex-start;
  }
}
@media screen and (max-width: 320px) {
  .button {
    margin: 0;
  }
}
</style>
