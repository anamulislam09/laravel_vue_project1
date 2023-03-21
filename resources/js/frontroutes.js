
import { createRouter, createWebHistory } from "vue-router";

import Home from "./front_components/Home.vue";
import About from "./front_components/About.vue";
import Contact from "./front_components/Contact.vue";
// import Shop from "./front_components/Shop.vue";
import Services from "./front_components/Services.vue";


const routes = [
    { path: "/", component: Home,  },
    { path: "/about", component: About,  },
    { path: "/contact", component: Contact,  },
    { path: "/services", component: Services,  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;