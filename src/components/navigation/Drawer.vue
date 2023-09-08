<template>
    <v-app-bar-nav-icon variant="text" @click.stop="props.click"></v-app-bar-nav-icon>

    <v-toolbar-title>Pure</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>

</template>

<script setup>

const props = defineProps({
    is_open: Boolean,
    click: Function
});




  
</script>