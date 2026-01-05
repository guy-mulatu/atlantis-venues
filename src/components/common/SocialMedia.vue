<template>
  <div class="social">
    <div 
      v-if="backgroundImage" 
      class="social__background"
      :style="{ backgroundImage: `url(${backgroundImage})`}"
      >
    </div>
    <div class="social__overlay"></div>
    <div class="social__container">
      <h3 class="social__heading">{{ heading }}</h3>
      <p class="social__description">
        {{ description }}
      </p>
      
      <div class="social__links">
        <a 
          v-if="networks.includes('facebook')"
          :href="facebookUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="social__link social__link--facebook"
          aria-label="Suivez-nous sur Facebook"
        >
          <svg class="social__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>

        <a 
          v-if="networks.includes('instagram')"
          :href="instagramUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="social__link social__link--instagram"
          aria-label="Suivez-nous sur Instagram"
        >
          <svg class="social__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Instagram</span>
        </a>

        <a 
          v-if="networks.includes('youtube')"
          :href="youtubeUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="social__link social__link--youtube"
          aria-label="Abonnez-vous sur YouTube"
        >
          <svg class="social__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>YouTube</span>
        </a>

        <a 
          v-if="networks.includes('tiktok')"
          :href="tiktokUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="social__link social__link--tiktok"
          aria-label="Suivez-nous sur TikTok"
        >
          <svg class="social__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
          <span>TikTok</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  networks: ('facebook' | 'instagram' | 'youtube' | 'tiktok')[]
  heading?: string
  description?: string
  backgroundImage?: string
  facebookUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  tiktokUrl?: string
}

withDefaults(defineProps<Props>(), {
  heading: 'Restez connectés avec nous',
  description: 'Suivez-nous sur nos réseaux sociaux pour découvrir nos actualités, événements à venir et moments mémorables partagés par nos clients.',
  backgroundImage: '',
  facebookUrl: 'https://facebook.com/atlantisvenue',
  instagramUrl: 'https://instagram.com/atlantisvenue',
  youtubeUrl: 'https://youtube.com/@atlantisvenue',
  tiktokUrl: 'https://tiktok.com/@atlantisvenue'
})
</script>

<style scoped>
.social {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #1800AD 100%);
  padding: 3rem 1.5rem;
  margin-top: 4rem;
  overflow: hidden;
}

.social__background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.social__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(24, 0, 173, 0.9) 100%);
  z-index: 1;
}

.social__container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
}

.social__heading {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.social__description {
  font-size: 1.125rem;
  color: white;
  opacity: 0.95;
  line-height: 1.7;
  margin: 0 0 2.5rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.social__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background-color: white;
  color: #1a1a1a;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.social__link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.social__icon {
  width: 24px;
  height: 24px;
}

/* Brand Colors */
.social__link--facebook:hover {
  background-color: #1877f2;
  color: white;
}

.social__link--instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}

.social__link--youtube:hover {
  background-color: #ff0000;
  color: white;
}

.social__link--tiktok:hover {
  background-color: #000000;
  color: white;
}

@media (min-width: 768px) {
  .social {
    padding: 4rem 1.5rem;
  }

  .social__heading {
    font-size: 2.5rem;
  }

  .social__description {
    font-size: 1.25rem;
  }
}
</style>