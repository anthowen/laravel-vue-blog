<template id="post-list">

	<div class="row">

		<div class="pull-right">
			<h3>ListPosts Components</h3>
			<router-link class="btn btn-xs btn-primary" v-bind:to="{name:'Addpost'}">
				<span class="glyphicon glyphicon-plus"></span>
				Add new post
			</router-link>
			</br></br>
		</div>
		<table class="table table-bordered">
			<thead>
				<tr>
					<th class="col-span-1">#</th>
					<th class="col-span-2">Post Title</th>
					<th class="col-span-7">Post Body</th>
					<th class="col-span-2">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(post, index) in filteredPosts">
					<td>{{ index+1 }}</td>
					<td>{{ post.title }}</td>
					<td>{{ post.body }}</td>
					<td>
						<router-link class='btn btn-info btn-xs' v-bind:to="{name:'Viewpost', params:{id: post.id}}">Show</router-link>
						<router-link class='btn btn-warning btn-xs' v-bind:to="{name:'Editpost', params:{id: post.id}}">Edit</router-link>
						<router-link class='btn btn-danger btn-xs' v-bind:to="{name:'Deletepost', params:{id: post.id}}">Delete</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueAxios from 'vue-axios';
	import Axios from 'axios';
	export default {

		data:function(){
			return {posts: ''};
		},
		created:function(){

			let uri = 'http://localhost:8000/posts/';
			Axios.get(uri).then((response)=>{
				this.posts = response.data;
			});
		},
		computed:{
			filteredPosts:function(){
				if(this.posts.length){
					return this.posts;
				}
			}
		}
	}
</script> 