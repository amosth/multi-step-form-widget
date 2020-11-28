import Vue from 'vue';
import VModal from 'vue-js-modal';
import store from './store.js';
import router from './router.js';
import App from './App.vue';
import 'leaflet/dist/leaflet.css';


Vue.config.productionTip = false;
Vue.use(VModal);

new Vue({
	store: store,
	router: router,
	render: h => h(App),
}).$mount('#app')