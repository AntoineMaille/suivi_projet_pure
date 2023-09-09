<template>
    <div class="wave-container">
        <div style="display: flex" class="flex-column align-center justify-end h-100 w-100">
            <v-spacer/>
            <h1><span v-html="text"></span></h1>
            <v-spacer/>
            <ScrollDownButton class="mb-12" href="#section-2"/>
        </div>
    </div>
</template>

<script setup>

import ScrollDownButton from "@/components/header/ScrollDownButton.vue";
import {onMounted, ref} from "vue";

let originalText = "DÉCOUVREZ LA ROADMAP DU PROJET PURE ."
let text = ref("DÉCOUVREZ LA ROADMAP DU PROJET <img style=\"  width: 50px;height: 50px;vertical-align: middle; margin-right: 5px\" id=\"animatedLogo\" alt=\"bla\" src=\"/rounded-icon.png\"/>URE .")

function replaceWithLogo() {
    text.value = originalText.substring(0, 31) +
        ` <img style="  width: 50px;height: 50px;vertical-align: middle; margin-right: 5px" id="animatedLogo" alt="bla" src="/rounded-icon.png"/>` + originalText.substring(31 + 1);
}


</script>

<style scoped>

h1 {
    font-size: 2.5rem;
    text-align: center;
    font-family: 'Questrial', sans-serif;
    margin: 0;
    padding: 0;
    letter-spacing: 4px;
    color: #faeeee;
    transition: all 0.5s ease-in-out;
}

.wave-container {
    height: 40vh;
    background-color: rgb(var(--v-theme-secondary-darken-1));
    position: relative;
}



.wave-container::before {
    content: "";
    width: 100%;
    height: 77px;
    position: absolute;
    bottom: -0.3%;
    left: 0;
    background-size: auto;
    background-repeat: repeat no-repeat;
    background-position: 56vw bottom;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  97' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 71L50 67C100 63 200 54 300 36C400 19 500 -8 600 1C700 10 800 54 900 71C1000 89 1100 80 1150 76L1200 71V98H1150C1100 98 1000 98 900 98C800 98 700 98 600 98C500 98 400 98 300 98C200 98 100 98 50 98H0V71Z' fill='%23ffffff'/></svg>");
}

@media (max-width: 850px) {
    .wave-container::before {
        height: 38.5px
    }
}

h1 {
    transition: all 0.5s ease-in-out; /* Adjust animation duration and easing as needed */
}


</style>