<script setup lang="ts"></script>
<template>
  <div class="my-14 bg-[#f5f5f5] py-14">
    <div class="mx-auto flex max-w-6xl justify-between gap-14">
      <img src="/assets/meeting-3.jpg" class="h-[500px] w-[650px]" alt="Picture" rel="preload" />
      <div class="py-14">
        <div class="flex w-[35ch] flex-col gap-5">
          <p class="text-xs font-bold uppercase text-primary">Why Choose Us</p>
          <p class="text-4xl font-extrabold">Benefits of Choosing our Agency</p>
          <p class="text-sm leading-6 text-secondary-light">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div class="mt-7 flex flex-col gap-1">
          <p class="text-xs font-medium">Locally Recommended</p>
          <BaseProgressbar :progress="80" />
        </div>
        <div class="mt-4 flex flex-col gap-1">
          <p class="text-xs font-medium">Projects Completed Successfully</p>
          <BaseProgressbar :progress="90" />
        </div>
      </div>
    </div>
  </div>
</template>
