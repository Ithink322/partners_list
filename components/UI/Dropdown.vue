<template>
  <div class="dropdown">
    <button
      class="dropdown__button d-flex"
      :class="{ active: isDropdownOpen }"
      @click="toggleDropdown"
      type="button"
    >
      <span class="dropdown__button-text">{{
        selectedItem || placeholder
      }}</span>
      <img
        class="dropdown__button-arrow"
        src="/imgs/arrow.png"
        alt="arrow icon"
      />
    </button>
    <ul class="dropdown__list" :class="{ active: isDropdownOpen }">
      <li
        class="dropdown__list-item"
        v-for="option in options"
        :key="option.value"
        :value="option.text"
        @click="selectItem(option.text)"
      >
        {{ option.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from "@/store/Filters";

interface Option {
  value: number;
  text: string;
}

const props = defineProps<{
  placeholder: string;
  options: Option[];
  sortType: "country" | "city";
}>();

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const filtersStore = useFiltersStore();
const selectedItem = computed(() => {
  return props.sortType === "country"
    ? filtersStore.country
    : filtersStore.city;
});
const selectItem = (item: string) => {
  if (props.sortType === "country") {
    filtersStore.setCountry(item);
  } else if (props.sortType === "city") {
    filtersStore.setCity(item);
  }
  closeDropdown();
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.dropdown {
  &__button {
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: $Wh;
    padding: 0.75rem;
    border: 1px solid $Border-select-Color;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &.active .dropdown__button-arrow {
      transform: rotate(180deg);
    }
    & img {
      pointer-events: none;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba(38, 38, 58, 0.5);
      border-color: $Dark-Bl;
    }
  }
  &__button-text {
    font-family: "Gogh Regular";
    font-size: 1rem;
    color: $Dark-Gray;
  }
  &__list {
    display: none;
    flex-direction: column;
    gap: 0.625rem;
    border-radius: 0.25rem;
    border: 1.5px solid $Border-select-Color;
    background: $Wh;
    margin: 0.5rem 0 0 0;
    padding: 0.5rem;
    list-style-type: none;

    &.active {
      display: flex;
    }
  }
  &__list-item {
    font-family: "Gogh Regular";
    font-size: 1rem;
    color: $Dark-Gray;
    padding: 0.5rem;

    &:hover {
      border-radius: 0.5rem;
      background-color: $Light-Gray;
      cursor: pointer;
      font-family: "Gogh Medium";
      font-size: 1rem;
      color: $Bl;
    }
  }
}
</style>
