<template>
  <div class="partner-card d-flex">
    <div class="partner-card__container d-flex">
      <img
        :src="'/imgs/' + partner.logo + '.png'"
        :alt="'Logo' + partner.logo"
        class="partner-card__logo"
      />
      <div class="partner-card__body d-flex">
        <span class="partner-card__name">{{ partner.name }}</span>
        <div class="partner-card__content d-flex">
          <span class="partner-card__phone">{{ partner.phone }}</span>
          <span class="partner-card__email">{{ partner.email }}</span>
          <NuxtLink
            class="partner-card__website"
            :href="'https://' + partner.website"
            target="_blank"
            rel="noopener noreferrer"
            >{{ partner.website }}</NuxtLink
          >
        </div>
      </div>
    </div>
    <button
      class="partner-card__status-btn"
      :class="{
        'start-status': partner.status === 'Start',
        'premier-status': partner.status === 'Premier',
      }"
    >
      {{ partner.status }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Partner } from "@/types/Partner";

const props = defineProps<{
  partner: Partner;
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.partner-card {
  position: relative;
  justify-content: space-between;

  &__container {
    flex-direction: column;
    gap: 0.625rem;
  }
  &__logo {
    width: 102px;
    height: 68px;
  }
  &__body {
    flex-direction: column;
    gap: 1.5rem;
  }
  &__name {
    font-family: "Gogh ExtraBold";
    font-size: 1rem;
    color: $Bl;
  }
  &__content {
    gap: 1rem;
    flex-wrap: wrap;
  }
  &__phone,
  &__email {
    font-family: "Gogh Regular";
    font-size: 0.875rem;
    color: $Bl;
    white-space: nowrap;
  }
  &__website {
    font-family: "Gogh Medium";
    font-size: 0.875rem;
    color: $Aqua;
    text-decoration: none;
  }
  &__status-btn {
    @include btn;
    flex-shrink: 0;
    width: 80px;
    background-color: $Dark-Bl;
    border-radius: 0.375rem;
    color: $Wh;
    font-family: "Gogh Medium";
    font-size: 0.75rem;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $Border-select-Color;
    top: -1.5rem;
  }
}
.start-status {
  background-color: $Light-Gray;
}
.premier-status {
  background-color: $Dark-Bl;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .partner-card {
    &__container {
      flex-direction: row;
      gap: 2.625rem;
    }
    &__name {
      font-size: 1.25rem;
    }
    &__content {
      gap: 1.5rem;
      flex-wrap: nowrap;
    }
    &__phone,
    &__email {
      font-size: 1rem;
    }
    &__website {
      font-size: 1rem;
    }
    &__status-btn {
      width: fit-content;
      height: fit-content;
      padding: 0.25rem 1rem;
      border-radius: 1.875rem;
    }
    &:after {
      top: -2.625rem;
    }
    &:first-of-type:after {
      display: none;
    }
  }
}
</style>
