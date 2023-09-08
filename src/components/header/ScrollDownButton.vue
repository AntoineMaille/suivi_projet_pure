<template>
    <v-btn @click="scrollToLastNews" color="white" variant="outlined" rounded="xl">
        See Last News
        <template v-slot:prepend>
            <v-icon icon="expand_more"/>
        </template>
        <template v-slot:append>
            <v-icon icon="expand_more"/>
        </template>

    </v-btn>
</template>

<script setup>
import moment from "moment";

defineProps({
    href: {type: String, required: true, default: "#section-2"}
})

async function scrollToLastNews() {
    const files = import.meta.glob('/public/summaries/*.json');

    // store the first json in files list in last news variable

    //parse new Date with moment

    let lastNewsDate = "01-01-2001";
    let lastNewsName = "";
    // Iterate through loaded JSON files
    for (let filePath in files) {
        if (files.hasOwnProperty(filePath)) {
            //remove /public from path
            filePath = filePath.replace('/public', '');
            const jsonData = await fetch(filePath).then(response => response.json()); // Get the JSON data
            if (moment(jsonData.date, "DD-MM-YYYY").diff(moment(lastNewsDate, "DD-MM-YYYY")) > 0) {
                lastNewsDate = jsonData.date;
                lastNewsName = jsonData.id;
            }
            //insert the data sorted by date
        }
    }
    //get ref lastNews and scroll in it
    console.log(document.getElementById(lastNewsName))
    document.getElementById(lastNewsName).scrollIntoView({behavior: "smooth", alignToTop: true});



}
</script>

<style scoped>

</style>