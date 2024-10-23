<script setup lang="ts"></script>
<template>
  <div class="my-14 bg-[#f5f5f5] py-14">
    <p class="text-center text-xs font-bold uppercase text-primary">What We Do</p>
    <div class="text-center text-3xl font-extrabold">
      <p>We're provide</p>
      <p>invest & business services</p>
    </div>
    <div class="mx-auto mt-7 flex max-w-6xl flex-col md:gap-3 lg:gap-5">
      <WhatWeDoCard
        title="Sales & Marketing"
        desctiption="Sales support, email marketing, and content writing."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_1.png"
      />
      <WhatWeDoCard
        title="Customer Services"
        desctiption="Inbound/outbound call centers, email support, chat support, and social media management."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_2.png"
        reverse
      />
    </div>
  </div>
</template>
