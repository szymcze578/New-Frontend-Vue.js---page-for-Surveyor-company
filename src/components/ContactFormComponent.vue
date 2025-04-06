<template>
  <form @submit.prevent="sendEmail" class="mx-auto p-4 m-4 bg-white shadow rounded">
    <div class="mb-4">
      <label class="block mb-1">Imię i nazwisko</label>
      <input v-model="form.name" type="text" class="w-full border px-3 py-2 rounded" required />
    </div>
    <div class="mb-4">
      <label class="block mb-1">Email</label>
      <input v-model="form.email" type="email" class="w-full border px-3 py-2 rounded" required />
    </div>
    <div class="mb-4">
      <label class="block mb-1">Wiadomość</label>
      <textarea v-model="form.message" rows="5" class="w-full border px-3 py-2 rounded" required></textarea>
    </div>
    <button type="submit"
      class="px-4 py-2 bg-first w-[150px] text-white rounded-2xl hover:bg-second transition-colors duration-300">
      Wyślij
    </button>
    <p v-if="success" class="text-green-600 mt-2">Wiadomość została wysłana!</p>
    <p v-if="error" class="text-red-600 mt-2">Wystąpił błąd. Spróbuj ponownie.</p>
  </form>
</template>

<script setup lang="ts">
import emailjs from 'emailjs-com'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const success = ref(false)
const error = ref(false)

const sendEmail = () => {
  emailjs.send(
    'your_service_id',
    'your_template_id',
    {
      from_name: form.value.name,
      reply_to: form.value.email,
      message: form.value.message,
    },
    'your_public_key'
  ).then(() => {
    success.value = true
    error.value = false
    form.value = { name: '', email: '', message: '' }
  }).catch(() => {
    error.value = true
    success.value = false
  })
}
</script>