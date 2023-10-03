<script setup>
    import { ref} from "vue";
    let drawer = ref(false);

    const click = () => {
        drawer.value = !drawer.value;
    }

    const items = [
    {
        icon: 'home',
        title: 'Home',
        route: '/',
    },
    {
        icon: 'help',
        title: 'About',
        route: '/about',
    },
      {
        icon: 'help',
        title: 'Roadmap',
        route: '/roadmap',
      }
];

</script>

<template>
    <v-app>
        <v-app-bar :color="$route.meta && $route.meta.color?$route.meta.color:'primary-darken-1'" :scroll-behavior="$route.meta && $route.meta.scrollBehavior?$route.meta.scrollBehavior:''" color="secondary-darken-1" prominent>
            <template v-slot:prepend>
                <v-app-bar-nav-icon  @click.stop="click">
                    <v-icon size="large" icon="menu">
                    </v-icon>
                </v-app-bar-nav-icon>
                <v-btn style="cursor: pointer" icon to="/">
                    <v-avatar size="30" image="/castin/castin-rounded-icon.png"/>
                </v-btn>
            </template>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            location="left"
            temporary
        >
            <v-list nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    @click="$router.push(item.route)"
                />
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<style scoped>
</style>
