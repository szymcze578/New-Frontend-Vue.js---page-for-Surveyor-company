<template>
  <div>
    <GMapMap
      class=""
      :center="{ lat: 50.484705003245814, lng: 19.436048856449627 }"
      :zoom="14"
      style="width: 100%; height: 492px"
    >
      <GMapMarker
        :position="{ lat: 50.484705003245814, lng: 19.436048856449627 }"
        :clickable="true"
      />
    </GMapMap>
  </div>
</template>

<script setup lang="ts">
</script>