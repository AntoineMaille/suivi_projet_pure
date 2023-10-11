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
        <h1 class="section-title">Soyez au cœur de l'action</h1>
        <div class="presentation-section_text">
        <p>
          Cast'in est l'application qui vous rapproche du monde du spectacle. Que vous soyez un comédien, un régisseur, un danseur, ou tout autre professionnel du spectacle, notre plateforme vous met en relation avec des castings et des missions excitantes. Fini les longues heures de recherche sur divers sites web et les réseaux sociaux. Cast'in centralise tout, vous permettant de trouver rapidement les opportunités qui correspondent à votre profil. Plus qu'une application, Cast'in est votre passeport vers une carrière artistique épanouissante.
        </p>
        </div>
      </div>
      <div class="presentation-section">
        <h1 class="section-title">La magie derrière notre logo</h1>
        <div class="presentation-section-image">
        <img src="/castin/Logo.png" alt="Logo de Cast'IN" />
        </div>
        <div class="presentation-section_text">
        <p>Notre logo incarne la magie du spectacle. Deux projecteurs lumineux, symboles de la scène, se dressent fièrement au-dessus du nom "Cast'in". Ces projecteurs ne sont pas seulement des sources de lumière, mais aussi des guides pour tous ceux qui aspirent à briller. Le nom "Cast'in" est écrit en caractères audacieux, reflétant notre engagement à vous offrir la visibilité dont vous avez besoin. Notre logo représente l'union de la passion, de la créativité, et de l'opportunité, projetant une lumière sur votre potentiel artistique.</p>
        </div>
        </div>

      <div class="presentation-section">
        <div class="title">
        <h1 class="section-title"><span style="font-family: Heimdal">CAST'IN</span> en action</h1>
        </div>
        <div class="container_presentation_logo">
          <div class="presentation-section_app-screenshot">
            <img src="/castin/Chargement.png" alt="Capture d'écran de l'application Cast'IN" />
          </div>
          <div class="presentation-section_text">
            <p>
              Découvrez Cast'in en action sur l'iPhone. Notre application vous offre une expérience fluide et intuitive. Avec notre interface conviviale, vous pouvez créer et consulter des annonces de castings en un instant. Les filtres avancés vous permettent de cibler les offres en fonction de votre profil. Plus besoin de chercher ailleurs, tout ce dont vous avez besoin est à portée de main. Cast'in est la passerelle entre votre talent et les opportunités qui vous attendent. Rejoignez-nous aujourd'hui et faites briller votre carrière artistique.
            </p>
          </div>
        </div>
      </div>
      <div class="presentation-section">
      <div class="presentation-section_text">
        <p>
          Restez informé de l'évolution de notre projet en consultant régulièrement les publications sur notre roadmap. Nous vous tiendrons au courant de nos progrès et des nouvelles fonctionnalités à venir. Nous sommes impatients de vous accueillir sur notre plateforme.
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
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


.footer {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
}
.presentation-section_app-screenshot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  justify-content: center;
  align-items: center;
  width: 30%;
}


</style>
