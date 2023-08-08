<script setup lang="ts">
import { ref, onMounted } from 'vue'

type AppTheme = 'light' | 'dark'

const setAppTheme = (theme: AppTheme) => {
  localStorage.setItem('app-theme', theme)
  appTheme.value = theme
  document.documentElement.className = theme
}

const getAppTheme = (): AppTheme => localStorage.getItem('app-theme') as AppTheme

const changeTheme = (): void =>
  localStorage.getItem('app-theme') === 'light' ? setAppTheme('dark') : setAppTheme('light')

const getPreferredTheme = (): AppTheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const appTheme = ref(getAppTheme() || getPreferredTheme())
onMounted(() => setAppTheme(appTheme.value))
</script>

<template>
  <div>
    <template v-if="appTheme === 'dark'">
      <img
        v-if="appTheme === 'dark'"
        @click="changeTheme"
        alt="dark mode icon"
        src="./assets/icons-2.png"
    /></template>
    <template v-else>
      <img
        v-if="appTheme === 'light'"
        @click="changeTheme"
        alt="light mode icon"
        src="./assets/icons-1.png"
      />
    </template>
  </div>
</template>

<style>
@import './assets/main.css';
</style>