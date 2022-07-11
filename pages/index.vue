<template>
  <BasePage>
      <section>
        <BaseSection>
          <h1 class="text-3xl text-center"> Home Page</h1>
        </BaseSection>
      </section>

      <section>
        <BaseSection>
          Questa è la seconda sezione <BaseButton> Bottone </BaseButton>
        </BaseSection>
      </section>

       <section>
        <BaseSection>
          <h3> Questa è la terza sezione </h3>
          <BaseAccordion :accordion="accordion" v-for="accordion,i of [{ title: 'test', description: 'test1'},{ title: 'test', description: 'test1'}]" :key="'acc' + i "/>
        </BaseSection>
      </section>

  </BasePage>  
</template>



<script setup>
definePageMeta({
  title: 'My home page'
})

let helloGet = ref('');
let helloPost = ref('');



helloGet = await $fetch('/api/hello');
helloPost = await $fetch('/api/hello', { method: 'POST' });
// hello = await $fetch('/hello');

</script>