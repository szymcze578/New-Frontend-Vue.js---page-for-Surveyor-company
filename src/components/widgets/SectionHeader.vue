<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    class="text-center mb-16"
  >
    <div class="inline-block px-4 py-2 rounded-full mb-4" :class="badgeClass">
      <span class="text-sm font-semibold" :class="badgeLabelClass">{{ badge }}</span>
    </div>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" :class="titleClass">
      {{ title }}
    </h2>
    <p class="text-lg max-w-3xl mx-auto" :class="descriptionClass">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  badge: string
  title: string
  description: string
  badgeClass?: string
  badgeLabelClass?: string
  titleClass?: string
  descriptionClass?: string
}

withDefaults(defineProps<Props>(), {
  badgeClass: 'bg-accent/10',
  badgeLabelClass: 'text-accent',
  titleClass: 'text-primary',
  descriptionClass: 'text-muted-foreground',
})
</script>