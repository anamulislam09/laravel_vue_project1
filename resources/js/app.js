
require('./bootstrap');
import { createApp } from 'vue';
import FrontApp from "./FrontApp.vue"  //root app from frontend
// import BackApp from "./BackApp.vue"//root app from backend
import frontrouter from "./frontroutes";
import backrouter from "./backroutes";


import Sidebar from "./back_components/Sidebar.vue";
import Topbar from "./back_components/Topbar.vue";
import Footer from "./back_components/Footer.vue";


const appfront = createApp(FrontApp);  //application create for front
const appback = createApp({});   //application create for back
// const appback = createApp(BackApp);   //application create for back


appback.component("side-bar",Sidebar)
appback.component("top-bar",Topbar)
appback.component("footer-sec",Footer)
    
appfront.use(frontrouter);
appfront.mount("#front");


appback.use(backrouter);
appback.mount("#back");
