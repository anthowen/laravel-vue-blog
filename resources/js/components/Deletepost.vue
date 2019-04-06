<template id="post-delete">
	<div>
		<h3>Delete Post:: {{post.title}}</h3>
		<form v-on:submit.prevent = 'deletePost'>
			<p>The action cannot be undone.</p>
			<button type="submit" name='button' class="btn btn-xs btn-danger">Delete</button>
			<router-link class="btn btn-xs btn-primary" v-bind:to="'/'">Back</router-link>
		</form>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueAxios from 'vue-axios';
	import Axios from 'axios';
	export default{
		data: function(){
			return {post : { title: '', body: ''}};
		},
		created:function(){
			let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
			Axios.get(uri).then((response)=>{
				this.post = response.data;
			});

		},
		methods:{
			deletePost: function(){
				let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
				Axios.delete(uri,this.post).then((response)=>{
					this.$router.push({name: 'Listposts'})
				});
			}
		}
	}
</script>