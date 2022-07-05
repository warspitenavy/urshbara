<template>
  <div class="hello">
    <img src="/icon.png" alt="my icon." />
    <h1>こんにちは、漆原です。</h1>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
@import '@/global.scss';

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  padding-top: 2rem;
  padding-bottom: 1em;
  // gradient navy blue to light blue
  background: linear-gradient(to bottom, #0a192f, #2a4365);

  img {
    aspect-ratio: 1;
    width: 10rem;
  }

  h1 {
    font-size: 1.75rem;
    color: white;
  }

  @include bp('sm') {
    h1 {
      font-size: 2rem;
    }
  }
}
</style>
