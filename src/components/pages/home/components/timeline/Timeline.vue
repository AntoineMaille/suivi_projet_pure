<template>
    <v-timeline
        class="w-100"
    :side="isMobile === true ? 'end' : ''"
    >
        <v-timeline-item
                v-for="item in summaries"
                :key="item.title"
        >
            <template v-slot:icon>
                <v-avatar :image="item.icon"></v-avatar>
            </template>
            <TimeLineCard :item="item"/>
        </v-timeline-item>
    </v-timeline>
</template>

<script setup>
import {onBeforeMount, onBeforeUnmount, onMounted, ref} from "vue";
import TimeLineCard from "@/components/pages/home/components/timeline/components/TimeLineCard.vue";
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



});

onBeforeMount(() => {
    //listen for resize window
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeHandler);
})

let isMobile = ref(false)

function  resizeHandler() {
    window.innerWidth <  900 ? isMobile.value = true : isMobile.value = false;
}
</script>