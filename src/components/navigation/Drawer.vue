<template>
    <v-app-bar scroll-behavior="elevate" color="secondary-darken-1">
        <template v-slot:prepend>
            <v-app-bar-nav-icon>
                <v-icon size="large" icon="menu" @click.stop="props.click">
                </v-icon>
            </v-app-bar-nav-icon>
            <v-btn style="cursor: pointer" icon to="/">
                <v-avatar size="30" image="/rounded-icon.png"/>
            </v-btn>
        </template>
        <v-app-bar-title>Pure</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
const props = defineProps({
    is_open: Boolean,
    click: Function
});
</script>