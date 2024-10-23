<script lang="ts" setup>
const props = defineProps<{
  image: string
  title: string
  description: string
}>()
</script>
<template>
  <div class="flex w-fit flex-col gap-4">
    <img loading="lazy" :src="image" height="70" width="70" alt="Quality Image" class="mx-auto" />
    <p class="text-center text-sm font-extrabold">{{ title }}</p>
    <p class="w-[35ch] text-center text-xs text-secondary-light">{{ description }}</p>
  </div>
</template>
