<template>

    
<h5 class="hello">   Salom, Mening ismim Jamshid! </h5>
<span class="about_me">
    <!-- I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies. -->
Men <b>FrontEnd</b> yo'nalishidagi dasturchiman. Hozirgi paytda TATU  Samarqand filialida III kurs talabasiman. 
<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi mollitia fugiat quidem, veritatis nam, libero quaerat minima magnam enim, distinctio consectetur! Veritatis, porro quae perferendis dolor ut quis mollitia, nostrum hic laboriosam magni in exercitationem accusamus quam similique iusto vero atque rem cum! Iure dolorum id sequi laborum delectus quod voluptas eum. Ad ullam culpa odit soluta unde quam? Labore animi incidunt facere necessitatibus consectetur! Provident sunt iste vero a pariatur. Iure iste perspiciatis ipsum quam illo rerum culpa molestias numquam maxime unde ducimus tenetur accusantium dolorum provident velit impedit labore quis, sed optio atque nisi eveniet minima! Impedit?
    

</span>
<div></div>
<button class="hire_me">hire me</button>


<span class="what_i_do">
    Men nimalarni bilaman ?
</span>
<h4 class="SERVICES mt-2">
    Texnologiyalar
</h4>
<div class="services_section">
<div class="services_section_left">
<div class="services_section_box">
    <img src="./../assets/vue.png" alt="">

<div class="services_section_content">
    <p>VUE JS</p>
    <span>
        Vue.js 3 iishlash texnologiyasi. Hozirgi VUE 3 "Compotion api" bilan turli xil ilovalar chiqaraman.
        
    </span>
</div>
</div>

<div class="services_section_box">
    <img src="./../assets/Pinia.png" alt="">

<div class="services_section_content">
    <p>Pinia</p>
    <span>
        Pinia js  vue.jsning yordamchi statlar boshqaruvi bo'lgani uchun bu borada bir muncha tajribam bor
        </span>
</div>
</div>

<div class="services_section_box">
    <img src="./../assets/git.png" alt="">

<div class="services_section_content">
    <p>Git</p>
    <span>
    VCS(Version control system) - versiyalar  boshqarish ishlash tajribasiga egaman.    
    </span>
</div>
</div>

</div>
<div class="services_section_right">
    <div class="services_section_box">
    <img class="r-50" src="./../assets/javascript.png" alt="">

<div class="services_section_content">
    <p>JavaScript</p>
    <span>
        JavaScript bilan ishlash tajrimasi bilan yetarlicha tajribaga egaman. Bu borada DOM(Document Object Model), APIlar bilan ishlash va ko'plab tizimlar bilan ishlay olaman.
    </span>
</div>
</div>

<div class="services_section_box ">
    <img src="./../assets/css17.png" alt="">

<div class="services_section_content">
    <p>CSS</p>
    <span>CSS bilan veb sahifalarga stil berish bo'yicha bir muncha tajribaga egaman.    
        <br>
    </span>
</div>
</div>

<div class="services_section_box">
    <img src="./../assets/html17.jpg" alt="">

<div class="services_section_content">
    <p>HTML</p>
    <span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam dolore asperiores harum ratione officia fuga nemo itaque! Nisi dicta ipsum!    </span>
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