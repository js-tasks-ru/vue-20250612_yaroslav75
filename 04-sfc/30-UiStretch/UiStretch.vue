<script setup>
</script>

<template>
  <div class="stretch-container">
    <slot />
  </div>
</template>

<style scoped>
:slotted(img),
:slotted(video),
:slotted(picture) {
  object-fit: scale-down;
}

.stretch-container > * {
  width: 100%;
  height: 100%;
}
</style>
