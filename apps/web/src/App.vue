
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img :src="{typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <Header title="Web"/>
    <div class="card">
      <Counter/>
    </div>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Counter from './components/Counter.vue'
import typescriptLogo from "./assets/typescript.svg"
import {Header} from "../../../packages/ui/lib"
</script>
