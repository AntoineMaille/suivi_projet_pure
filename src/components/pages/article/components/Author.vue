<template>
<div class="d-flex align-center">
<v-avatar :size="size" class="mr-2">
    <v-img :src="author.avatar"></v-img>
</v-avatar>
    <div class="d-flex flex-column">
        <h3 style="color: #242424">{{author.name}}</h3>
        <span class="font-italic">{{author.description}}</span>

    </div>
</div>
</template>

<script setup>
import {ref} from "vue";

const {id} = defineProps({
    id:{
        type: String,
        required: true
    },
    size:{
        type:Number,
        default: 60
    }
})

const author = ref({})
author.value = await fetch(`/public/articles/authors/${id}.json`).then(response => response.json());
</script>

<style scoped>

</style>