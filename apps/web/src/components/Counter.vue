<template>
  <button type="button" @click="count++">count is {{ count }}</button>
</template>

<script setup>
import {ref} from 'vue'
let count = ref(0)
const increment = () => count++
</script>
