<script lang="ts" setup>
import BaseCard from '@/components/common/BaseCard.vue'
</script>
<template>
  <div class="bg-[#f5f5f5] p-2">
    <div class="mx-auto my-4 max-w-7xl md:my-8 lg:my-14">
      <div class="my-8 flex flex-col gap-3 text-center">
        <p class="text-xs font-bold uppercase text-primary">Our Articles</p>
        <p class="text-2xl font-extrabold">Our Latest News</p>
      </div>
      <div class="flex flex-col gap-4 lg:flex-row">
        <BaseCard
          image="/assets/meeting-1.jpg"
          title="Digital Marketing to Thirdman by giving them a small donation."
          description="Digital Marketing to Thirdman by giving them a small donation. Digital Marketing to Thirdman by giving them a small donation."
          showButton
        />
        <BaseCard
          image="/assets/meeting-2.jpg"
          title="Digital Marketing to Thirdman by giving them a small donation."
          description="Digital Marketing to Thirdman by giving them a small donation. Digital Marketing to Thirdman by giving them a small donation."
          showButton
        />
        <BaseCard
          image="/assets/aboutus-hero.jpg"
          title="Digital Marketing to Thirdman by giving them a small donation."
          description="Digital Marketing to Thirdman by giving them a small donation. Digital Marketing to Thirdman by giving them a small donation."
          showButton
        />
        <BaseCard
          image="/assets/meeting-1.jpg"
          title="Digital Marketing to Thirdman by giving them a small donation."
          description="Digital Marketing to Thirdman by giving them a small donation. Digital Marketing to Thirdman by giving them a small donation."
          showButton
        />
      </div>
    </div>
  </div>
</template>
