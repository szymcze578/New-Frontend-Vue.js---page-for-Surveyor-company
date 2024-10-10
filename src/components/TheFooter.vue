<template>
  <footer class="bg-gray-800 text-white py-8 border-t-8 border-orange-400 lg:px-48 xl:px-96">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <h3 class="text-lg font-semibold">GEODIMETR</h3>
        <p>&copy; 2024 Usługi Geodezyjne GEODIMETR mgr inż. Mariusz Czech</p>
      </div>

      <!-- Center Section: Navigation Links -->
      <div class="flex space-x-4 mb-4 md:mb-0">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Services</a>
        <a href="#" class="hover:underline">Contact</a>
      </div>

      <!-- Right Section: Social Media Icons -->
      <div class="flex space-x-4">
        <a href="#" aria-label="Facebook" class="hover:text-gray-400">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter" class="hover:text-gray-400">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="LinkedIn" class="hover:text-gray-400">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" aria-label="Instagram" class="hover:text-gray-400">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// You can add any logic or props if needed, for now it's a static footer
</script>
