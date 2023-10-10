<template>
<div class="d-flex align-center">
<v-avatar :size="size" class="mr-2">
    <v-img :src="author.avatar"></v-img>
</v-avatar>
    <div class="d-flex flex-column">
        <h3 style="color: #242424; font-weight: lighter" >
          <a :href="author.linkedin" style="text-decoration: none; color: inherit;">{{author.name}}</a>
        </h3>
        <span class="font-italic">{{author.description}}</span>
    </div>
  <div class="d-flex flex-column ml-10">
    <!-- Ajout de ml-2 pour ajouter de la marge à gauche -->
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
author.value = await fetch(`/articles/authors/${id}.json`).then(response => response.json());
</script>

<style scoped>

</style>