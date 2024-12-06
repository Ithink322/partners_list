<template>
  <form @submit.prevent="filterPartners" class="content">
    <div class="d-flex flex-column custom-gap">
      <div>
        <h3 class="content__section-title">Уточните адрес</h3>
        <div class="d-flex flex-column gap-3">
          <UIDropdown
            placeholder="Страна"
            :options="countries"
            :sortType="'country'"
            v-model="selectedCountry"
          ></UIDropdown>
          <UIDropdown
            placeholder="Город"
            :options="cities"
            :sortType="'city'"
            v-model="selectedCity"
          ></UIDropdown>
        </div>
      </div>
      <div>
        <h3 class="content__section-title">Выберите тип продукта</h3>
        <div class="d-flex gap-1">
          <UIButton
            v-for="type in productTypes"
            :key="type"
            :content="type"
            btnType="button"
            :class="{ active: isProductTypeActive(normalizeText(type)) }"
            @click="selectProductType(type)"
          />
        </div>
      </div>
      <div>
        <h3 class="content__section-title">Выберите продукт</h3>
        <div class="d-flex gap-2">
          <UIButton
            v-for="product in products"
            :key="product"
            :content="product"
            btnType="button"
            :class="{ active: isProductActive(normalizeText(product)) }"
            @click="selectProduct(product)"
          />
        </div>
      </div>
      <div>
        <h3 class="content__section-title">Выберите тип партнёра</h3>
        <div class="d-flex gap-2 flex-wrap">
          <UIButton
            v-for="partner in partnerTypes"
            :key="partner"
            :content="partner"
            btnType="button"
            :class="{ active: isPartnerTypeActive(normalizeText(partner)) }"
            @click="selectPartnerType(partner)"
          />
        </div>
      </div>
    </div>
    <div class="content__btns d-flex content__btns-custom-gap mt-4">
      <UIButton
        @click="resetAllFilters"
        class="content__reset-btn"
        :content="'Очистить'"
        :border="'2px solid #26263a'"
        :borderRadius="'0.25rem'"
        :btnType="'reset'"
      ></UIButton>
      <UIButton
        class="content__find-btn"
        :content="'Найти'"
        :borderRadius="'0.25rem'"
        :btnType="'submit'"
      ></UIButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useFiltersStore } from "@/store/Filters";

const countries = [
  { value: 1, text: "Россия" },
  { value: 2, text: "Китай" },
];
const cities = [
  { value: 1, text: "Москва" },
  { value: 2, text: "Санкт-Петербург" },
  { value: 3, text: "Новосибирск" },
];
const productTypes = ["Для дома", "Для бизнеса"];
const products = ["Антивирус", "GetScreen", "Passwork"];
const partnerTypes = [
  "Партнёры Retail",
  "Партнёры Corporate",
  "Интернет-провайдеры",
  "Online партнёры",
  "Продажи партнёрам",
  "Education партнёры",
  "MSP Партнёры",
];
const normalizeText = (text: string) => text.replace(/ё/g, "е");

const filtersStore = useFiltersStore();
const selectedCountry = computed(() => filtersStore.country);
const selectedCity = computed(() => filtersStore.city);
const selectedProductType = computed(() => filtersStore.productType || []);
const selectedProducts = computed(() => filtersStore.products || []);
const selectedPartnerTypes = computed(() => filtersStore.partnerTypes || []);

const isProductTypeActive = (productType: string) => {
  return selectedProductType.value === productType;
};
const isProductActive = (product: string) => {
  return selectedProducts.value!.includes(product);
};
const isPartnerTypeActive = (partnerType: string) => {
  return selectedPartnerTypes.value!.includes(partnerType);
};
onMounted(() => {
  filtersStore.filterPartners();
});

const selectProductType = (type: string) => {
  filtersStore.setProductType(filtersStore.productType === type ? null : type);
};

const selectProduct = (product: string) => {
  const updatedProducts = filtersStore.products!.includes(product)
    ? filtersStore.products!.filter((item) => item !== product)
    : [...filtersStore.products!, product];

  filtersStore.setProducts(updatedProducts);
};

const selectPartnerType = (partnerType: string) => {
  const normalizedPartnerType = partnerType.replace(/ё/g, "е");

  const updatedPartnerTypes = filtersStore.partnerTypes!.includes(
    normalizedPartnerType
  )
    ? filtersStore.partnerTypes!.filter(
        (item) => item !== normalizedPartnerType
      )
    : [...filtersStore.partnerTypes!, normalizedPartnerType];

  filtersStore.setPartnerType(updatedPartnerTypes);
};

const filteredPartners = computed(() => filtersStore.filteredPartners);
const filterPartners = () => {
  filtersStore.filterPartners();
  console.log("filteredPartners:", filteredPartners.value);
};

const resetAllFilters = () => {
  filtersStore.resetAllFilters();
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.content {
  &__section-title {
    font-family: "Gogh Regular";
    font-size: 0.875rem;
    margin: 0 0 0.625rem 0;
    color: $Light-Gray;
  }
  &__btns {
    & button {
      padding: 0.813rem 2.5rem;
      transition: all 0.3s ease;
    }
  }
  &__reset-btn {
    background-color: $Wh;
    color: $Dark-Bl;

    &:hover {
      background-color: $Dark-Bl;
      color: $Wh;
    }
  }
  &__find-btn {
    background-color: $Aqua;
    color: $Wh;

    &:hover {
      border: 2px solid $Aqua;
      background-color: $Wh;
      color: $Aqua;
    }
  }
  &__btns-custom-gap {
    gap: 0.438rem;
  }
}
.custom-gap {
  gap: 0.938rem;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .content {
    width: 378px;
    flex-shrink: 0;

    &__btns {
      & button {
        padding: 0.813rem 3rem;
      }
    }
  }
  .custom-gap {
    gap: 1.875rem;
  }
}
</style>
