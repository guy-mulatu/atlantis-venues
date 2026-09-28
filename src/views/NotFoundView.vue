<!-- src/views/NotFoundView.vue -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

// Ask search engines not to index this page, since Netlify returns 200 for it
let robotsMeta: HTMLMetaElement | null = null

onMounted(() => {
  document.title = 'Page introuvable | Atlantis Venues'
  robotsMeta = document.createElement('meta')
  robotsMeta.name = 'robots'
  robotsMeta.content = 'noindex'
  document.head.appendChild(robotsMeta)
})

onBeforeUnmount(() => {
  robotsMeta?.remove()
})
</script>

<template>
  <section class="not-found">
    <h1>404</h1>
    <p>La page <code>{{ route.fullPath }}</code> n'existe pas.</p>
    <RouterLink :to="{ name: 'home' }">Retour à l'accueil</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}
</style>