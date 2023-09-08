<template>
<v-timeline>
    <v-timeline-item
        v-for="item in summaries"
        :key="item.title"
        :dot-color="item.color"
        :icon="item.icon"
    >
        <TimeLineCard :item="item"/>
    </v-timeline-item>
</v-timeline>
</template>

<script setup>
import {onMounted, ref} from "vue";
import TimeLineCard from "@/components/timeline/TimeLineCard.vue";

const summaries = ref([])
onMounted(async () => {

    const files = import.meta.glob('/public/summaries/*.json');

    // Iterate through loaded JSON files
    for (let filePath in files) {
        if (files.hasOwnProperty(filePath)) {
            //remove /public from path
            filePath = filePath.replace('/public', '');
            const jsonData = await fetch(filePath).then(response => response.json()); // Get the JSON data
            summaries.value.push(jsonData);// Add the data to the array
        }
    }
//load all files in assets/summary folder in vue3
})
</script>