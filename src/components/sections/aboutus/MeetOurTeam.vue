<script lang="ts" setup>
import BaseCard from '@/components/common/BaseCard.vue'
</script>
<template>
  <div class="mx-auto my-14 max-w-7xl">
    <div class="my-8 flex flex-col gap-3 text-center">
      <p class="text-xs font-bold uppercase text-primary">Our Team</p>
      <p class="text-2xl font-extrabold">Meet Our Team</p>
    </div>
    <div class="flex gap-4">
      <BaseCard
        image="/assets/member-1.jpg"
        title="Alie B. Smith"
        description="Aliejs@gmail.com"
        heighted
        textCentered
      />
      <BaseCard
        image="/assets/member-2.jpg"
        title="Anna j. Mark"
        description="anna@yahoo.com"
        heighted
        textCentered
      />
      <BaseCard
        image="/assets/member-3.jpg"
        title="Violeta Tereshkova"
        description="violeta@gmail.com"
        heighted
        textCentered
      />
      <BaseCard
        image="/assets/member-4.jpg"
        title="Amelie Johnson"
        description="ameliej@hotmail.com"
        heighted
        textCentered
      />
    </div>
  </div>
</template>
