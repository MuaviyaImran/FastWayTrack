<script lang="ts" setup>
import axios from 'axios'
import { computed, ref } from 'vue'

const message = ref('')
const formInfo = ref({
  name: '',
  subject: '',
  email: '',
  message: '',
})
const isLoading = ref(false)
const isAbleToSubmit = computed(() => {
  return (
    formInfo.value.name && formInfo.value.subject && formInfo.value.email && formInfo.value.message
  )
})
async function sendData() {
  isLoading.value = true
  const url = 'https://getform.io/f/arooylkb'
  axios
    .post(url, formInfo.value, { headers: { Accept: 'application/json' } })
    .then((response) => {
      if (response.status === 200) {
        formInfo.value = {
          name: '',
          subject: '',
          email: '',
          message: '',
        }
        message.value = 'Form submitted successfully!'
        setTimeout(() => {
          message.value = ''
        }, 3000)
      }
    })
    .catch((error) => console.error(error))
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <section class="">
    <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
      <h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight">Contact Us</h2>
      <p class="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
        Ready to take your business to the next level? Contact us today to learn more about how we
        can help.
      </p>
      <div>
        <label for="email" class="mb-2 mt-1 block text-sm font-medium">Your name</label>
        <input
          type="name"
          id="name"
          v-model="formInfo.name"
          class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label for="email" class="mb-2 mt-1 block text-sm font-medium">Your email</label>
        <input
          type="email"
          id="email"
          v-model="formInfo.email"
          class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label for="subject" class="mb-2 mt-1 block text-sm font-medium">Subject</label>
        <input
          type="text"
          id="subject"
          v-model="formInfo.subject"
          class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="mb-2 mt-1 block text-sm font-medium">Your message</label>
        <textarea
          id="message"
          rows="6"
          v-model="formInfo.message"
          class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <BaseButton
        @click="sendData"
        :disabled="!isAbleToSubmit"
        variant="filled"
        :loading="isLoading"
        type="primary"
        class="mx-auto mt-1 w-fit lg:mx-0"
      >
        <template #text>Send message</template>
      </BaseButton>
      <p v-if="message" class="mx-auto w-fit text-sm capitalize italic text-[#4BB543]">
        {{ message }}
      </p>
    </div>
  </section>
</template>
