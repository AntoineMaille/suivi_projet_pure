<template>
<v-timeline>
    <v-timeline-item
        v-for="item in summaries"
        :key="item.title"
        :dot-color="item.color"
        :icon="item.icon"
    >
        <v-card>
            <v-img :src="item.image" cover  height="200px"></v-img>
            <v-card-title class="headline">{{ item.title }}</v-card-title>
            <v-card-subtitle>{{item.date}}</v-card-subtitle>
            <v-card-text>{{ item.resume }}</v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="teal-accent-4" >See More</v-btn>
            </v-card-actions>
        </v-card>
    </v-timeline-item>
</v-timeline>
</template>

<script setup>
import {onMounted, ref} from "vue";

const summaries = ref([])
onMounted(async () => {

    const files = import.meta.glob('@/assets/summaries/*.json');

    // Iterate through loaded JSON files
    for (const filePath in files) {
        if (files.hasOwnProperty(filePath)) {
            const jsonData = await fetch(filePath).then(response => response.json()); // Get the JSON data
            summaries.value.push(jsonData);// Add the data to the array
        }
    }
//load all files in assets/summary folder in vue3
})
</script>

<style scoped>

</style>