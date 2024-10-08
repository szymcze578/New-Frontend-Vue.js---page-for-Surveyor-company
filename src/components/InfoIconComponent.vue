<template>
<div class="flex">
    <div class="w-fit mr-3">
        <span :class="icon"></span>
    </div>
    <div class="w-full">
        <span v-for="(data, index) in data" :key="index" class="block">{{ data }}</span>
    </div>
</div>
</template>

<script setup lang="ts">

defineProps<{
    icon: string,
    data: string[]
}>()


</script>