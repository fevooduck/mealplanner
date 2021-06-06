<template>
  <div class="tags">
    {{list}}
  </div>
</template>

<script>

	import listMeals from '@/data/listMeals.json';

export default {
  name: "ListMeals",
  data() {
    return {
      list: listMeals,
    };
  },
}
</script>

<style lang="scss" scoped>
  .tags{
    padding: 30px 0;
  }
</style>