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
        <Drawer :is_open="drawer" :click="click"/>
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
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<style scoped>
</style>
