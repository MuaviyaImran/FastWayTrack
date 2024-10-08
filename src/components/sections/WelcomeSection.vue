<template>
  <section class="relative h-[600px] w-full text-center text-white">
    <img
    rel="preload"
      src="/assets/meeting-1.jpg"
      alt="Picture"
      class="absolute left-0 top-0 z-20 h-full w-full"
    />
    <div class="absolute left-0 top-0 z-30 h-[600px] w-full bg-[rgba(0,25,62,0.7)]">
      <div class="mx-auto flex h-full flex-col items-center justify-center gap-5">
        <p class="font-semibold">Welcome to digital startup agency</p>
        <h2 class="w-[20ch] text-5xl font-bold">Best Digital Technology Agency</h2>
        <BaseButton variant="filled" type="base">
          <template #text>read more</template>
        </BaseButton>
      </div>
    </div>
  </section>
</template>
