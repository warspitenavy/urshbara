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
  },
  title: '漆原のホームページ'
})
</script>

<style lang="scss" scoped></style>
