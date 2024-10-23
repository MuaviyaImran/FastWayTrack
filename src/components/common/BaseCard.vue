<script lang="ts" setup>
const props = defineProps<{
  image: string
  title: string
  description: string
  onClick?: () => void
  showButton?: boolean
  heighted?: boolean
  textCentered?: boolean
}>()
</script>
<template>
  <div class="flex w-full flex-col gap-2">
    <img
      loading="lazy"
      :src="image"
      alt=""
      class="w-full"
      :class="[heighted ? 'max-h-[380px]' : 'max-h-[220px]']"
    />
    <p class="mt-2 font-extrabold" :class="[textCentered ? 'text-center' : '']">{{ title }}</p>
    <p class="text-sm text-secondary-light" :class="[textCentered ? 'px-7 text-center' : '']">
      {{ description }}
    </p>
    <BaseButton
      variant="filled"
      type="primary"
      class="mt-1 w-fit"
      :class="[textCentered ? 'mx-auto' : '']"
      onclick="onClick"
      v-if="showButton"
    >
      <template #text>read more</template>
    </BaseButton>
  </div>
</template>
