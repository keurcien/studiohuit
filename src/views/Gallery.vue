<template>
  <div>
    <Banner />
    <div class="gallery">
      <div
        class="gallery-panel"
        v-for="(imageUrl, index) in images"
        :key="index"
      >
        <img :src="imageUrl" />
      </div>
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
      images: [],
    };
  },
  methods: {
    async getImages() {
      const response = await fetch(
        "https://studio-huit-backend-b6ok4so5eq-ew.a.run.app/images"
      );
      const data = await response.json();
      this.images = data;
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>

<style>
#nav {
  padding: 10px;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  margin: 30px auto 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
  margin-right: 10px;
  letter-spacing: 0.2em;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>