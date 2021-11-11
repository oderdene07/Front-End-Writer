<template>
  <div v-if="!data" class="spinner">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
  </div>
  <div v-else class="container">
    <section class="price-offer">
      <PriceOfferPackage
        v-for="PriceOfferPackage in data.priceOffer.PriceOfferPackages"
        :key="PriceOfferPackage.plan"
        :Package="PriceOfferPackage"
      />
    </section>
    <section class="text">
      <p>{{ data.priceOffer.text__1 }}</p>
      <p>{{ data.priceOffer.text__2 }}</p>
    </section>
    <section class="content bg-white shadow overflow-hidden border">
      <h6>{{ data.priceOffer.text__3 }}</h6>
      <p>{{ data.priceOffer.text__4 }}</p>
    </section>
  </div>
</template>

<script>
import PriceOfferPackage from "../../components/PriceOfferPackage";
export default {
  components: {
    PriceOfferPackage,
  },
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
* {
  font-family: "Arial", sans-serif;
  font-variant: tabular-nums;
  font-size: 14px;
}
.price-offer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  flex-wrap: wrap;
}
.text p {
  width: 100%;
  display: flex;
  padding: 0 15px;
  justify-content: flex-end;
  align-items: center;
  font-style: italic;
  color: #545454;
}
.content {
  border-radius: 12px;
  margin: 15px;
  padding: 24px;
  background-color: #fff;
  text-align: justify;
  color: #545454;
}
.content h6 {
  padding: 5px 0 20px 0;
}

@media (min-width: 1200px) {
  .price-offer {
    flex-wrap: nowrap;
  }
}
@media (min-width: 990px) {
  .package {
    min-width: 270px;
  }
}
</style>
