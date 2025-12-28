<template>
  <div class="service-detail">
    <section 
      class="service-detail__hero"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="service-detail__overlay"></div>
      <div class="service-detail__hero-content">
        <h1 class="service-detail__title">{{ title }}</h1>
        <p class="service-detail__subtitle">{{ subtitle }}</p>
      </div>
    </section>

    <section class="service-detail__content">
      <div class="service-detail__container">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  backgroundImage: string
}

defineProps<Props>()
</script>

<style scoped>
.service-detail {
  min-height: 100vh;
}

.service-detail__hero {
  position: relative;
  height: 50vh;
  min-height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem 1.5rem;
}

.service-detail__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.service-detail__hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.service-detail__title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.service-detail__subtitle {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.service-detail__content {
  padding: 4rem 0;
}

.service-detail__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 768px) {
  .service-detail__hero {
    height: 60vh;
  }
  
  .service-detail__title {
    font-size: 3.5rem;
  }
  
  .service-detail__subtitle {
    font-size: 1.5rem;
  }
}
</style>