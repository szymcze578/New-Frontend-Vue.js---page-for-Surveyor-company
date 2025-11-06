<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
    @click="$emit('close')"
  ></div>
  <div class="md:hidden text-black font-medium flex absolute h-[512px] w-[330px] bg-white top-0
   border-b-2 border-r-2 rounded-br-[8px] border-gray-300 z-50 border-t-8 border-t-second
   transform transition-transform duration-300 ease-in-out"
       @click.self="$emit('close')"
       :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
    <nav
      class="bg-white flex flex-col py-6 px-4 w-full"
    >
      <div v-for="_link in links" :key="_link.label" class="items-center text-center flex flex-col justify-center border-b border-gray-200">
        <RouterLink
          :to="_link?.path"
          class="px-5 py-3 flex justify-center text-center items-center w-full hover:bg-gray-100  hover:bg-opacity-15  transition-colors duration-300"
          @click="$emit('close')"
        >
          <div >
            <span>{{ _link?.label }}</span>
          </div>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink} from 'vue-router'

defineProps<{
  links: {label:string, path:string}[],
  isOpen: boolean,
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>
