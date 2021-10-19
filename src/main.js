import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueCookies from "vue-cookies";
//import VueCryptojs from 'vue-cryptojs'
//import UUID from "vue-uuid";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
library.add(far);

require('@/assets/css/app.scss');
let config = require((process.env.NODE_ENV == 'development') ? '@/assets/config/config.dev.json' : '@/assets/config/config.json');
axios.defaults.baseURL = `${(typeof config.host.protocal == 'string') ? config.host.protocal + '://' : ''}${(typeof config.host.domain == 'string') ? config.host.domain : ''}${(typeof config.host.port == 'string' || typeof config.host.port == 'number') ? ':' +config.host.port : '' }`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');

if(sessionStorage || localStorage){
	window.addEventListener('storage', (event) => {
		const UID = VueCookies.get('GUEST_UD');
		(sessionStorage) ? sessionStorage.setItem('GUEST_UD', (typeof event.newValue == 'string') ? event.newValue + 'abe94wews' : UID) : undefined;
		(localStorage) ? localStorage.setItem('GUEST_UD', (typeof event.newValue == 'string') ? event.newValue + 'abe94wews' : UID) : undefined;
	});	
}
