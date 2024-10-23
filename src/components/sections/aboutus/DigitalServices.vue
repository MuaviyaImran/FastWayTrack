<script lang="ts" setup></script>
<template>
  <div class="mt-4 bg-[#f5f5f5] p-2 py-4 md:mt-0 md:py-8 lg:py-14">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
      <div class="flex basis-1/2 flex-col gap-2 px-4 md:gap-4 md:px-0">
        <p class="text-primary">We provide digital services</p>
        <p class="text-2xl font-extrabold md:w-[15ch]">Services we're providing</p>
        <img
          loading="lazy"
          src="/assets/services-hero.jpg"
          alt="Services hero image"
          class="hidden md:flex"
        />
      </div>
      <div class="flex basis-1/2 flex-col gap-4">
        <img loading="lazy" src="/assets/meeting-2.jpg" alt="Meeting Image" class="max-h-[280px]" />
        <div class="flex flex-col gap-3 px-4 text-sm text-secondary-light md:px-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit quidem explicabo
            ipsum dolorem quia tempore inventore vero voluptas sint. Facere aliquid veritatis dicta!
            Ullam eveniet dignissimos doloribus reiciendis corrupti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit quidem explicabo
            ipsum dolorem quia tempore inventore vero voluptas sint.
          </p>
        </div>
        <BaseButton variant="filled" type="primary" class="mx-auto mt-1 w-fit md:mx-0">
          <template #text>discover more</template>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
