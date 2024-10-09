<script lang="ts" setup>
import BaseCompanyQuality from '@/components/common/BaseCompanyQuality.vue'
</script>
<template>
  <div class="bg-[#f5f5f5] py-14">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto flex w-[52ch] flex-col gap-4 text-center">
        <p class="text-xs font-bold uppercase text-primary">Why Business Choose us</p>
        <p class="text-3xl font-extrabold">Jumpstart your business</p>
        <p class="text-xs text-secondary-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus blanditiis molestias
          deleniti voluptatibus neque dolores, in maxime illo, eaque quis eligendi vitae ea sit
          porro quo nemo! Ipsa, eum fugit!
        </p>
      </div>
      <div class="mx-auto mt-14 flex max-w-4xl justify-between">
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
