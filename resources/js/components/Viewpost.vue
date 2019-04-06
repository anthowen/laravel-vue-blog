<template id="post">
	<div>
		<h3>{{post.title}}</h3>
		<strong>Body : </strong>
		<div>
			{{post.body}}
		</div>
		</br>
		<span class="glyphicon glyphicon-arrow-left"></span>
		<router-link v-bind:to="'/'">Back to the post list</router-link>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueAxios from 'vue-axios';
	import Axios from 'axios';
	export default{
		data:function(){
			return {post: {title:'', body: ''}};
		},
		created:function(){
			let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
			Axios.get(uri).then((response)=>{
				this.post = response.data;
			});
		}
	}
</script>