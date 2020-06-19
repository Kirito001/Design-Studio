import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import Search from './components/Search'

Vue.config.productionTip = false

Vue.component('Search', Search)

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')