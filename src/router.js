//외부파일 연동

import Vue from "vue";
import Router from "vue-router";

// 각 페이지 구성
import main from "@/components/main.vue"
import about from "@/components/about.vue"
import portFolio from "@/components/portFolio.vue"
import contact from "@/components/contact.vue"

Vue.use(Router);

export default new Router({
    mode : "history",
    base : process.env.BASE_URL,
    routes : [
        {path : "/", name : "main", component : main},
        {path : "/about", name : "about", component : about},
        {path : "/portFolio", name : "portFolio", component : portFolio},
        {path : "/contact", name : "contact", component : contact},
    ]
})