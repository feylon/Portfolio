import { defineStore } from "pinia";
export const funksiya = defineStore('counter',{
    state:()=>{
        return{count:23}
       
    },
    actions:{
        console1(){
            console.log("salom")
        }
    }
});