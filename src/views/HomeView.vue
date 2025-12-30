<template>
  <div class="home">
    <section class="hero">
      <div class="hero__background"></div>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <h1 class="hero__title">Création de moments inoubliables</h1>
        <p class="hero__subtitle">
          Professionnels de la création d'événements
        </p>
        <router-link to="/a-propos" class="hero__cta">
          En Savoir Plus
        </router-link>
      </div>
    </section>

    <section class="services">
      <div class="services__container">
        <h2 class="services__heading">Nos Services</h2>
        <p class="services__description">
          Nous sommes spécialisés dans la création d'expériences porteuses de sens, adaptées à vos besoins.
        </p>
        
        <div class="services__grid">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { serviceCategories } from '@/composables/useServices'
import ServiceCard from '@/components/features/ServiceCard.vue'

const services = serviceCategories
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem 1.5rem;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  background-image: url('/images/gallery/large_1.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(24, 0, 173, 0.8) 100%);
  z-index: 1;
}

.hero__content {
  position: relative;
  max-width: 800px;
  z-index: 2;
}

.hero__title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero__subtitle {
  font-size: 1.125rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.hero__cta {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.hero__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.services {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.services__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.services__heading {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.services__description {
  text-align: center;
  font-size: 1.125rem;
  color: #666;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .hero__title {
    font-size: 3rem;
  }
  
  .hero__subtitle {
    font-size: 1.25rem;
  }
  
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .services__heading {
    font-size: 2.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    height: 70vh;
  }
  
  .hero__title {
    font-size: 3.5rem;
  }
}
</style>