<template>
    <div class="h5">Proyektlarim</div>
    <div class="container">
        <table class="table u bg-light">
      <thead>
    <tr>
      <th class="text-center" scope="col">#</th>
      <th class="text-center" scope="col">Loyiha nomi</th>
      <th class="text-center" scope="col">Sayti</th>
      <th class="text-center" scope="col">Saytning 
        tasnifi
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(i,j) in data" :key="j">
      <th class="text-center" scope="row">{{j + 1}}</th>
      <td class="text-center">{{i.name}}</td>
      <td class="text-center"><a target="_blank" :href="i.url">{{ i.url }}</a></td>
      <td class="text-center">{{i.title}}</td>
    </tr>
    
  </tbody>

  </table>
    </div>
</template>
<script setup>
import {db} from "../../google/index";
import { doc, getDoc,onSnapshot } from "firebase/firestore";
import { collection, getDocs,query } from "firebase/firestore"; 
import {ref} from "vue";
let data = ref([]);
let get_data = async ()=>{
    const q = query(collection(db, "Loyihalarim"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  data.value.push(doc.data());
});
}
get_data()
</script>
<style>
*{
    background: none;
}
tr, td{
    background: none!important;;

}
.h5{
  background-color: transparent!important;;
}
table{
 background-color: none!important;; 
}
.u{
  background-color: white!important;;
}
</style>