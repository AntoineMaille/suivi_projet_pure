<template>
    <v-card style="width:300px">
        <v-img :src="item.image" cover height="200px"></v-img>
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ item.date }}</v-card-subtitle>
        <v-card-text>{{ item.resume }}</v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="teal-accent-4">See More</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
});
</script>