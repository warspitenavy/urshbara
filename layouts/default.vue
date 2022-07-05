<template>
  <div class="default">
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'biz-udpgothic'
  }
})
</script>

<style lang="scss" scoped></style>
