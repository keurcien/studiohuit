<template>
  <div>
    <Banner />

    <div class="cover">
      <img src="../assets/studio-huit.jpg" />
    </div>

    <div class="login">
      <button v-on:click="displayLoginInput">connexion</button>
    </div>

    <div class="about"></div>
    <div class="about-left">
      <img src="../assets/about.png" />
    </div>
    <div class="about-right">
      <div class="about-right-content">
        <p>
          Notre travail consiste à immortaliser les moments uniques de votre
          parcours professionnel.
        </p>

        <p>
          Lors de la prestation de Serment, nous réalisons des prises de vue
          dont les principales sont les suivantes :
        </p>

        <p>
          la photo de serment « Je le jure », la photo de la poignée de main
          avec le Juge et des photos de portrait dans la bibliothèque.
        </p>

        <p>
          Ces photos sont disponibles sur notre site internet et librement
          accessibles avec un identifiant et un mot de passe afin que vous
          puissiez les consulter et passer commande.
        </p>

        <p>
          Partenaire incontournable de l'Ordre des Avocats au Barreau de Paris,
          Studio Huit réalise des prises de photos pour les nouveaux diplômés de
          la profession de loi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Banner,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["login"]),
    displayLoginInput() {
      this.login();
      this.$router.push("/galerie");
    },
  },
};
</script>

<style scoped>
.cover {
  margin-bottom: 25px;
  width: 100%;
  height: 480px;
}

.login {
  margin-bottom: 35px;
}

.login > button {
  color: white;
  padding: 10px 25px;
  border: 1px solid black;
  border-radius: 25px;
  font-size: 20px;
  font-weight: normal;
  background: black;
  cursor: pointer;
}

.login > button:hover {
  background: white;
  color: black;
}

.about {
  width: 100%;
  display: flex;
}

.about-left {
  width: 50%;
  float: left;
}

.about-left > img {
  width: 560px;
  float: right;
  padding-right: 25px;
}

.about-right {
  width: 50%;
  float: right;
}

.about-right-content {
  text-align: left;
  width: 600px;
}

.about-right-content > p {
  margin-top: 0px;
  margin-bottom: 15px;
  line-height: 1.2;
  font-size: 14px;
}
</style>
