<script setup lang="ts"></script>
<template>
  <div class="my-5 bg-[#f5f5f5] px-4 md:my-10 md:py-10 lg:my-14 lg:py-14">
    <div
      class="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row md:gap-8 lg:gap-14"
    >
      <img
        loading="lazy"
        src="/assets/meeting-3.jpg"
        class="h-[300px] w-[650px] md:h-[500px]"
        alt="Picture"
        rel="preload"
      />
      <div class="py-4 md:py-10 lg:py-14">
        <div class="flex flex-col gap-5 md:w-[35ch]">
          <p class="text-xs font-bold uppercase text-primary">Why Choose Us</p>
          <p class="text-xl font-extrabold md:text-2xl lg:text-4xl">
            Benefits of Choosing our Agency
          </p>
          <p class="text-center text-sm leading-6 text-secondary-light md:text-left">
            Choose Fast Way Track Ltd for your BPO needs and experience the benefits of tailored
            solutions, expert teams, cost-effective services, cutting-edge technology, scalability,
            exceptional customer service, and a proven track record. Our commitment to streamlining
            operations, reducing costs, and enhancing customer satisfaction makes us the ideal
            partner for businesses seeking to optimize their processes and achieve sustainable
            growth.
          </p>
        </div>
        <!-- <div class="mt-7 flex flex-col gap-1">
          <p class="text-xs font-medium">Locally Recommended</p>
          <BaseProgressbar :progress="80" />
        </div>
        <div class="mt-4 flex flex-col gap-1">
          <p class="text-xs font-medium">Projects Completed Successfully</p>
          <BaseProgressbar :progress="90" />
        </div> -->
      </div>
    </div>
  </div>
</template>
