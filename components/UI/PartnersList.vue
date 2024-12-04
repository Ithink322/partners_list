<template>
  <div class="partners-list d-flex flex-column">
    <UIPartnerCard
      v-for="partner in filteredPartners"
      :partner="partner"
      :key="partner.id"
    ></UIPartnerCard>
  </div>
</template>

<script setup lang="ts">
import partners from "@/data/partners.json";
import { useFiltersStore } from "@/store/Filters";

const filtersStore = useFiltersStore();
filtersStore.setPartners(partners);

const filteredPartners = computed(() => filtersStore.filteredPartners);
</script>

<style lang="scss" scoped>
.partners-list {
  gap: 3rem;
  width: 100%;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .partners-list {
    gap: 5.25rem;
  }
}
</style>
