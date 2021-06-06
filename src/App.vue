<template>
	<div id="mealPlanner">
		<Header />
		<Categories />
		<ListMeals />
	</div>
</template>

<script>

	import Header from './components/Header.vue';
	import Categories from './components/Categories/Categories.vue';
	import ListMeals from './components/Categories/ListMeals.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Categories,
			ListMeals
		},
	};
</script>

<style lang="scss" scoped>
	#mealPlanner{
		width: 100%;
		max-width: 1300px;
		padding: 60px 20px;
		margin: 0 auto;
	}
</style>
