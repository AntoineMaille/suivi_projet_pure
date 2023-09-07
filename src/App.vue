<script setup>
import {onMounted, ref} from "vue";
import Drawer from "@/components/navigation/Drawer.vue";
import Home from "@/components/pages/Home.vue";


    let drawer = ref(false)
</script>

<template>
    <v-app>
        <v-app-bar color="primary">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                    <v-icon size="large" icon="menu" @click="this.drawer = !this.drawer">
                    </v-icon>
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Pure</v-app-bar-title>
        </v-app-bar>
        <Drawer drawer="drawer"/>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <router-view/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
</style>
