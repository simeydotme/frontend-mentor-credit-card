import { createApp } from "vue";
import App from "./App.vue";
import Maska from "maska";

const myApp = createApp(App);
myApp.use(Maska);
myApp.mount("#app");
