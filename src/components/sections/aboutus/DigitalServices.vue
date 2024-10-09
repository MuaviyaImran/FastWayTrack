<script lang="ts" setup></script>
<template>
  <div class="bg-[#f5f5f5] py-14">
    <div class="mx-auto flex max-w-7xl gap-5">
      <div class="flex basis-1/2 flex-col gap-4">
        <p class="text-primary">We provide digital services</p>
        <p class="w-[15ch] text-2xl font-extrabold">Services we're providing</p>
        <img src="/assets/services-hero.jpg" alt="" />
      </div>
      <div class="flex basis-1/2 flex-col gap-4">
        <img src="/assets/meeting-2.jpg" alt="" class="max-h-[280px]" />
        <div class="flex flex-col gap-3 text-sm text-secondary-light">
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
        <BaseButton variant="filled" type="primary" class="mt-1 w-fit">
          <template #text>discover more</template>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
