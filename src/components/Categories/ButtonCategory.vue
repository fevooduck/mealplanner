<template>
  <button class="btnCategory" :class="style">
    <img :src="require(`@/assets/${image}`)" :alt="category.name">
    <span>{{ category.name }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonCategory",
  props: ['category'],
  computed: {
      style () {
        return 'bg--' + this.category.slug;
      },
      image () {
        return 'icon-' + this.category.slug + '.svg';
      }
    },
}
</script>

<style lang="scss" scoped>
  .btnCategory{
    height: 174px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0, 0.29);
    border: none;
    outline: transparent;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    img{
      margin-bottom: 20px;
    }
    &:hover{
      box-shadow: none;
    }
  }
</style>