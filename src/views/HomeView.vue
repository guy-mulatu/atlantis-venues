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

    <section class="gallery-preview">
      <div class="gallery-preview__container">
        <h2>Découvrez nos espaces</h2>
        <p>Explorez notre galerie d'événements et de salles</p>
        <router-link to="/a-propos#gallery" class="gallery-preview__cta">
          Voir la galerie
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { serviceCategories } from '@/composables/useServices';
import ServiceCard from '@/components/features/ServiceCard.vue';
import { useHead } from '@unhead/vue';

const services = serviceCategories

useHead({
  title: 'Atlantis Venue - Salles de Fêtes à Kinshasa | Événements & Célébrations',
  meta: [
    {
      name: 'description',
      content: 'Atlantis Venue, votre partenaire pour tous vos événements à Kinshasa : mariages, célébrations, funérailles, événements corporatifs. Salles modernes et professionnelles en RDC.'
    },
    {
      property: 'og:title',
      content: 'Atlantis Venue - Salles de Fêtes à Kinshasa'
    },
    {
      property: 'og:description',
      content: 'Salles de fêtes professionnelles pour tous vos événements à Kinshasa, RDC.'
    }
  ]
})
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

/* Gallery Preview Section */
.gallery-preview {
  background: linear-gradient(135deg, #667eea 0%, #1800AD 100%);
  padding: 4rem 1.5rem;
  text-align: center;
  color: white;
}

.gallery-preview__container {
  max-width: 800px;
  margin: 0 auto;
}

.gallery-preview__heading {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.gallery-preview__description {
  font-size: 1.125rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
  line-height: 1.6;
}

.gallery-preview__cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.gallery-preview__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .gallery-preview {
    padding: 5rem 1.5rem;
  }
  
  .gallery-preview__heading {
    font-size: 2.5rem;
  }
  
  .gallery-preview__description {
    font-size: 1.25rem;
  }
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