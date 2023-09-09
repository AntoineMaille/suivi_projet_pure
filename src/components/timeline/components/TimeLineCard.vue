<template>
    <v-card :id="item.id" :disabled="disabled" class="timeline-card" :class="disabled === true?'grayed':''">
        <v-img :src="item.image" cover height="100px"></v-img>
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-subtitle class="font-italic">{{ item.date === null ? 'To be determined' : displayedDate }}</v-card-subtitle>
        <v-card-text>{{ item.resume }}</v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="teal-accent-4">En Savoir Plus</v-btn>
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
    },
    isMobile: {
        type: Boolean,
        default: false
    }
});
let displayedDate = ref(null)
let disabled = ref(false)
if (item.date !== null) {
    const parsedDate = moment(item.date, "DD-MM-YYYY");
    displayedDate.value = parsedDate.format("LL");

    //compare now with item.date moment
    const now = moment();
    if (parsedDate.diff(now, 'days') > 0) disabled.value = true;
} else disabled.value = true

</script>
<style scoped>
.grayed {
    filter: grayscale(1);
}


.timeline-card {
    width: 500px;
}

@media (max-width: 1200px) {
    .timeline-card {
        width: 400px;
    }

}


@media (max-width: 900px) {
    .timeline-card {
        width: 90%;
    }

}

</style>
