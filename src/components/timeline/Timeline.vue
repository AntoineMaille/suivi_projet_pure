<template>
    <v-timeline>
        <v-timeline-item
                v-for="item in summaries"
                :key="item.title"
                :id="item.id"
        >
            <template v-slot:icon>
                <v-avatar :image="item.icon"></v-avatar>
            </template>
            <TimeLineCard :item="item"/>
        </v-timeline-item>
    </v-timeline>
</template>

<script setup>
import {onMounted, ref} from "vue";
import TimeLineCard from "@/components/timeline/components/TimeLineCard.vue";
import moment from "moment";

let summaries = ref([])
onMounted(async () => {

    const files = import.meta.glob('/public/summaries/*.json');

    // Iterate through loaded JSON files
    for (let filePath in files) {
        if (files.hasOwnProperty(filePath)) {
            //remove /public from path
            filePath = filePath.replace('/public', '');
            const jsonData = await fetch(filePath).then(response => response.json()); // Get the JSON data
            //insert the data sorted by date

            summaries.value.push(jsonData);// Add the data to the array
        }
    }
})
</script>