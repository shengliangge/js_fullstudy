<template>
  <div class="header">
    <div class="header-icon">
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <slot name="content"></slot>
    </div>
    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>