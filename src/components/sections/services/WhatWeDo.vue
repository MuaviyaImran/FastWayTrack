<script setup lang="ts"></script>
<template>
  <div class="bg-[#f5f5f5] py-4 md:py-8 lg:py-14">
    <p class="text-center text-xs font-bold uppercase text-primary">What We Do</p>
    <div class="text-center text-xl font-extrabold md:text-2xl lg:text-3xl">
      <p>We're provide</p>
      <p>invest & business services</p>
    </div>
    <div class="mx-auto mt-7 flex max-w-6xl flex-col gap-5">
      <WhatWeDoCard
        title="Customer Services"
        description="Inbound/outbound call centers, email support, chat support, and social media management."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_2.png"
        reverse
      />
      <WhatWeDoCard
        title="Sales & Marketing"
        description="Sales support, email marketing, and content writing."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_1.png"
      />
      <WhatWeDoCard
        title="Software Development"
        description="Front-end, back-end, and app development for iOS and Android."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_1.png"
        reverse
      />
      <WhatWeDoCard
        title="Web Development"
        description="Custom web development solutions."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_2.png"
      />
      <WhatWeDoCard
        title="Account Management and Bookkeeping "
        description="Transaction Recording, Financial Statements, Bank Reconciliation, Accounts Receivable & Payable Management, and General Ledger Maintenance ."
        image="/assets/meeting-3.jpg"
        plannerImage="/assets/planner_1.png"
        reverse
      />
    </div>
  </div>
</template>
