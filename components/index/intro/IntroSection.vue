<script lang="ts" setup>
interface Card {
  title: string
  description?: string
  image?: string
  link?: string
}
interface Props {
  command: string
  cards: Card[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="intro-section">
    <h2 class="intro-card-command lato">
      root# {{ props.command }}<span>_</span>
    </h2>
    <template v-for="c in cards">
      <div v-if="!c.link" class="intro-card">
        <h3>{{ c.title }}</h3>
        <a v-if="c.image" :href="c.image" target="_blank">
          <img v-if="c.image" :src="c.image" :alt="`${c.title}のイメージ`" />
        </a>
        <p v-if="c.description">{{ c.description }}</p>
      </div>
      <a
        v-if="c.link"
        class="intro-card link-card"
        :href="c.link"
        target="_blank"
      >
        <h3>{{ c.title }}</h3>
        <p v-if="c.description">{{ c.description }}</p>
      </a>
    </template>
  </div>
</template>

<style lang="scss">
.intro-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

.intro-card-command {
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  flex-basis: 100%;

  span {
    animation: blink 1s infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    // 49% {
    //   opacity: 0;
    // }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      // opacity: 1;
    }
  }
}

.intro-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  // width: 100%;
  flex-basis: 100%;
  padding: 1rem;
  // border: 1px solid #ccc;
  box-shadow: 0 0 0 1px #ccc;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  background: #fff;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.link-card {
  // hover transition
  transition: all 0.1s;
  &:hover {
    background: #eee;
  }
}
</style>
