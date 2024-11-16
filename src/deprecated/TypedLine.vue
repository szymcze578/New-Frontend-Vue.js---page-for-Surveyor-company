<template>
  <div class="inline-flex">
    <div :class="textColor"> {{ text_shown }}</div>
    <div v-if="show_blinker" class="bg-gray-900 px-[2px] ml-1 text-gray-900">!</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  start_triger: {
    type: Boolean,
    default: false
  },
    textColor:{
        type:String,
        default: 'text-white'
    }
})

const emit = defineEmits(["type_finished"])

const text_shown = ref("");
const min_type_delay = 22;
const max_type_delay = 37;
const blinking_duration = 800;
const show_blinker = ref(false);

startTypingText();

async function startTypingText() {
  let text = props.text;
  let text_to_shown = "";
    console.log("start_triger", props.start_triger)
    console.log("!start_triger", !props.start_triger)
  while(!props.start_triger){
    await new Promise(resolve => setTimeout(resolve,100))
  }

  startBlinker()
  typeText(text, text_to_shown);
}

function typeText(text: string, text_to_shown: string) {
  if (text.length > text_to_shown.length) {
    text_to_shown += text.charAt(text_to_shown.length);
    text_shown.value = text_to_shown;
    setTimeout(() => {
      typeText(text, text_to_shown);
    }, Math.floor(Math.random() * (max_type_delay - min_type_delay + 1)) + min_type_delay);
  }
}

function startBlinker(){
    show_blinker.value = !show_blinker.value
    if(props.text.length > text_shown.value.length){
        setTimeout(()=>{startBlinker()}, blinking_duration)
    }else{
        show_blinker.value = false
        emit('type_finished')
    }
}
</script>
