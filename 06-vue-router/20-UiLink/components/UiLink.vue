<script setup lang="ts">

import type {RouteLocationRaw} from "vue-router";

const props = defineProps<{
  to?: RouteLocationRaw;
  href?: string;
  target?: string;
}>()

const link = props.href ? 'a' : 'RouterLink';
// Вместо <span> должен быть <RouterLink> или <a>
// Используйте динамический компонент <component :is="...">
</script>

<template>
  <component
    :is="link"
    :to="to"
    :href="href"
    :target="target"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
