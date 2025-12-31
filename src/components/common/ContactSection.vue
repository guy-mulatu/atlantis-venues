<template>
  <div class="contact">
    <div class="contact__container">
      <h2 class="contact__heading">{{ heading }}</h2>
      <p v-if="description" class="contact__description">{{ description }}</p>
      
      <div class="contact__locations">
        <!-- Location 1 - Main Venue (Celebrations, Corporate, Spiritual) -->
        <div 
          v-if="showMainVenue"
          class="contact__card"
        >
          <div class="contact__card-header">
            <svg class="contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h3 class="contact__card-title">Espace Principal</h3>
          </div>
          <div class="contact__card-content">
            <p class="contact__card-label">Pour célébrations, événements corporatifs et spirituels</p>
            
            <div class="contact__info">
              <svg class="contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p class="contact__info-text">{{ mainAddress }}</p>
                <p class="contact__info-text">Kinshasa, République Démocratique du Congo</p>
              </div>
            </div>

            <div class="contact__info">
              <svg class="contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a :href="`tel:${mainPhone}`" class="contact__info-link">{{ mainPhone }}</a>
            </div>

            <div class="contact__info">
              <svg class="contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a :href="`mailto:${mainEmail}`" class="contact__info-link">{{ mainEmail }}</a>
            </div>
          </div>
        </div>

        <!-- Location 2 - Funeral Venue -->
        <div 
          v-if="showFuneralVenue"
          class="contact__card contact__card--funeral"
        >
          <div class="contact__card-header">
            <svg class="contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h3 class="contact__card-title">Espace Funéraire</h3>
          </div>
          <div class="contact__card-content">
            <p class="contact__card-label">Pour services funéraires et cérémonies de deuil</p>
            
            <div class="contact__info">
              <svg class="contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p class="contact__info-text">{{ funeralAddress }}</p>
                <p class="contact__info-text">Kinshasa, République Démocratique du Congo</p>
              </div>
            </div>

            <div class="contact__info">
              <svg class="contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a :href="`tel:${funeralPhone}`" class="contact__info-link">{{ funeralPhone }}</a>
            </div>

            <div class="contact__info">
              <svg class="contact__info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a :href="`mailto:${funeralEmail}`" class="contact__info-link">{{ funeralEmail }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  heading?: string
  description?: string
  showMainVenue?: boolean
  showFuneralVenue?: boolean
  mainAddress?: string
  mainPhone?: string
  mainEmail?: string
  funeralAddress?: string
  funeralPhone?: string
  funeralEmail?: string
}

withDefaults(defineProps<Props>(), {
  heading: 'Nous contacter',
  description: '',
  showMainVenue: true,
  showFuneralVenue: true,
  mainAddress: '68 Av.LOPORI Croisement Shaba Kasa-vubu',
  mainPhone: '+243 85 11 53 787',
  mainEmail: 'info@atlantisvenue.com',
  funeralAddress: '54 – 52 Blv. Lumumba Réf. Eglise Cité Bethel C/Limite',
  funeralPhone: '+243 83 65 32 416',
  funeralEmail: 'info@atlantisvenue.com'
})
</script>

<style scoped>
.contact {
  padding: 4rem 1.5rem;
  background-color: #f8f9fa;
}

.contact__container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact__heading {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.contact__description {
  text-align: center;
  font-size: 1.125rem;
  color: #666;
  margin: 0 0 3rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.contact__locations {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.contact__card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.contact__card--funeral {
  border-top: 4px solid #764ba2;
}

.contact__card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.contact__icon {
  width: 32px;
  height: 32px;
  color: #667eea;
}

.contact__card--funeral .contact__icon {
  color: #764ba2;
}

.contact__card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

.contact__card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__card-label {
  font-size: 0.95rem;
  color: #666;
  font-style: italic;
  margin: 0;
}

.contact__info {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact__info-icon {
  width: 20px;
  height: 20px;
  color: #667eea;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact__card--funeral .contact__info-icon {
  color: #764ba2;
}

.contact__info-text {
  margin: 0;
  color: #4a4a4a;
  line-height: 1.6;
}

.contact__info-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.contact__info-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

@media (min-width: 768px) {
  .contact {
    padding: 5rem 1.5rem;
  }

  .contact__heading {
    font-size: 2.5rem;
  }

  .contact__locations {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>