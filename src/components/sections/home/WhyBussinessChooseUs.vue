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
          We understand that starting and running a business can be a challenging journey. That's
          why we're here to help you every step of the way. Our team of experts is dedicated to
          providing you with the tools, resources, and support you need to succeed.
        </p>
      </div>
      <div
        class="mx-auto mt-14 flex max-w-4xl flex-col items-center justify-between gap-4 lg:flex-row lg:items-start lg:gap-0"
      >
        <BaseCompanyQuality
          image="/assets/quality_1.png"
          title="We're Loyal"
          description="We're committed to building long-term partnerships with our clients. We'll be there for you every step of the way, from initial planning to long-term growth."
        />
        <BaseCompanyQuality
          image="/assets/planner_2.png"
          title="We're Helpful"
          description="Our team is always available to answer your questions and provide guidance. We'll work closely with you to understand your unique needs and develop a customized solution."
        />
        <BaseCompanyQuality
          image="/assets/planner_1.png"
          title="We're Flexible"
          description="We understand that your business needs may change over time. That's why we offer flexible solutions that can adapt to your evolving needs."
        />
      </div>
    </div>
  </div>
</template>
