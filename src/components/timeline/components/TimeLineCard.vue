<template>
    <v-card :disabled="disabled" style="width:300px;" :class="disabled === true?'grayed':''">
        <v-img :src="item.image" cover height="100px"></v-img>
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ item.date === null ? 'To be determined' : displayedDate }}</v-card-subtitle>
        <v-card-text>{{ item.resume }}</v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="teal-accent-4">See More</v-btn>
        </v-card-actions>

    </v-card>
</template>
<script setup>
import moment from "moment";
import {ref} from "vue";

const {item} = defineProps({
    item: {
        type: Object,
        required: true
    }
});
let displayedDate = ref(null)
let disabled = ref(false)
if (item.date !== null) {
    const parsedDate = moment(item.date, "DD-MM-YYYY");
    displayedDate.value = parsedDate.format("LL");

    //compare now with item.date moment
    const now = moment();
   if (parsedDate.diff(now, 'days')) disabled.value = true;
}
else disabled.value = true

</script>
<style scoped>
.grayed{
    filter: grayscale(1);
}
</style>
