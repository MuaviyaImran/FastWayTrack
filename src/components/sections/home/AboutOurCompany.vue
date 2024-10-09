<script setup lang="ts"></script>
<template>
  <div class="my-14 py-5">
    <div class="mx-auto flex max-w-6xl justify-between gap-14">
      <div class="py-14">
        <div class="flex w-[35ch] flex-col gap-5">
          <p class="text-xs font-bold uppercase text-primary">about our company</p>
          <p class="text-4xl font-extrabold">Our Success Is Our Mission</p>
          <p class="text-sm leading-6 text-secondary-light">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <BaseButton variant="filled" type="primary" class="mt-6">
          <template #text>read more</template>
        </BaseButton>
      </div>
      <img src="/assets/meeting-4.jpg" class="h-[500px] w-[650px]" alt="Picture" rel="preload" />
    </div>
  </div>
</template>
