<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseNavbar from '@/components/BaseNavbar.vue'
import { ref, onMounted } from 'vue'

// Define a ref to hold the file names
const fileNames = ref<string[]>([])

function preloadImages(imageUrls: string[]) {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = resolve
        img.onerror = reject
      })
    })
  )
}
const loadFileNames = () => {
  const files = import.meta.glob('/public/assets/*.{png,jpg,jpeg,svg}')
  fileNames.value = Object.keys(files).map((file) => file.replace('/public', ''))
  if (fileNames.value.length === 0) {
    preloadImages(fileNames.value)
  }
}

// Load file paths when the component is mounted
onMounted(() => {
  loadFileNames()
})
</script>

<template>
  <BaseNavbar />
  <RouterView />
</template>
