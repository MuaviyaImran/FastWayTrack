<script setup lang="ts"></script>
<template>
  <div class="bg-[#f5f5f5] py-4 md:py-8 lg:py-14">
    <p class="text-center text-xs font-bold uppercase text-primary">What We Do</p>
    <div class="text-center text-3xl font-extrabold">
      <p>We're provide</p>
      <p>invest & business services</p>
    </div>
    <div class="mx-auto mt-7 flex max-w-6xl flex-col gap-5">
      <WhatWeDoCard
        title="Customer Services"
        desctiption="Inbound/outbound call centers, email support, chat support, and social media management."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_2.png"
        reverse
      />
      <WhatWeDoCard
        title="Sales & Marketing"
        desctiption="Sales support, email marketing, and content writing."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_1.png"
      />
      <WhatWeDoCard
        title="Software Development"
        desctiption="Front-end, back-end, and app development for iOS and Android."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_1.png"
        reverse
      />
      <WhatWeDoCard
        title="Web Development"
        desctiption="Custom web development solutions."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_2.png"
      />
    </div>
  </div>
</template>
