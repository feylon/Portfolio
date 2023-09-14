<template>

<div class="h6">
    Dunyo yangiliklari
</div>
<div class="loading" v-if="load">
    <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
<div class="row" v-else>
    <div v-for="(i,j) in data" class="col-4 mb-2" :key="j">
        <div class="card" style="width: 18rem;">
  <img :src="i.urlToImage" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ i.title }}</h5>
    <p class="card-text">{{ i.content }}</p>
    <a target="_blank" :href="i.url" class="button1">To'liq o'qish</a>
  </div>
</div>
    </div>
</div>
</template>
<script setup>
import {ref} from "vue";
let load = ref(true);
let data = ref([])
let get_data = async () => {
    
 let   backend = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a167deb1da9846d7bb5a9779d7c07425");
    backend = await backend.json();
    console.log(backend.articles);
    // data.value = backend.articles;
data.value = backend.articles.filter(i=>{if(i.urlToImage) return i.urlToImage}).slice(0,10);
load.value = !load.value;    
};
    get_data();
</script>
<style scoped>
@import "../components/css/blog.css";
</style>