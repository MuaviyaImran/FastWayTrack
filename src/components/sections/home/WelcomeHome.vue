<script setup lang="ts"></script>
<template>
  <section class="relative h-[300px] w-full text-center text-white md:h-[600px]">
    <img
      loading="lazy"
      rel="preload"
      src="/assets/meeting-1.jpg"
      alt="Picture"
      class="absolute left-0 top-0 z-20 h-full w-full"
    />
    <div class="absolute left-0 top-0 z-30 h-[300px] w-full bg-[rgba(0,25,62,0.7)] md:h-[600px]">
      <div class="mx-auto flex h-full flex-col items-center justify-center gap-5">
        <img
          src="/favicon-white.svg"
          class="h-[90px] w-[100px] md:h-[140px] md:w-[150px] lg:h-[180px] lg:w-[200px]"
        />
        <p class="text-sm font-medium md:text-base md:font-semibold">
          Welcome to digital startup agency
        </p>
        <h2 class="w-[20ch] text-2xl font-bold md:text-3xl lg:text-5xl">
          Best Digital Technology Agency
        </h2>
        <!-- <BaseButton variant="filled" type="base">
          <template #text>read more</template>
        </BaseButton> -->
      </div>
    </div>
  </section>
</template>
