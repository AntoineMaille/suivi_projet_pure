<script setup>
import {onMounted, ref} from "vue";
import Drawer from "@/components/navigation/Drawer.vue";
import Home from "@/components/pages/Home.vue";


let drawer = ref(false)
</script>

<template>
    <v-app>
        <v-app-bar scroll-behavior="elevate" color="secondary-darken-1">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                    <v-icon size="large" icon="menu" @click="this.drawer = !this.drawer">
                    </v-icon>
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Pure</v-app-bar-title>
        </v-app-bar>
<!--        <Drawer drawer="drawer"/>-->
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<style scoped>
</style>
