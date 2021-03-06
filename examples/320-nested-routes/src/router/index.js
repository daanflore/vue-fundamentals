// ../router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the required components
import VacationPicker from "../components/VacationPicker";
import AddCountry from "../components/AddCountry";
import UpdateCountry from "../components/UpdateCountry";
import CountryDetail from "../components/CountryDetail";
//
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		// define all routes here....
		{
			path: '/',
			name: 'home',
			component: VacationPicker,
			// child route - the clicked item is shown inside a nested <router-view>
			children: [
				{
					path: ':id',
					name: 'detail',
					component: CountryDetail
				},
			]
		},
		{
			path: '/add',
			name: 'add',
			component: AddCountry
		},
		{
			path: '/update',
			name: 'update',
			component: UpdateCountry
		}
	]
})
