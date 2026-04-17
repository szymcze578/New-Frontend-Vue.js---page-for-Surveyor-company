<template>
  <div class="bg-white rounded-3xl p-8 shadow-2xl">
    <h3 class="text-2xl font-bold text-primary mb-6">Formularz kontaktowy</h3>

    <div
      v-if="status === 'success'"
      class="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium"
    >
      Wiadomość została wysłana! Skontaktujemy się wkrótce.
    </div>
    <div
      v-if="status === 'error'"
      class="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm font-medium"
    >
      Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń do nas.
    </div>

    <form class="space-y-5" @submit.prevent="sendEmail">
      <div>
        <label for="name" class="block text-sm font-medium text-foreground mb-2">
          Imię i nazwisko <span class="text-accent">*</span>
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-foreground mb-2">
          Numer telefonu
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-foreground mb-2">
          Email <span class="text-accent">*</span>
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-foreground mb-2">
          Wiadomość <span class="text-accent">*</span>
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
          placeholder="Opisz swoje potrzeby..."
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full inline-flex items-center justify-center py-3 rounded-md text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span v-if="loading">Wysyłanie...</span>
        <template v-else>
          Wyślij zapytanie
          <ArrowRight class="ml-2 w-5 h-5" />
        </template>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import emailjs from 'emailjs-com'

const form = ref({ name: '', phone: '', email: '', message: '' })
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')

async function sendEmail() {
  loading.value = true
  status.value = 'idle'
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_phone: form.value.phone,
        from_email: form.value.email,
        message: form.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    status.value = 'success'
    form.value = { name: '', phone: '', email: '', message: '' }
  } catch {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>
