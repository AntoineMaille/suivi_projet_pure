<template>
    <v-navigation-drawer
            :value="drawer"
    >
    </v-navigation-drawer>
</template>

<script setup>

defineProps({
    drawer: {type  : Boolean, required: true, default:false},
});


</script>

<style scoped>

</style>