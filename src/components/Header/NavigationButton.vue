<template>
    <button
        class="px-4 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer"
        :class="styleClass"
    >
        {{label}}
    </button>
</template>

<script setup lang="ts">
defineProps<{
    label: string;
    styleClass: string;
}>();
</script>