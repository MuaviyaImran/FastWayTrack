<script lang="ts" setup>
import { IconClock, IconPhone, IconLocation, IconLogo } from '@/components/icons'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="sticky bg-secondary-light/10">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <div class="flex gap-4 py-2 text-xs text-secondary-light">
        <p class="flex items-center gap-2">
          <IconClock />
          <span>Mon - Fri: 8:00 AM - 18:00 PM</span> /
          <span>Sunday: 8:00 AM - 14:00 PM</span>
        </p>
        <p class="flex items-center gap-2"><IconPhone /><span>+0 (555) 123 45 67</span></p>
        <p class="flex items-center gap-2">
          <IconLocation /><span>48 Queen Street, 2055 London</span>
        </p>
      </div>
      <!-- <div class="flex items-center gap-3">
        <IconFacebook class="cursor-pointer" />
        <IconInstagram class="cursor-pointer" />
        <IconYoutube class="cursor-pointer" />
        <IconWhatsapp class="cursor-pointer" />
      </div> -->
    </div>
  </div>
  <div class="mx-auto flex max-w-7xl items-center justify-between py-2">
    <router-link to="/"><IconLogo :height="'70'" width="'150'" /></router-link>
    <div class="flex gap-12">
      <router-link :class="{ 'font-bold': route.name == 'home' }" to="/">Home</router-link>
      <router-link :class="{ 'font-semibold': route.name == 'services' }" to="/services">
        Services</router-link
      >
      <router-link :class="{ 'font-semibold': route.name == 'about' }" to="/about">
        About</router-link
      >
    </div>
  </div>
</template>
