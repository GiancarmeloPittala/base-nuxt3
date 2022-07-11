<template>
  <div class="container px-4 sm:px-8 mx-auto" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseSection',
}
</script>
