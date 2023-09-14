<template>
<h2 class="portfolio">PORTFOLIO</h2>

<div class="portfolio_wrapper">
<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(0)" class="item_pics">
    <img  src="../assets/img_1.png" alt="">
    <div :class="pics[0]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 001</h6>
    <span>Buyum : Sumka</span>
</div>
</div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(1)" class="item_pics">
    <img  src="../assets/img_2.png" alt="">
    <div :class="pics[1]?'hover':''" class="items_pics_hover">
        <div class="hover_section">
    <h6>Proyekt : 002</h6>
    <span>Buyum : Qo'l soat</span>
</div>
    </div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(2)" class="item_pics">
    <img  src="../assets/img_3.png" alt="">
    <div :class="pics[2]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 003</h6>
    <span>Buyum : Kepka</span>
</div>
</div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(3)" class="item_pics">
    <img  src="../assets/img_4.png" alt="">
    <div :class="pics[3]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 004</h6>
    <span>Buyum : Choynak</span>
</div>
</div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(4)" class="item_pics">
    <img  src="../assets/img_5.png" alt="">
    <div :class="pics[4]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 005</h6>
    <span>Buyum : Naushnik</span>
</div>
</div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(5)" class="item_pics">
    <img  src="../assets/img_6.png" alt="">
    <div :class="pics[5]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 006</h6>
    <span>Buyum : Stol</span>
</div>
</div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(6)" class="item_pics">
    <img  src="../assets/img_7.png" alt="">
    <div :class="pics[6]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 007</h6>
    <span>Buyum : Noma'lum</span>
</div>
</div>
</div>

<div ref="item_pics" @mouseleave="outsider" @mouseenter="entered(7)" class="item_pics">
    <img  src="../assets/img_8.png" alt="">
    <div :class="pics[7]?'hover':''" class="items_pics_hover">
<div class="hover_section">
    <h6>Proyekt : 008</h6>
    <span>Buyum : Katta choynak</span>
</div>
</div>
</div>



</div>
</template>
<script setup>
import { ref } from 'vue';
let pics = ref([false,false,false,false,false,false,false,false])
let item_pics = ref();
let entered = (i)=>{
    // console.log("asass");
    // item_pics.value.querySelector(".items_pics_hover").classList.add ("hover");
pics.value = [false,false,false,false,false,false,false,false];
pics.value[i] = true
}
let outsider = ()=>{
    // item_pics.value.querySelector(".items_pics_hover").classList.remove ("hover");
pics.value = [false,false,false,false,false,false,false,false];

}
 </script>
<style scoped>
@import "./css/portfolio.css";
</style>