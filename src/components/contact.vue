<template>
<div class="container"></div>
<form @submit.prevent="send">
    <h4>
    Menga aloqaga chiqing
</h4>
<p class="write_my_email">
    Meni elektiron pochtamga yozing
</p>

<div class="child_container">
<div class="child_container_left">
    <div class="box_section">
        <div class="box-child"><h6>TELEFON</h6>
           <p>+998 99 261 14 09</p> 
        </div>
    </div>
</div>
<div class="child_container_right"> <div class="box_section">
        <div class="box-child"><h6>Email</h6>
           <p>
            jamshid14092002@gmail.com

           </p> 
        </div>
    </div></div>


</div>
<div class="child_container">
    <div class="child_container_left">
       
<div class="child_input">
    <input required v-model="name" type="text" class="form-control child_input_1" placeholder="Name">
</div>
</div>
    <div class="child_container_left">
        <div class="child_input">
    <input required v-model="email" type="email" class="form-control child-input_1" placeholder="Email">
</div>
    </div>
</div>
<div class="child_container">
    <textarea required v-model="title" name="" class="form-control m-auto textarea mt-3" placeholder="Matnni kiriting"></textarea>
</div>
<div class="child_container mt-3 justify-content-end d-flex pe-3">
    
    <button type="submit" class="send">
        Yuborish
    </button>
</div>
</form>
<div class="container m-auto mt-2">
    <table class="table">
      <thead>
    <tr>
      <th class="text-center" scope="col">#</th>
      <th class="text-center" scope="col">Ismi</th>
      <th class="text-center" scope="col">Email</th>
      <th class="text-center" scope="col">Xabar matni</th>
      <th class="text-center" scope="col">Vaqti</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(i,j) in data" :key="j">
      <th scope="row">{{j + 1}}</th>
      <td class="text-center">{{i.Ismi}}</td>
      <td class="text-center">{{ i.email }}</td>
      <td class="text-center" :title="i.title">{{ i.title }}</td>
      <td class="text-center" :title="i.title">{{ i.vaqt }}</td>
      
    </tr>
  
  </tbody>

  </table>
</div>
</template>
<script setup>
import {ref} from "vue";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../../google/index.js";
import {getDoc,onSnapshot } from "firebase/firestore";
import { collection, getDocs,query } from "firebase/firestore"; 
let name = ref("");
let email = ref("");
let title = ref(""); 
let data = ref([]);

let send = async()=>{
    await setDoc(doc(db, "takliflar", email.value), {
        Ismi:name.value,
        email:email.value,
        title:title.value,
        vaqt:(new Date()).toLocaleDateString()
    });

}





let get_data = async ()=>{
    const q = query(collection(db, "takliflar"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  data.value.push(doc.data());
});
}
get_data()
</script>
<style scoped>
@import "./css/contackt.css";
</style>