<template>
  <li class="relative border-b-2 border-gray-200 list-none">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium">{{ accordion.title }}</span>
        <span> 
          <svg class="w-6 h-6 transition-transform" :class="{'rotate-180': selected}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg> 
        </span>
      </div>
    </button>


      <div v-if="selected" class="relative overflow-hidden transition-all duration-700" style="">
        <div class="py-2">
          <p class="text-sm text-gray-700 tracking-wide leading-relaxed">
            {{ accordion.description }}
          </p>
        </div>
      </div>
  </li>
</template>

<script setup>



const props = defineProps({
  accordion: {
    type: Object,
    required: true,
  },
})
const accordion = props.accordion;
const selected = ref( false )

</script>

