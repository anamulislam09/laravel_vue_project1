
import { createRouter, createWebHistory } from "vue-router";

import BackHome from "./back_components/BackHome.vue";
import Login from "./back_components/Login.vue";
import BackServices from "./back_components/Services.vue";


const routes = [
    { path: "/Dashboard", component: BackHome,  },
    { path: "/login", component: Login, name: "login" },
    { path: "/Dashboard/services", component: BackServices, },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;