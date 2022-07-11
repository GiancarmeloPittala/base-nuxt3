<template>
  <button type="button" :class="[base, sizeClasses, colorClasses]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>



const props = defineProps({
  color: {
    type: String,
    default: () => 'dark'
  },
  size: {
    type: String,
    default: () => 'md'
  },

})

const sizes = {
  md: 'text-base',
  lg: 'text-lg',
}

const colors = {
  dark: 'bg-gray-900 hover:bg-gray-800 hover:bg-gray-700 text-white',
  cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
}

let base = 'transition-colors px-8 xl:px-10 py-3  rounded-lg '


let colorClasses = colors[props.color]
let sizeClasses = sizes[props.size]

</script>