<template>
<div class="navbar">
    <button @click="()=>{console.log(this)}" class="share"><i class="fas fa-share-nodes"></i><span>Share</span></button>
   <div style="display:flex;justify-content: space-around;">
    <div class="menus" >
        <ul ref="menus"  class="item" v-if="item">
            <li @click="almash(0)" class="items active__item" ><router-link to="/">Home</router-link></li>
            <li @click="almash(1)" class="items"><router-link to="/proects">Proyekts</router-link></li>
            <li @click="almash(2)" class="items"><router-link to="/portfolio">  PORTFOLIO</router-link> </li>
            <li @click="almash(3)" class="items"><router-link to="/blog">Blog</router-link></li>
            <li @click="almash(4)" class="items"><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
    <button ref="menu" @click="hidden" class="menu"><i class="fas fa-bars"></i></button>

   </div>
</div>
    <div class="content">
        <div class="me-info">


            <div class="details">

                <div class="own_infos">
                 <img src="./../assets/me.jpg" alt="">
                <span class="my_name">Ergashev Jamshid</span>
               
                    <div class="profis">
        FronEnd Developer
                    </div>
                    <div class="sciols">
                       
                       <a href="#"> <div><i class="fab fa-facebook-f"></i></div></a>
                       <a href="#"><div><i class="fab fa-twitter"></i></div></a>
                       <a href="#"><div><i class="fab fa-behance"></i></div></a>
                       <a href="#"><div><i class="fab fa-dribbble"></i></div></a>
                       <a href="https://github.com/feylon"><div><i class="fab fa-github"></i></div></a>
                       
                        
                        
                        
                        
                    </div>
                    <div class="widjet">
                        <h5 class="widjet_title">
                            Shaxsiy ma'lumotlar
                        </h5>
                        <p><b>Tug'ilgan kun</b>: 14 sentyabr 2002 y.</p>
                        <p><b>Web - site</b> : Nomalum</p>
                        <p><b>Telefon</b> : +998 99 261 14 09</p>
                        <p><b>Mail</b>: jamshid14092002@gmail.com</p>
                        <p><b>Joylashuv</b>: Samarqand viloyati</p>
                    </div>

                    <button>
                        Download SV
                    </button>
                    <div class="langs_knows white">
                        <h5>Tillar</h5>
                       <span> English : A2</span>
                        <span>Uzbek : 100%</span>
                        </div>

                        <div class="langs_knows white">
                        <h5>Qiziqishlar</h5>
                       <span> Video o'yinlar</span>
                        <span>Dasturlash</span>
                        <span>Til o'rganish</span>
                        
                        </div>
            </div>



            </div>






        </div>
    <div class="components">
        <RouterView></RouterView>
    </div>
</div>
</template>
<script setup>
import {ref,computed} from "vue";
// import "./css/main.css";
let menus = ref();

let item = ref(!false);
let hidden = ()=>{
    item.value = !item.value;
    // console.log(item.value);
}

let almash = function(classListNumber){
    let children = menus.value.querySelectorAll("li");
    children.forEach((i)=>{
        i.classList = ["items"];
    });
    children[classListNumber].classList.add ( "active__item") ;

}
 </script>
<style scoped>
@import "./css/main.css";
</style>