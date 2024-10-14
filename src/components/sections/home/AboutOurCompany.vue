<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="my-14 py-5">
    <div class="mx-auto flex max-w-6xl justify-between gap-14">
      <div class="py-14">
        <div class="flex w-[35ch] flex-col gap-5">
          <p class="text-xs font-bold uppercase text-primary">about our company</p>
          <p class="text-4xl font-extrabold">Our Success Is Our Mission</p>
          <p class="text-sm leading-6 text-secondary-light">
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
          class="mt-6"
          @click="router.push({ name: 'about' })"
        >
          <template #text>read more</template>
        </BaseButton>
      </div>
      <img src="/assets/meeting-4.jpg" class="h-[500px] w-[650px]" alt="Picture" rel="preload" />
    </div>
  </div>
</template>
