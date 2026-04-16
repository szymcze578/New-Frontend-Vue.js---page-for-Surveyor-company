<template>
    <div class="stat-card group bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-accent/20">
        <div class="flex items-center justify-center size-16 bg-linear-to-br from-accent to-accent/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
            <component :is="getIcon(card.iconName)" class="size-7 text-white" />
        </div>
        <div class="text-4xl font-bold bg-linear-to-br from-primary         to-secondary bg-clip-text text-transparent mb-2">
            {{ card.value }}
        </div>
        <div class="text-base font-semibold text-foreground mb-1">
            {{ card.label }}</div>
        <div class="text-sm text-muted-foreground">
            {{ card.description }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useIconMap } from '@/composables/useIconMap';
import type { TrustStat } from '@/types/content';

defineProps<{
    card: TrustStat;
}>();

const { getIcon } = useIconMap()
</script>

<style scoped>
.stat-card {
  position: relative;
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-accent) 5%, transparent), color-mix(in srgb, var(--color-secondary) 5%, transparent));
  opacity: 0;
  transition: opacity 0.3s;
}

.stat-card:hover::before {
  opacity: 1;
}
</style>