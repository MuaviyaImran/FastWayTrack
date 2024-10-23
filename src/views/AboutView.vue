<script lang="ts" setup>
import BaseCard from '@/components/common/BaseCard.vue'
import {
  WelcomeAboutus,
  DigitalServices,
  MeetOurTeam,
  OurArticles,
} from '@/components/sections/aboutus'
</script>
<template>
  <WelcomeAboutus />
  <div class="mx-auto flex max-w-7xl flex-col gap-4 lg:my-14 lg:flex-row">
    <BaseCard
      image="/assets/meeting-1.jpg"
      title="Digital Marketing"
      description="Add filters, effects, adjustments, or customize with frames, text, or stickers. Edit photos effortlessly. Show some love to Thirdman by giving them a small donation."
      onclick="console.log('clicked')"
      showButton
      textCentered
    />
    <BaseCard
      image="/assets/meeting-2.jpg"
      title="Digital Marketing"
      description="Add filters, effects, adjustments, or customize with frames, text, or stickers. Edit photos effortlessly. Show some love to Thirdman by giving them a small donation."
      onclick="console.log('clicked')"
      showButton
      textCentered
    />
    <BaseCard
      image="/assets/meeting-1.jpg"
      title="Digital Marketing"
      description="Add filters, effects, adjustments, or customize with frames, text, or stickers. Edit photos effortlessly. Show some love to Thirdman by giving them a small donation."
      onclick="console.log('clicked')"
      showButton
      textCentered
    />
  </div>
  <DigitalServices />
  <MeetOurTeam />
  <OurArticles />
</template>
