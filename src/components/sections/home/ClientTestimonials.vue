<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { clientsData } from '@/data'

const currentIndex = ref(0)
const autoSlideInterval = 3000
let intervalId: number | undefined

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % clientsData.length
}

const goToImage = (index: number) => {
  currentIndex.value = index
}

const startAutoSlide = () => {
  intervalId = setInterval(nextImage, autoSlideInterval)
}

const stopAutoSlide = () => {
  if (intervalId) clearInterval(intervalId)
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <div class="mb-10 mt-14 py-5 text-3xl">
    <p class="text-center text-xs font-bold uppercase text-primary">What We Do</p>
    <div class="text-center font-extrabold">
      <p>We're provide</p>
      <p>invest & business services</p>
    </div>
    <div class="carousel mx-auto my-4">
      <div class="carousel-images text-center">
        <div
          v-for="(data, index) in clientsData"
          :key="index + data.name"
          :class="{ active: index === currentIndex }"
        >
          <img
            :src="data.image"
            :alt="`Image ${index + 1}`"
            class="mx-auto h-[100px] w-[100px] rounded-full"
          />
          <p class="my-3 text-xs text-secondary-light">{{ data.description }}</p>
          <p class="my-3 text-xs font-bold">{{ data.name }}</p>
          <p class="my-3 text-xs font-semibold text-secondary-light">{{ data.country }}</p>
        </div>
      </div>
      <div class="carousel-indicators">
        <span
          v-for="(data, index) in clientsData"
          :key="index + data.name"
          :class="{ active: index === currentIndex }"
          @click="goToImage(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
}
.carousel-images div {
  display: none;
  transition: opacity 0.5s ease;
}
.carousel-images div.active {
  display: block;
  opacity: 1;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.carousel-indicators span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ddd;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.carousel-indicators .active {
  background-color: #333;
}
</style>
