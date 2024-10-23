<script lang="ts" setup>
const props = defineProps<{
  title: string
  image: string
  description: string
  plannerImage: string
  reverse: boolean
}>()
</script>
<template>
  <div class="flex flex-col items-center px-4 md:flex-row md:gap-5 md:px-0">
    <div
      :class="[reverse ? 'order-2' : 'order-1']"
      class="flex h-[300px] basis-1/2 flex-col items-center justify-center gap-3 bg-white px-8 py-8 md:h-[500px] md:px-14 md:py-0"
    >
      <img loading="lazy" :src="plannerImage" height="70" width="70" alt="" />
      <p class="text-center text-lg font-bold">Sales & Marketing {{ title }}</p>
      <p class="text-center text-sm text-secondary-light">
        Sales support, email marketing, and content writing. {{ description }}
      </p>
      <BaseButton variant="filled" type="primary" class="mt-6">
        <template #text>read more</template>
      </BaseButton>
    </div>
    <div class="basis-1/2" :class="[reverse ? 'order-1' : 'order-2']">
      <img
        loading="lazy"
        :src="image"
        class="hidden h-[500px] w-full md:flex"
        alt="Picture"
        rel="preload"
      />
    </div>
  </div>
</template>
