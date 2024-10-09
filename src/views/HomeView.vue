<script setup lang="ts">
import {
  WelcomeSection,
  AboutOurCompany,
  AboutUs,
  WhatWeDo,
  WhyBussinessChooseUs,
  WhyChooseUs,
  ClientTestimonials,
} from '@/components/sections/home'
</script>

<template>
  <WelcomeSection />
  <div>
    <AboutUs />
    <WhyChooseUs />
    <AboutOurCompany />
    <WhatWeDo />
    <ClientTestimonials />
    <WhyBussinessChooseUs />
  </div>
</template>
