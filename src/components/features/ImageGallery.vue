<template>
  <div class="gallery">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="gallery__item"
      @click="openLightbox(index)"
    >
      <img 
        :src="image.src" 
        :alt="image.alt"
        class="gallery__image"
        loading="lazy"
      >
      <div class="gallery__overlay">
        <span class="gallery__zoom-icon">🔍</span>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div 
        v-if="lightboxOpen" 
        class="lightbox"
        @click="closeLightbox"
      >
        <button 
          class="lightbox__close"
          @click="closeLightbox"
          aria-label="Close lightbox"
        >
          ✕
        </button>
        
        <img 
          :src="images[currentImageIndex].src" 
          :alt="images[currentImageIndex].alt"
          class="lightbox__image"
          @click.stop
        >
        
        <p class="lightbox__caption">
          {{ images[currentImageIndex].alt }}
        </p>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface GalleryImage {
  src: string
  alt: string
}

interface Props {
  images: GalleryImage[]
}

defineProps<Props>()

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery__item {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery__item:hover {
  transform: scale(1.02);
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery__item:hover .gallery__image {
  transform: scale(1.1);
}

.gallery__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery__item:hover .gallery__overlay {
  opacity: 1;
}

.gallery__zoom-icon {
  font-size: 2rem;
  color: white;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
  z-index: 1001;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox__image {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
  z-index: 1001;
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox__nav--prev {
  left: 1rem;
}

.lightbox__nav--next {
  right: 1rem;
}

.lightbox__caption {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  max-width: 80%;
  text-align: center;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>