<template>
  <component
    :is="href ? 'a' : 'div'"
    v-bind="href ? { href } : {}"
    class="flex items-center text-white"
    :class="href ? 'hover:text-accent transition-colors group' : ''"
  >
    <div
      class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mr-4"
      :class="href ? 'group-hover:bg-accent/20 transition-colors' : ''"
    >
      <slot />
    </div>
    <div>
      <div class="text-sm text-gray-300">{{ label }}</div>
      <template v-if="Array.isArray(value)">
        <div v-for="(line, i) in value" :key="i" class="font-semibold">{{ line }}</div>
      </template>
      <div v-else class="font-semibold">{{ value }}</div>
    </div>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  href?: string
  label: string
  value: string | string[]
}>()
</script>
