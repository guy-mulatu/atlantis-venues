<template>
  <div class="expandable-card">
    <button 
      class="expandable-card__header"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <div class="expandable-card__title-section">
        <h3 class="expandable-card__title">{{ title }}</h3>
        <p v-if="subtitle" class="expandable-card__subtitle">{{ subtitle }}</p>
      </div>
      <span class="expandable-card__icon" :class="{ 'expandable-card__icon--open': isOpen }">
        ▼
      </span>
    </button>
    
    <div 
      class="expandable-card__content"
      :class="{ 'expandable-card__content--open': isOpen }"
    >
      <div class="expandable-card__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  subtitle?: string
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.expandable-card {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.expandable-card:hover {
  border-color: #667eea;
}

.expandable-card__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.3s;
}

.expandable-card__header:hover {
  background-color: #e9ecef;
}

.expandable-card__title-section {
  flex: 1;
}

.expandable-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

.expandable-card__subtitle {
  font-size: 1rem;
  margin: 0.25rem 0 0 0;
  color: #667eea;
  font-weight: 600;
}

.expandable-card__icon {
  font-size: 1.25rem;
  color: #667eea;
  transition: transform 0.3s ease;
  margin-left: 1rem;
}

.expandable-card__icon--open {
  transform: rotate(180deg);
}

.expandable-card__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.expandable-card__content--open {
  max-height: 1000px;
}

.expandable-card__inner {
  padding: 1.5rem;
  background-color: white;
}

@media (min-width: 768px) {
  .expandable-card__title {
    font-size: 1.75rem;
  }
}
</style>