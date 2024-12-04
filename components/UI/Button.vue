<template>
  <button
    :type="btnType"
    class="button"
    :style="{
      border: border,
      borderRadius: borderRadius,
    }"
  >
    <div class="button__content">
      <span class="button__text">{{ content }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  content?: string;
  border?: string;
  borderRadius?: string;
  btnType?: "button" | "submit" | "reset";
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.button {
  @include btn;
  background-color: $Gray;
  border-radius: 1.875rem;
  padding: 0.313rem 0.5rem;
  color: $Dark-Bl;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    background-color: $Dark-Bl;
    color: $Wh;
  }
  &__content {
    @include flex-centered;
    width: 100%;
  }
  &__text {
    font-family: "Gogh Regular";
    font-size: 0.875rem;
    white-space: nowrap;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .button {
    padding: 0.5rem 1rem;
  }
}
</style>
