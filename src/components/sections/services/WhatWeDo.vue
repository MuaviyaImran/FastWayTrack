<script setup lang="ts"></script>
<template>
  <div class="bg-[#f5f5f5] py-14">
    <p class="text-center text-xs font-bold uppercase text-primary">What We Do</p>
    <div class="text-center text-3xl font-extrabold">
      <p>We're provide</p>
      <p>invest & business services</p>
    </div>
    <div class="mx-auto mt-7 flex max-w-6xl flex-col gap-5">
      <div class="flex items-center gap-5">
        <div
          class="flex h-[500px] basis-1/2 flex-col items-center justify-center gap-3 bg-white px-14"
        >
          <img src="/assets/planner_1.png" height="70" width="70" alt="" />
          <p class="text-lg font-bold">Customers Services</p>
          <p class="text-center text-sm text-secondary-light">
            Inbound/outbound call centers, email support, chat support, and social media management.
          </p>
          <BaseButton variant="filled" type="primary" class="mt-6">
            <template #text>read more</template>
          </BaseButton>
        </div>
        <div class="basis-1/2">
          <img src="/assets/meeting-3.jpg" class="h-[500px] w-full" alt="Picture" rel="preload" />
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div class="basis-1/2">
          <img src="/assets/meeting-3.jpg" class="h-[500px] w-full" alt="Picture" rel="preload" />
        </div>
        <div
          class="flex h-[500px] basis-1/2 flex-col items-center justify-center gap-3 bg-white px-14"
        >
          <img src="/assets/planner_2.png" height="70" width="70" alt="" />
          <p class="text-lg font-bold">Sales & Marketing</p>
          <p class="text-center text-sm text-secondary-light">
            Sales support, email marketing, and content writing.
          </p>
          <BaseButton variant="filled" type="primary" class="mt-6">
            <template #text>read more</template>
          </BaseButton>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div
          class="flex h-[500px] basis-1/2 flex-col items-center justify-center gap-3 bg-white px-14"
        >
          <img src="/assets/planner_1.png" height="70" width="70" alt="" />
          <p class="text-lg font-bold">Softwere Development</p>
          <p class="text-center text-sm text-secondary-light">
            Front-end, back-end, and app development for iOS and Android.
          </p>
          <BaseButton variant="filled" type="primary" class="mt-6">
            <template #text>read more</template>
          </BaseButton>
        </div>
        <div class="basis-1/2">
          <img src="/assets/meeting-3.jpg" class="h-[500px] w-full" alt="Picture" rel="preload" />
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div class="basis-1/2">
          <img src="/assets/meeting-3.jpg" class="h-[500px] w-full" alt="Picture" rel="preload" />
        </div>
        <div
          class="flex h-[500px] basis-1/2 flex-col items-center justify-center gap-3 bg-white px-14"
        >
          <img src="/assets/planner_2.png" height="70" width="70" alt="" />
          <p class="text-lg font-bold">Web Development</p>
          <p class="text-center text-sm text-secondary-light">Custom web development solutions.</p>
          <BaseButton variant="filled" type="primary" class="mt-6">
            <template #text>read more</template>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
