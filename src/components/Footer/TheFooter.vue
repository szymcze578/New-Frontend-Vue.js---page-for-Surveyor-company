<template>
  <footer
    class="h-[140px] flex flex-col justify-between bg-third text-white py-8 border-t-8 border-first lg:px-48 xl:px-96"
  >
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <h3 class="text-lg font-semibold">GEODIMETR</h3>
        <p>&copy; 2024 Usługi Geodezyjne GEODIMETR mgr inż. Mariusz Czech</p>
      </div>
      <div class="text-3xl">
        <a :href="companyLink" target="_blank" rel="noopener noreferrer">
          <span class="pi pi-facebook hover:text-second hover:cursor-pointer"></span>
        </a>
      </div>
    </div>

    <div class="flex justify-end mt-6 text-[12px] text-gray-500 hover:text-white">
      <a :href="authorLink" target="_blank" rel="noopener noreferrer">
      <div>Autor Szymon Czech</div></a>
    </div>
  </footer>
</template>

<script setup lang="ts">

const companyLink = "https://www.facebook.com/profile.php?id=100069162198575"
const authorLink = "https://www.facebook.com/szymon.czech.31"

</script>
