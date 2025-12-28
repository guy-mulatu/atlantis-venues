<template>
  <article class="service-card" @click="handleClick">
    <div 
      class="service-card__background"
      :style="{ backgroundImage: `url(${service.backgroundImage})` }"
    >
      <div class="service-card__overlay"></div>
    </div>
    <div class="service-card__content">
      <h3 class="service-card__title">{{ service.title }}</h3>
      <p class="service-card__description">{{ service.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { ServiceCategory } from '@/types/service'

interface Props {
  service: ServiceCategory
}

const props = defineProps<Props>()
const router = useRouter()

const handleClick = () => {
  router.push(props.service.route)
}
</script>

<style scoped>
.service-card {
  position: relative;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.service-card__background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.service-card:hover .service-card__background {
  transform: scale(1.05);
}

.service-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.service-card__content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
  z-index: 1;
}

.service-card__title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.service-card__description {
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.95;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Tablet and above */
@media (min-width: 768px) {
  .service-card {
    height: 320px;
  }
  
  .service-card__title {
    font-size: 2rem;
  }
  
  .service-card__description {
    font-size: 1rem;
  }
}
</style>