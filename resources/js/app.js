require('./bootstrap');
/*
window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import AppLayout from './components/App.vue';

//let AppLayout = require('./components/App.vue');

// list view
//const Listposts = Vue.component('Listposts',require('./components/Listposts.vue'));
import Listposts from './components/Listposts.vue';
import Addpost from './components/Addpost.vue';
import Editpost from './components/Editpost.vue';
import Viewpost from './components/Viewpost.vue';
import Deletepost from './components/Deletepost.vue';
/*
const Addpost = Vue.component('Addpost',require('./components/Addpost.vue'));

const Editpost = Vue.component('Editpost',require('./components/Editpost.vue'));

const Viewpost = Vue.component('Viewpost',require('./components/Viewpost.vue'));

const Deletepost = Vue.component('Deletepost',require('./components/Deletepost.vue'));
*/


Vue.use(VueRouter, VueAxios, Axios);

const routes = [
{
	name: 'Listposts',
	path: '/',
	component: Listposts
},
{
	name:'Addpost',
	path: '/add-post',
	component: Addpost
},
{
	name:'Editpost',
	path: '/edit/:id',
	component: Editpost
},
{
	name:'Deletepost',
	path: '/post-delete',
	component: Deletepost
},
{
	name:'Viewpost',
	path: '/view/:id',
	component: Viewpost
}
];		

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(
	Vue.util.extend(
		{ router },
		AppLayout
	)
).$mount('#app');