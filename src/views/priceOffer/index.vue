<template>
  <div class="container">
    <section class="price-offer">
      <PriceOfferPackage
        v-for="PriceOfferPackage in $t('priceOffer.PriceOfferPackages')"
        :key="PriceOfferPackage.plan"
        :Package="PriceOfferPackage"
      />
    </section>
    <section class="text">
      <p>{{ $t("priceOffer.text__1") }}</p>
      <p>{{ $t("priceOffer.text__2") }}</p>
    </section>
    <section class="content bg-white shadow overflow-hidden border">
      <h6>{{ $t("priceOffer.text__3") }}</h6>
      <p>{{ $t("priceOffer.text__4") }}</p>
    </section>
  </div>
</template>

<script>
import PriceOfferPackage from "../../components/PriceOfferPackage";
export default {
  components: {
    PriceOfferPackage,
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
