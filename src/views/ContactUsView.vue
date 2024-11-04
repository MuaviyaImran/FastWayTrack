<template>
  <section class="">
    <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
      <h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight">Contact Us</h2>
      <p class="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our
        Business plan? Let us know.
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label for="email" class="mb-2 block text-sm font-medium">Your email</label>
          <input
            type="email"
            id="email"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label for="subject" class="mb-2 block text-sm font-medium">Subject</label>
          <input
            type="text"
            id="subject"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="mb-2 block text-sm font-medium">Your message</label>
          <textarea
            id="message"
            rows="6"
            class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <BaseButton variant="filled" type="primary" class="mx-auto mt-1 w-fit lg:mx-0">
          <template #text>Send message</template>
        </BaseButton>
      </form>
    </div>
  </section>
</template>
