<template>
    <div class="bodyArticle d-flex justify-center w-100">
        <div id="article-container" class="mt-5">
            <v-img class="mb-5" id="article-image" cover :src="article.image"/>
            <div id="text-container">
                <div class="d-flex justify-center">
                    <div v-for="author in article.authors">
                        <Suspense>
                            <Author :size="49" class="mt-4" :id="author" v-if="isArticleLoaded"/>
                        </Suspense>
                    </div>
                </div>
              <div class="article">
                <h1 id="title" style="text-align: center; margin-top: 2vh">{{ article.title }}</h1>
                <span v-html="articleHtml" v-if="isArticleLoaded"/>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//get id in link router
import {useRoute} from "vue-router";
import Author from "@/components/pages/article/components/Author.vue";
import {ref} from "vue";
import '../../../assets/css/article.css'

const route = useRoute();
const id = route.params.id;
const article = ref({});
const articleHtml = ref({});
const isArticleLoaded = ref(false);
const fetchData = async () => {
    let response = await fetch(`/articles/article${id}/article${id}.json`);
    article.value = await response.json();
    response = await fetch(`/articles/article${id}/article${id}.html`);
    articleHtml.value =  await response.text();
    isArticleLoaded.value = true;
};


fetchData()

</script>

<style scoped>
#article-image {
    border-radius: 20px;
    height: 40vh;
    margin-top: 4vh;
}

#article-container {
    width: 66%;
}

#title {
    font-size: 50px;
}


@media (max-width: 1300px) {
    #article-container {
        width: 80%;
    }

    #title {
        font-size: 50px;
    }
}
@media (max-width: 1000px) {

    #title {
        font-size: 40px;
    }
}
@media (max-width: 750px) {
    #article-container {
        width: 100%;
        margin-top: 0px!important;
    }

    #article-image{
        border-radius: 0px;
    }

    #text-container{
        margin-left: 40px;
        margin-right: 40px;
    }

}
@media (max-width: 400px) {
   #title {
        font-size: 30px;
    }

}

</style>