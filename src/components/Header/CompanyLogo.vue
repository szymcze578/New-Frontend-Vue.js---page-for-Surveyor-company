<template>
    <div class="flex items-center">
        <div class="flex flex-col">
            <span
                class="text-xl font-bold tracking-tight transition-colors"
                :class="logoTextClass"
            >
                <span class="text-accent">GEO</span>DIMETR
            </span>
            <span
              class="text-xs transition-colors"
              :class="logoSubtitleClass">
                mgr inż. Mariusz Czech
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    logoTextClass: string;
    logoSubtitleClass:string;
}>();
</script>