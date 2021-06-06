<template>
	<div class="buttonList">
		<Button v-for="item in categories" v-bind:category="item" v-bind:key="item.id" @click="filterMeals">
		</Button>
	</div>
</template>

<script>
	import Button from './ButtonCategory.vue';

	export default {
		name: 'Categories',
		components:{
			Button
		},
		data() {
			return {
				categories: [
					{ id: 0, slug: "carboidratos", name: 'Carboidratos', bg: 'bg--carboidratos' },
					{ id: 1, slug: 'carnes', name: 'Carnes e Ovos', bg: 'bg--carboidratos' },
					{ id: 2, slug: 'verduras', name: 'Legumes e Verduras', bg: 'bg--carboidratos' },
					{ id: 3, slug: 'frutas', name: 'Frutas', bg: 'bg--carboidratos' },
					{ id: 4, slug: 'leguminosas', name: 'Leguminosas', bg: 'bg--carboidratos' },
					{ id: 5, slug: 'oleaginosas', name: 'Oleaginosas', bg: 'bg--carboidratos' }
				],
			};
		},

	};
</script>

<style lang="scss" scoped>
	.buttonList{
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		justify-content: space-between;
		gap: 30px;
	}
</style>
