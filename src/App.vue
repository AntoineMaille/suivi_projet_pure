<script setup>
    import {onMounted, ref} from "vue";
    import Drawer from "@/components/navigation/Drawer.vue";
    let drawer = ref(false);

    const click = () => {
        drawer.value = !drawer.value;
    }

    const items = [
    {
        icon: 'mdi-dots-vertical', 
        title:'Dashboard', 
        route:'/dashboard'
    },
    {
        icon: 'mdi-home',
        title: 'Home',
        route: '/',
    },
    {
        icon: 'mdi-speedometer',
        title: 'About',
        route: '/about',
    }
];

</script>

<template>
    <v-app>
        <v-app-bar scroll-behavior="elevate" color="secondary-darken-1" prominent>
            <Drawer :is_open="drawer" :click="click"/>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            location="left"
            temporary
        >
            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    variant="tonal"
                    dense
                    @click="$router.push(item.route)"
                >
                    <v-icon :icon="item.icon"></v-icon>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- <v-app-bar scroll-behavior="elevate" color="secondary-darken-1">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                    <v-icon size="large" icon="menu" @click="this.drawer = !this.drawer">
                    </v-icon>
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Pure</v-app-bar-title>
        </v-app-bar> -->
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<style scoped>
</style>
