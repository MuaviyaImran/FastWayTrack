<script lang="ts" setup>
import BaseCompanyQuality from '@/components/common/BaseCompanyQuality.vue'
</script>
<template>
  <div class="pb-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto flex w-[28ch] flex-col gap-4 text-center md:w-[32ch] lg:w-[52ch]">
        <p class="pt-7 text-xs font-bold uppercase text-primary md:pt-0">Why Business Choose us</p>
        <p class="text-3xl font-extrabold">Jumpstart your business</p>
        <p class="text-xs text-secondary-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus blanditiis molestias
          deleniti voluptatibus neque dolores, in maxime illo, eaque quis eligendi vitae ea sit
          porro quo nemo! Ipsa, eum fugit!
        </p>
      </div>
      <div
        class="mx-auto mt-14 flex max-w-4xl flex-col items-center justify-between gap-4 lg:flex-row lg:items-start lg:gap-0"
      >
        <BaseCompanyQuality
          image="/assets/quality_1.png"
          title="We're Loyal"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus blanditiis molestias
          deleniti voluptatibus neque dolores"
        />
        <BaseCompanyQuality
          image="/assets/planner_2.png"
          title="We're Helpful"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus blanditiis molestias
          deleniti voluptatibus neque dolores"
        />
        <BaseCompanyQuality
          image="/assets/planner_1.png"
          title="We're Flexible"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus blanditiis molestias
          deleniti voluptatibus neque dolores"
        />
      </div>
    </div>
  </div>
</template>
