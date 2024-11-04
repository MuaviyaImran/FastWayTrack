<script lang="ts" setup>
import { IconClock, IconPhone, IconLocation, IconLogo } from '@/components/icons'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="sticky bg-secondary-light/10">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <!-- <div
        class="flex flex-col gap-1 px-4 py-2 text-[10px] text-secondary-light lg:flex-row lg:gap-4 lg:text-xs"
      >
        <p class="flex items-center gap-2">
          <IconClock />
          <span>Mon - Fri: 8:00 AM - 18:00 PM</span> /
          <span>Sunday: 8:00 AM - 14:00 PM</span>
        </p>
        <p class="flex items-center gap-2"><IconPhone /><span>+0 (555) 123 45 67</span></p>
        <p class="flex items-center gap-2">
          <IconLocation /><span>48 Queen Street, 2055 London</span>
        </p>
      </div> -->
      <!-- <div class="flex items-center gap-3">
        <IconFacebook class="cursor-pointer" />
        <IconInstagram class="cursor-pointer" />
        <IconYoutube class="cursor-pointer" />
        <IconWhatsapp class="cursor-pointer" />
      </div> -->
    </div>
  </div>
  <div class="flex items-center justify-between px-5 py-2 lg:hidden">
    <img src="/favicon.svg" alt="App Logo" class="h-[40px] w-[40px]" loading="lazy" />
    <div class="flex gap-4 text-xs md:gap-8 lg:gap-12">
      <router-link :class="{ 'font-bold': route.name == 'home' }" to="/">Home</router-link>
      <router-link :class="{ 'font-semibold': route.name == 'services' }" to="/services">
        Services</router-link
      >
      <router-link :class="{ 'font-semibold': route.name == 'about' }" to="/about">
        About</router-link
      >
      <router-link :class="{ 'font-semibold': route.name == 'contact' }" to="/contact">
        Contact us</router-link
      >
    </div>
  </div>
  <div class="mx-auto hidden max-w-7xl items-center justify-between p-2 lg:flex">
    <router-link to="/"><IconLogo :height="'70'" width="'150'" /></router-link>
    <div class="flex gap-4 md:gap-8 lg:gap-12">
      <router-link :class="{ 'font-bold': route.name == 'home' }" to="/">Home</router-link>
      <router-link :class="{ 'font-semibold': route.name == 'services' }" to="/services">
        Services</router-link
      >
      <router-link :class="{ 'font-semibold': route.name == 'about' }" to="/about">
        About</router-link
      >
      <router-link :class="{ 'font-semibold': route.name == 'contact' }" to="/contact">
        Contact us</router-link
      >
    </div>
  </div>
</template>
