import { createRouter,createWebHashHistory } from "vue-router";

import main from "../src/components/main.vue";
import  home from "../src/components/home.vue";
import  contact from "../src/components/contact.vue";
import blog from "../src/components/blog.vue";
import navbar from "../src/components/navbar.vue";
import portfolio from "../src/components/portfolio.vue";
import resume from "../src/components/resume.vue";
import proects from "../src/components/proects.vue";
let routers = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/",component:main,
        children:[
            {path:"/",component:home},
            {path:"/portfolio",component:portfolio},
            {path:"/contact",component:contact},
            {path:"/blog",component:blog},
            {path:"/proects",component:proects}
        ]
    }
    ]
});
export default routers;
