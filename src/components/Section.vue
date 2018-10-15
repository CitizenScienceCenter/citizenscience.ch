<template>
  <div>
    <div class="section">
      <div class="content-wrapper">
        <div class="row">
          <div class="col">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style lang="scss">

@import '@/variables.scss';



</style>
