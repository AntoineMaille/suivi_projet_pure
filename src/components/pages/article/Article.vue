<template>
    <div class="d-flex justify-center w-100">
        <div class="w-66 mt-5">
            <v-img class="mb-5" id="article-image" cover :src="article.image"/>
            <div class="d-flex align-center">
                <div v-for="author in article.authors">
                    <Suspense>
                        <Author :size="50" class="mt-4" :id="author" v-if="isArticleLoaded"/>
                    </Suspense>
                </div>
            </div>
            <span id="title">{{ article.title }}</span>
        </div>
    </div>
</template>

<script setup>
//get id in link router
import {useRoute} from "vue-router";
import Author from "@/components/pages/article/components/Author.vue";
import {ref} from "vue";

const route = useRoute();
const id = route.params.id;
const article = ref({})
const isArticleLoaded = ref(false);
const fetchData = async () => {
    const response = await fetch(`/articles/article${id}.json`);
    article.value = await response.json();
    isArticleLoaded.value = true;
};

fetchData()

console.log(article.value)
</script>

<style scoped>
#article-image {
    border-radius: 20px;
    height: 45vh;
}

#title {
    font-weight: bold;
    font-size: 60px;

}
</style>