<template>
	<header class="header">
		<div class="logo">
			<span>Meal <strong>Planner</strong></span>
			<img src="@/assets/icon-logo.svg" alt="Meal Planner">
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
	};
</script>

<style lang="scss" scoped>
  .header{
    margin-bottom: 60px;
    .logo{
      font-size: 57px;
      display: flex;
      flex-direction: row;
      align-items: center;
      span{
        color: #FF8A00;
        font-family: $font-0;
        margin-right: 15px;
      }
      strong{
        color: #B8CC0B;
        font-family: $font-1;
      }
      img{
        width: auto;
        height: 75px;
      }
    }
  }
</style>
