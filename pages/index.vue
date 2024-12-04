<template>
  <div class="page-container">
    <h1 class="page-container__title">Где купить</h1>
    <h2 class="page-container__subtitle">Контакты наших партнёров</h2>
    <div class="d-flex page-container__content">
      <UIPartnersFilter></UIPartnersFilter>
      <UIPartnersList></UIPartnersList>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

.page-container {
  padding: 1rem;

  &__title {
    text-align: center;
    font-family: "Gogh ExtraBold";
    font-size: 1.875rem;
    margin: 0 0 0.625rem 0;
    color: $Dark-Bl;
  }
  &__subtitle {
    text-align: center;
    font-family: "Gogh Regular";
    font-size: 0.875rem;
    margin: 0 0 1.25rem 0;
    color: $Dark-Bl;
  }
  &__content {
    flex-direction: row;
    flex-direction: column;
    gap: 2.625rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .page-container {
    padding: 1.563rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .page-container {
    padding: 4.625rem;

    &__title {
      font-size: 2.875rem;
      margin: 0 0 1.5rem 0;
    }
    &__subtitle {
      font-size: 1.25rem;
      margin: 0 0 3.875rem 0;
    }
    &__content {
      flex-direction: row;
      gap: 3.875rem;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .page-container {
    padding: 9.5rem 19.5rem;
  }
}
</style>
