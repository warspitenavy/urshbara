<script lang="ts" setup>
const intro = [
  {
    command: 'i-like -m',
    cards: [
      {
        title: '乗り物',
        description: 'なんでも'
      },
      {
        title: 'お茶',
        description: '紅茶とかさんぴん茶'
      }
    ]
  },
  {
    command: 'games',
    cards: [
      {
        title: 'ミリシタ',
        description: '2020/09より開始',
        image: '/imasml-theater-meishi.webp'
      },
      {
        title: 'Minecraft',
        description: '2011年くらいから',
        image: '/minecraft-ss.webp'
      }
    ]
  },
  {
    command: 'i-like --tech',
    cards: [
      {
        title: 'Kotlin',
        description: '感情がでかくなりつつある'
      },
      {
        title: 'Vue',
        description: 'Reactより好き'
      },
      {
        title: 'Kubernetes',
        description: 'レジストリ作ったりデプロイするくらい'
      }
    ]
  },
  {
    command: 'contact',
    cards: [
      {
        title: 'Twitter',
        description: '@urshbara',
        link: 'https://twitter.com/urshbara'
      },
      {
        title: 'Github',
        description: '@warspitenavy',
        link: 'https://github.com/warspitenavy'
      }
    ]
  }
]
</script>

<template>
  <div class="intro">
    <IndexIntroSection
      v-for="(e, index) in intro"
      :command="e.command"
      :key="index"
      :cards="e.cards"
    />
  </div>
</template>

<style lang="scss">
@import '@/global.scss';

.intro {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  margin: auto;

  padding: 1rem;

  max-width: 40rem;
  transition: all 0.3s;
  @include bp('md') {
    max-width: 56rem;
  }
}
</style>
