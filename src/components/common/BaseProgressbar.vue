<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()

if (props.progress < 0 || props.progress > 100) {
  console.error('Progress value must be between 0 and 100')
}
</script>
<template>
  <div class="relative h-5 w-full overflow-hidden rounded bg-gray-200">
    <!-- Progress bar fill -->
    <div
      class="flex h-full items-center justify-end bg-primary font-medium text-white transition-all duration-300"
      :style="{ width: `${progress}%` }"
    >
      <span class="relative z-10 pr-5 text-xs">{{ progress }}%</span>
    </div>
  </div>
</template>
