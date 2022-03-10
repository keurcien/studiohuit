<template>
  <div class="about">
    <Banner />
    <div id="nav">
      <router-link to="/">GALERIE</router-link>
      <router-link to="/tarifs">TARIFS</router-link>
      <router-link to="/contact">CONTACT</router-link>
      <a>PANIER</a>
    </div>
    <h1>TARIFS</h1>

    <div style="width: 100%; max-width: 800px; margin: 0 auto">
      <table>
        <tbody>
          <tr>
            <th><b>FORMAT DE PHOTO</b></th>
            <th><b>TARIF À L'UNITÉ</b></th>
          </tr>
          <tr v-for="(item, index) in items" :key="index">
            <th>{{ item.description }}</th>
            <th>{{ item.price }}€</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  components: {
    Banner,
  },
  data() {
    return {
      items: null,
    };
  },
  methods: {
    async fetchItems() {
      const response = await fetch(
        "https://studio-huit-backend-b6ok4so5eq-ew.a.run.app/items/"
      );
      const data = await response.json();
      return data;
    },
  },
  async mounted() {
    this.items = await this.fetchItems();
  },
};
</script>

<style scoped>
table {
  width: 800px;
}

th,
td {
  padding: 10px;
  border-bottom: 1px solid #d2d2d2;
}

th:nth-child(1) {
  text-align: left;
}

th:nth-child(2) {
  width: 150px !important;
  text-align: right;
}
</style>
