<script setup lang="ts">
</script>

<template>
  <div class="app-container">
    <nav class="flex justify-center gap-6 py-6">
      <router-link to="/" class="text-black text-lg font-bold hover:underline">首页</router-link>
      <router-link to="/diy" class="text-black text-lg font-bold hover:underline">DIY卡片</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
}
</style>
