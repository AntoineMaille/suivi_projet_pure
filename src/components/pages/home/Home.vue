<script setup>
//import Timeline from "@/components/pages/home/components/";
import WaveDivider from "@/components/header/WaveHeader.vue";
</script>
<template>
  <div>
    <WaveDivider title="DÉCOUVREZ LE PROJET" />
    <div style="display: flex" class="align-center justify-center">
      <Timeline />
    </div>
    <div class="container">
      <div class="presentation-section">
        <h1 class="section-title">Cast'In</h1>
        <div class="presentation-section_text">
        <p>
          Cast'in est une application permettant de mettre en relation des intermittents du spectacle et / ou des personnes intéressées par des castings ou des missions. Plus besoin de passer des heures à fouiller les groupes Facebook, à scruter le profil des directeurs de casting, à lire toutes les newsletters ou à consulter un nombre incalculable de sites web, job intermittents centralise tout ! Cela concerne les comédiens, les figurants, les régisseurs, les doubleurs, les chargées de file, les directeurs de castings, les assistants de production, les chargés de production, les réalisateurs, les ingénieurs sons, les danseurs, etc., enfin bref tous les métiers du spectacle rémunérés au régime intermittent. Chaque personne en recherche posterait son annonce et un système de filtres serait disponible pour cibler la recherche selon le profil.
        </p>
        </div>
      </div>
      <div class="presentation-section">
        <div class="presentation-section-image">
        <img src="/castin/Logo.png" alt="Logo de Cast'IN" />
        </div>
        <div class="presentation-section_text">
        <p>Notre logo est une représentation visuelle puissante de notre identité de marque. Deux projecteurs lumineux surplombent fièrement le nom "Cast'in", symbolisant notre engagement à éclairer le chemin de ceux qui aspirent à briller sur scène. Ces projecteurs évoquent l'illumination de vos talents, tandis que le nom "Cast'in" s'inscrit en lettres audacieuses, renforçant ainsi notre présence dans le monde du spectacle. Notre logo incarne l'union de la passion, de la visibilité et des opportunités, tout en projetant une lumière sur votre potentiel artistique.</p>
        </div>
        </div>

      <div class="presentation-section">
        <div class="title">
        <h1 class="section-title">Présentation de l'Application</h1>
        </div>
        <div class="container_presentation_logo">
          <div class="presentation-section_app-screenshot">
            <img src="/castin/Chargement.png" alt="Capture d'écran de l'application Cast'IN" />
          </div>
          <div class="presentation-section_text">
            <p>
              Latenter adsistendo quae quicquid inpendentium ut latenter circulis formido laudes formido Antiochiae per super ad vel super colligendos quidam est inpendentium supprimerent dissimulanter quae conpluribus hi quaedam ut latenter noscere quae adsistendo quas homines regiam duplicarent super inpendentium Caesaris colligendos colligendos adsistendo in honoratorum posticas poterant invitis divites in parum his domus destinarentur inpendentium regiam laudes quas honoratorum conpluribus in ad supprimerent est regiam nuntiabant ignoti peius ut ut invitis duplicarent pervadendoque circulis peius in per per ut et habitu poterant supprimerent regiam poterant latera ut quidam ut laudes formido colligendos noscere peragranter cognita relaturi et per ipsa conpluribus adsistendo.
            </p>
          </div>
        </div>
      </div>
      <div class="presentation-section">
      <div class="presentation-section_text">
        <p>
          Suivez l'avancée du projet en suivant les posts sur la roadmap.
        </p>
      </div>
      </div>


      <div class="footer">
        <p>&copy; 2023 Cast'IN. Tous droits réservés.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1000px) {
  .container_presentation_logo{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 1000px) {
  .container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.presentation-section{
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

.container_presentation_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
}

.align-center {
  text-align: center;
}

.justify-center {
  justify-content: center;
}

.presentation-section {
  display: flex;
  margin: 40px 0;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
}

.section-title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 100px;
}

.app-screenshot img {
  max-width: 100%;
}


.footer {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
}
.presentation-section_app-screenshot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 0 auto;
}

.presentation-section_text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-size: 20px;
  width: 100%;
  margin: 30px;

}
.presentation-section-image {
  display: flex;
  max-width: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}


</style>
