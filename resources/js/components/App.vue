<template>
	<div class="container">
		<h1>Vue-APP Component</h1>
		<transition name='fade'>
			<router-view></router-view>
		</transition>
	</div>
</template>


<script>
	export default {

		mounted(){
			console.log('Component mounted.');
		}
	}
</script>
