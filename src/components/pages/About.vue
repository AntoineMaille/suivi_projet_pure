<script setup>
import WaveDivider from "@/components/header/WaveHeader.vue";
import Author from "@/components/pages/article/components/Author.vue";
</script>

<template>
    <div>
      <WaveDivider title="À propos de nous"/>
      <v-container>
        <v-row>
          <v-col cols="12">
            <p>
              Nous sommes un groupe de quatre étudiants en Master Informatique mention "eServices". Notre passion pour la technologie et notre désir d'innover nous ont amenés à créer Cast'in dans le cadre de notre Projet Platine.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3 class="headline">Notre Vision</h3>
            <p>
              Notre vision est de révolutionner l'industrie du spectacle en mettant en relation les professionnels et les talents du monde du spectacle de manière transparente et efficace. Nous croyons fermement en la puissance de la technologie pour créer des opportunités, favoriser la collaboration et faire briller les talents artistiques.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3 class="headline">Notre Engagement</h3>
            <p>
              Nous nous engageons à fournir une plateforme de haute qualité, conviviale et adaptée aux besoins de notre communauté. Notre équipe travaille sans relâche pour faire de Cast'in une référence incontournable dans l'industrie du spectacle. Nous sommes déterminés à exploiter pleinement le potentiel de Cast'in et à le faire évoluer constamment pour répondre à vos attentes.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  <div class="footer">
    <p>&copy; 2023 Cast'IN. Tous droits réservés.</p>
  </div>
</template>

<style>
.footer {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
}
</style>
