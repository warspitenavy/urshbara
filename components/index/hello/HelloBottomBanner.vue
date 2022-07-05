<template>
  <div class="hello-bottom-banner">
    <p>このサイトはNuxt3のお試しに作ったものです。</p>
  </div>
</template>

<style lang="scss">
@import '@/global.scss';

.hello-bottom-banner {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  padding: 1rem;

  background: black;

  p {
    color: white;
  }
}
</style>
