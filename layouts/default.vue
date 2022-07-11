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
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'description',
      content: 'こんにちは、漆原です。'
    },
    {
      name: 'keywords',
      content: '漆原, urshbara'
    }
  ],
  title: '漆原のホームページ'
})
</script>

<style lang="scss" scoped></style>
