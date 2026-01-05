<template>
  <div class="about">
    <section class="about__hero">
      <div class="about__hero-background"></div>
      <div class="about__hero-overlay"></div>
      <div class="about__hero-content">
        <h1 class="about__title">AtlantisVenue</h1>
        <p class="about__subtitle">Votre partenaire de confiance pour créer des événements mémorables</p>
      </div>
    </section>

    <section class="about__content">
      <div class="about__container">
        <div class="about__section">
          <h2 class="about__heading">Qui sommes nous</h2>
          <p class="about__text">
            <span class="brand-name">ATLANTIS Venue</span>, c'est un ensemble de salles de fêtes situées au cœur de Kinshasa, 
            pensées pour accueillir vos moments importants avec confort, dignité et professionnalisme.
          </p>
          <p class="about__text">
            Notre équipe de professionnels expérimentés s'engage à donner vie à votre vision, qu'il s'agisse d'une célébration de la vie, 
            d'un événement d'entreprise ou d'une cérémonie spirituelle.
          </p>
        </div>

        <div class="about__section">
          <h2 class="about__heading">Notre mission</h2>
          <p class="about__text">
            Offrir des espaces adaptés à chaque type d'événement, qu'il s'agisse de célébrer, de rassembler, de se réunir… 
            ou d'accompagner les familles dans les moments plus sensibles.
          </p>
        </div>

        <div class="about__section">
          <h2 class="about__heading">Pourquoi nous</h2>
          <ul class="about__list">
            <li class="about__list-item">Plus de 10 ans d'expérience dans l'organisation d'événements</li>
            <li class="about__list-item">Un service personnalisé, adapté à vos besoins</li>
            <li class="about__list-item">Une équipe professionnelle et bienveillante</li>
            <li class="about__list-item">Une attention portée à chaque détail</li>
            <li class="about__list-item">Des solutions complètes de gestion d'événements</li>
          </ul>
        </div>

        <div class="about__section">
          <h2 class="about__heading">Notre équipe</h2>
          <p class="about__text">
            Chez Atlantis Venue, nous croyons que la réussite d’un évènement repose avant tout sur l’humain. 
            Nos équipes sont composées de professionnels disponibles, attentifs et engages, présents à chaque étape pour vous accompagner avec sérieux et bienveillance.
          </p>
          <p class="about__text">
            Des votre arrivée, vous êtes accueillis et orientes par notre équipe sur place, à l’écoute de vos attentes. Un agent d’accueil et de relation client vous accompagne dans la découverte de nos salles, 
            vous aide à définir votre projet et vous présente l’ensemble des services disponibles, afin de vous propose la solution la plus adaptée à votre évènement.
          </p>
        </div>

        <!-- Add Gallery Section -->
        <div class="about__section" id="gallery">
          <h2 class="about__heading">Notre galerie</h2>
          <p class="about__text">
            Découvrez nos espaces et quelques exemples de mise en place capturés lors d'événements précédents.
          </p>
          <ImageGallery :images="galleryImages" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ImageGallery from '@/components/features/ImageGallery.vue';
import { useHead } from '@unhead/vue';

const galleryImages = [
  { src: '/images/gallery/trone_1.jpg', alt: 'Trone de mariage' },
  { src: '/images/gallery/trone_2.jpg', alt: 'Célébration de mariage' },
  { src: '/images/gallery/trone_3.jpg', alt: 'Trone de mariage' },
  { src: '/images/gallery/trone_4.jpg', alt: 'Table hote d\'honneur' },
  { src: '/images/gallery/wedding_1.jpg', alt: 'Decoration de mariage' },
  { src: '/images/gallery/wedding_2.jpg', alt: 'Decoration de fete' },
  { src: '/images/gallery/funeral_1.jpg', alt: 'Decoration de funerailles' },
  { src: '/images/gallery/funeral_2.jpg', alt: 'Installation de funerailles' },
  { src: '/images/gallery/large_1.jpg', alt: 'Installation de mariage' },
  { src: '/images/gallery/funerals_setup1.JPG', alt: 'Mise en place veillée funéraire' },
  { src: '/images/gallery/table_maries_1.JPG', alt: 'Table d\'honneur' },
  { src: '/images/gallery/tapis_rouge.JPG', alt: 'Tapis rouge' },
];

useHead({
  title: 'À Propos - Atlantis Venue Kinshasa | Notre Histoire',
  meta: [
    {
      name: 'description',
      content: 'Découvrez Atlantis Venue, leader des salles de fêtes à Kinshasa depuis plus de 10 ans. Espaces adaptés pour célébrations, funérailles et événements corporatifs en RDC.'
    }
  ]
});
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.brand-name {
  font-weight: 600;
  color: #764ba2;
}

.about__hero {
  position: relative;
  color: white;
  padding: 4rem 1.5rem 3rem;
  text-align: center;
  overflow: hidden;
}

.about__hero-background {
  position: absolute;
  inset: 0;
  background-image: url('/images/gallery/table_maries_3.JPG');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.about__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(24, 0, 173, 0.8) 100%);
  z-index: 1;
}

.about__hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
}

.about__title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.about__subtitle {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.about__content {
  padding: 4rem 0;
}

.about__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.about__section {
  margin-bottom: 3rem;
}

.about__heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.about__text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin: 0 0 1rem 0;
}

.about__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.about__list-item {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a4a4a;
  padding: 0.5rem 0 0.5rem 2rem;
  position: relative;
}

.about__list-item::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
}

@media (min-width: 768px) {
  .about__title {
    font-size: 3rem;
  }
  
  .about__hero {
    padding: 5rem 1.5rem 4rem;
  }
}
</style>