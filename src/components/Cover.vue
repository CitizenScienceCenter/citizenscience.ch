<template>
  <div class="cover">
  </div>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style lang="scss">

@import '@/colors.scss';

.cover {
  height: 560px;
  background-image: linear-gradient(to bottom right, $color-primary, $color-secondary);
}

</style>
