<template id="app-post">
	<div>
		<h3>Add New Post</h3>
		<form v-on:submit.prevent = 'createPost'>
			<div class="form-group">
				<label for="add-title">Title</label>
				<input id="add-title" v-model='post.title' class="form-control" required />
			</div>
			<div class="form-group">
				<label for="add-body">Title</label>
				<textarea class="form-control" rows="8" cols="80" v-model="post.body"></textarea>
			</div>

			<button type="submit" class="btn btn-xs btn-primary">Create Post</button>
			<router-link class="btn btn-xs btn-warning" v-bind:to="'/'">Cancel</router-link>
		</form>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueAxios from 'vue-axios';
	import Axios from 'axios';
	export default{
		data:function(){
			return {post: {title: '', body: ''}}
		},
		methods:{
			createPost:function(){
				let uri= 'http://localhost:8000/posts';
				Axios.post(uri,this.post).then((response)=>{
					this.$router.push({name: 'Listposts'})
				})
			}
		}
	}
</script>