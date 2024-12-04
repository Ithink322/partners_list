import { defineStore } from "pinia";
import type { Partner } from "@/types/Partner";

interface FiltersState {
  country?: string;
  city?: string;
  productType?: string | null;
  products?: string[];
  partnerTypes: string[];
  partners: Partner[];
  filteredPartners: Partner[];
}

export const useFiltersStore = defineStore("filtersStore", {
  state: (): FiltersState => ({
    country: "Страна",
    city: "Город",
    productType: null,
    products: [],
    partnerTypes: [],
    partners: [],
    filteredPartners: [],
  }),
  actions: {
    setPartners(partners: Partner[]) {
      this.partners = partners;
      this.filteredPartners = partners;
    },
    setCountry(country: string) {
      this.country = country;
    },
    setCity(city: string) {
      this.city = city;
    },
    setProductType(productType: string | null) {
      this.productType = productType;
    },
    setProducts(products: string[]) {
      this.products = products;
    },
    setPartnerType(partnerTypes: string[]) {
      this.partnerTypes = partnerTypes;
    },
    filterPartners() {
      let partnersToFilter = [...this.partners];

      if (this.country && this.country !== "Страна") {
        partnersToFilter = partnersToFilter.filter(
          (partner) => partner.country === this.country
        );
      }

      if (this.city && this.city !== "Город") {
        partnersToFilter = partnersToFilter.filter(
          (partner) => partner.city === this.city
        );
      }

      if (this.productType) {
        partnersToFilter = partnersToFilter.filter(
          (partner) => partner.productType === this.productType
        );
      }

      if (this.products!.length > 0) {
        partnersToFilter = partnersToFilter.filter((partner) =>
          partner.products.some((product) => this.products!.includes(product))
        );
      }

      if (this.partnerTypes.length > 0) {
        partnersToFilter = partnersToFilter.filter((partner) =>
          partner.partnerType.some((type) =>
            this.partnerTypes.includes(type.replace(/ё/g, "е"))
          )
        );
      }

      this.filteredPartners = partnersToFilter;
    },
    resetAllFilters() {
      this.country = "Страна";
      this.city = "Город";
      this.productType = null;
      this.products = [];
      this.partnerTypes = [];
      this.filteredPartners = this.partners;
    },
  },
  persist: {
    key: "filters-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["country", "city", "productType", "products", "partnerTypes"],
  },
});
