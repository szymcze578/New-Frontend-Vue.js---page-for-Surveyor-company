<template>
    <div
      class="absolute inset-0 opacity-[0.03]"
      :style="`background-image: linear-gradient(#F78C6A 1px, transparent 1px), linear-gradient(90deg, #F78C6A 1px, transparent 1px); background-size: ${gridWidth}px ${gridHeight}px;`"
    />
</template>
<script setup lang="ts">

defineProps<{
    gridWidth: number;
    gridHeight:number;
}>();
</script>