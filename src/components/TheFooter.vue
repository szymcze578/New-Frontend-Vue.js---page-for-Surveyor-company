<template>
  <footer class="bg-primary text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        <!-- Company Info -->
        <div>
          <div class="flex flex-col mb-6">
            <span class="text-2xl font-bold tracking-tight">
              <span class="text-accent">GEO</span>DIMETR
            </span>
            <span class="text-sm text-gray-400">mgr inż. Mariusz Czech</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-6">
            Profesjonalne usługi geodezyjne z pasją i precyzją. Obsługujemy klientów indywidualnych, deweloperów i firmy budowlane.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
               rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <component :is="social.icon" class="size-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6">Szybkie linki</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.id">
              <button
                class="text-gray-300 hover:text-accent transition-colors text-sm"
                @click="scrollToSection(link.id)"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6">Usługi</h3>
          <ul class="space-y-3">
            <li
              v-for="service in services"
              :key="service"
              class="text-gray-300 text-sm"
            >
              {{ service }}
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6">Kontakt</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <MapPin class="size-5  text-accent mr-3 shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>ul. Sienkiewicza 36</div>
                  <div>Zawiercie, woj. śląskie</div>
                </div>
            </li>
            <li class="flex items-start">
              <Phone class="size-5 text-accent mr-3 shrink-0 mt-0.5" />
              <a
                href="tel:+48602319486"
                class="text-gray-300 text-sm hover:text-accent transition-colors"
              >
                +48 602 319 486
              </a>
            </li>
            <li class="flex items-start">
              <Mail class="size-5 text-accent mr-3 shrink-0 mt-0.5" />
              <a
                href="mailto:geodimetr@op.pl"
                class="text-gray-300 text-sm hover:text-accent transition-colors"
              >
                geodimetr@op.pl
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            © 2026 Geodimetr. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-vue-next';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const quickLinks = [
  { id: 'home', label: 'Start' },
  { id: 'services', label: 'Usługi' },
  { id: 'projects', label: 'Realizacje' },
  { id: 'testimonials', label: 'Opinie' },
  { id: 'faq', label: 'FAQ' },
];

const services = [
  'Mapy do celów projektowych',
  'Podziały nieruchomości',
  'Wznowienie granic',
  'Wytyczenie obiektów',
];

const socials = [
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100069162198575' }
];
</script>