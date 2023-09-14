<template>

    
<h5 class="hello">   HELLO, DAISY MURPHY! </h5>
<span class="about_me">
    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.

    

</span>
<div></div>
<button class="hire_me">hire me</button>


<span class="what_i_do">
    What i do?
</span>
<h4 class="SERVICES">SERVICES</h4>
<div class="services_section">
<div class="services_section_left">
<div class="services_section_box">
    <img src="./../assets/001-target.svg" alt="">

<div class="services_section_content">
    <p>web designing</p>
    <span>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</span>
</div>
</div>

<div class="services_section_box">
    <img src="./../assets/002-development.svg" alt="">

<div class="services_section_content">
    <p>Development</p>
    <span>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</span>
</div>
</div>

</div>
<div class="services_section_right">
    <div class="services_section_box">
    <img src="./../assets/003-idea.svg" alt="">

<div class="services_section_content">
    <p>Graphic design</p>
    <span>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</span>
</div>
</div>

<div class="services_section_box">
    <img src="./../assets/004-smartphone.svg" alt="">

<div class="services_section_content">
    <p>Development</p>
    <span>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</span>
</div>
</div>

</div>

</div>

<div class="slider_section">
<div ref="slider_me" @scroll="slider_engine" class="slider_section_items tanlov">

<div class="jjj">
    <div class="slider_section_img slider_item_1">
        <img src="../assets/me.jpg" alt="">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, ut.
</p>
    </div>
<div class="slider_section_img slider_item_1">
    <img src="../assets/me.jpg" alt="">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, ut.
</p>
</div>

<div class="slider_section_img slider_item_1">
    <img src="../assets/me.jpg" alt="">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, ut.
</p>
</div>

</div>


   









</div>
    <div class="slide_engineing">
        
        
        <div @click="nuqta_1" :class="active_step[0] ? 'slide_active_item':'none'"></div>
        <div @click="nuqta_2" :class="active_step[1] ? 'slide_active_item':'none'"></div>
        <div @click="nuqta_3" :class="active_step[2] ? 'slide_active_item':'none'"></div>
        
    
    </div>
</div>


</template>
<script setup>
import {ref} from "vue"; 
let slider_me = ref();
let active_step = ref([true,false,false])
let slider_engine = ()=>{
    // console.log(slider_me.value.scrollLeft);
}


let nuqta_1 = function(){
    // console.log(slider_me.value.children[0].children[0].offsetWidth)
    active_step.value = [true,false,false];
    let slider_engine1 =  setInterval(() => {
        if(slider_me.value.scrollLeft > 0){
            slider_me.value.scrollLeft -= 8;
          
        }
        else {clearInterval(slider_engine1)}
;    }, 1);
  
}


let nuqta_2 = function(){
    active_step.value = [false,true,false];
    let slider_engine1 =  setInterval(() => {
        if(slider_me.value.scrollLeft < slider_me.value.children[0].children[0].offsetWidth){
            slider_me.value.scrollLeft += 8 ;
           }
        // } else if(slider_me.value.children[0].children[0].offsetWidth < slider_me.value.scrollWidth - slider_me.value.children[0].children[0].offsetWidth)
        // { slider_me.value.scrollLeft -= 5 ;
        // console.log("sihlayapman")
        // }
        else {clearInterval(slider_engine1)}
;    }, 1);
   
    
}

let nuqta_3 = ()=>{
    active_step.value = [false,false,!false];
    let slider_engine1 =  setInterval(() => {
        if(slider_me.value.scrollLeft < slider_me.value.scrollWidth - slider_me.value.children[0].children[0].offsetWidth){
            slider_me.value.scrollLeft += 8 ;
           
        }
        else {clearInterval(slider_engine1)}
;    }, 1);
    
}

</script>
<style scoped>
@import "./css/home.css";
</style>    