<script setup lang="ts">
import { computed } from 'vue'
import { generateBaseButtonClasses } from '@/utils'
import type { BaseButtonVarients, BaseButtonTypes } from '@/types'

const props = defineProps<{
  type?: BaseButtonTypes
  variant?: BaseButtonVarients
  disabled?: boolean
  loading?: boolean
  srOnlyLabel?: string
  rounded?: boolean
}>()

const isDisabled = computed(() => props?.disabled || props?.loading)
const classes = computed(() =>
  generateBaseButtonClasses(props.variant as BaseButtonVarients, props.type as BaseButtonTypes)
)
</script>

<template>
  <button
    class="flex items-center gap-2 border px-4 py-2 text-sm font-medium capitalize transition-all hover:scale-105 focus:scale-105 active:scale-95 active:bg-opacity-80 disabled:pointer-events-none disabled:opacity-40"
    :class="[classes, rounded ? 'rounded-full' : 'rounded']"
    :disabled="isDisabled"
  >
    <slot name="pre-fix" v-if="!loading" />
    <slot name="text" />
    <span class="sr-only" v-if="srOnlyLabel">{{ srOnlyLabel }}</span>
    <slot name="icon" v-if="!loading" />
    <svg
      v-if="loading"
      class="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C17.421 22 22 17.421 22 12H20C20 16.337 16.337 20 12 20C7.663 20 4 16.337 4 12C4 7.664 7.663 4 12 4V2C6.579 2 2 6.58 2 12C2 17.421 6.579 22 12 22Z"
        fill="#333333"
      />
    </svg>
  </button>
</template>
