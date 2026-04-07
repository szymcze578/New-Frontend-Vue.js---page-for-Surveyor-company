<template>
  <section id="contact" class="py-24 bg-linear-to-br from-primary via-[#0a4f65] to-secondary relative overflow-hidden">

    <!-- Background pattern -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(#F78C6A 1px, transparent 1px), linear-gradient(90deg, #F78C6A 1px, transparent 1px); background-size: 60px 60px;"
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Left Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="text-white"
        >
          <div class="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
            <span class="text-sm font-semibold text-accent">Kontakt</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Rozpocznij współpracę
            <span class="block text-accent mt-2">już dziś</span>
          </h2>
          <p class="text-lg text-gray-200 mb-8 leading-relaxed">
            Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Doradzimy najlepsze rozwiązania dla Twojego projektu.
          </p>

          <!-- Contact details -->
          <div class="space-y-4 mb-8">
            <a
              href="tel:+48123456789"
              class="flex items-center text-white hover:text-accent transition-colors group"
            >
              <div class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <div class="text-sm text-gray-300">Telefon</div>
                <div class="font-semibold">+48 602 319 486</div>
              </div>
            </a>

            <a
              href="mailto:kontakt@geodimetr.pl"
              class="flex items-center text-white hover:text-accent transition-colors group"
            >
              <div class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <div class="text-sm text-gray-300">Email</div>
                <div class="font-semibold">geodimetr@op.pl</div>
              </div>
            </a>

            <div class="flex items-center text-white">
              <div class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <div class="text-sm text-gray-300">Adres</div>
                <div class="font-semibold">ul. Sienkiewicza 36</div>
                <div class="font-semibold">Zawiercie, woj. śląskie</div>
              </div>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+48123456789"
              class="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Zadzwoń teraz
              <ArrowRight class="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:geodimetr@op.pl"
              class="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-base font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Wyślij email
            </a>
          </div>
        </div>

        <!-- Right Content - Contact Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="bg-white rounded-3xl p-8 shadow-2xl"
        >
          <h3 class="text-2xl font-bold text-primary mb-6">Formularz kontaktowy</h3>
          <div class="space-y-5">

            <div>
              <label for="name" class="block text-sm font-medium text-foreground mb-2">
                Imię i nazwisko
              </label>
              <input
                id="name"
                type="text"
                class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-foreground mb-2">
                Numer telefonu
              </label>
              <input
                id="phone"
                type="tel"
                class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-foreground mb-2">
                Wiadomość
              </label>
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                placeholder="Opisz swoje potrzeby..."
              />
            </div>

            <button
              type="submit"
              class="w-full inline-flex items-center justify-center py-3 rounded-md text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Wyślij zapytanie
              <ArrowRight class="ml-2 w-5 h-5" />
            </button>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-vue-next'
</script>