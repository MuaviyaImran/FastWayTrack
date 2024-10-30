<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="py-1 md:py-3 lg:my-14 lg:py-5">
    <div class="mx-auto flex max-w-6xl flex-col justify-between gap-14 md:flex-row">
      <div class="px-4 md:px-0 lg:py-14">
        <div class="flex flex-col gap-5 md:w-[35ch]">
          <p class="text-xs font-bold uppercase text-primary">about our company</p>
          <p class="text-xl font-extrabold md:text-2xl lg:text-4xl">Our Success Is Our Mission</p>
          <p class="text-center text-sm leading-6 text-secondary-light md:text-left">
            Fast Way Track Ltd is a leading provider of Business Process Outsourcing (BPO) services,
            specializing in customer service, sales and marketing, software development, and web
            development. With a focus on streamlining operations, reducing costs, and enhancing
            customer satisfaction, we offer tailored solutions to businesses of all sizes. Our
            experienced team and cutting-edge technology ensure efficient and effective delivery of
            our services.
          </p>
        </div>
        <BaseButton
          variant="filled"
          type="primary"
          class="mdLmt-4 mx-auto mt-2 md:mx-0 lg:mt-6"
          @click="router.push({ name: 'about' })"
        >
          <template #text>read more</template>
        </BaseButton>
      </div>
      <img
        loading="lazy"
        src="/assets/meeting-1.jpg"
        class="h-[300px] w-[650px] md:h-[500px]"
        alt="Picture"
        rel="preload"
      />
    </div>
  </div>
</template>
