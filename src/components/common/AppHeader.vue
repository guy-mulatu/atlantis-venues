<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img 
          src="/images/logo/logo.png" 
          alt="AtlantisVenue Logo" 
          class="header__logo-image"
        >
        <h1 class="header__logo-text">
          <!-- <span class="header__logo-text--bold">Atlantis</span><span class="header__logo-text--italic">Venue</span> -->
        </h1>
      </router-link>
      
      <button 
        class="header__mobile-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="header__hamburger"></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="header__nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavLink {
  path: string
  label: string
}

const navLinks: NavLink[] = [
  { path: '/', label: 'Acceuil' },
  { path: '/a-propos', label: 'A propos de nous' },
  { path: '/funerailles', label: 'Funerailles' },
  { path: '/celebrations', label: 'Celebrations' },
  { path: '/entreprises', label: 'Entreprises' },
  { path: '/religieux', label: 'Religieux' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  display: flex;
  text-decoration: none;
  color: white;
  align-items: center;
  gap: 0.75rem;  /* Space between logo and text */
}

.header__logo-image {
  height: 52px;  /* Mobile */
  width: auto;
}


.header__logo-text {
  font-size: 1.5rem;
  font-weight: 400; /* Base weight */
  display: flex;
  align-items: baseline;
  gap: 0.25rem; /* Small space between words */
}

.header__logo-text--bold {
  font-weight: 700;
}

.header__logo-text--italic {
  font-style: italic;
  font-weight: 400;
}

.header__mobile-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.header__hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: background-color 0.3s;
}

.header__hamburger::before,
.header__hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: white;
  transition: transform 0.3s;
}

.header__hamburger::before {
  top: -8px;
}

.header__hamburger::after {
  top: 8px;
}

.header__nav {
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.header__nav--open {
  transform: translateX(0);
}

.header__nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.2s;
}

.header__nav-link:hover,
.header__nav-link.router-link-active {
  color: #4a9eff;
}

/* Tablet and above */
@media (min-width: 768px) {
  .header__mobile-toggle {
    display: none;
  }

  .header__nav {
    position: static;
    flex-direction: row;
    gap: 2rem;
    padding: 0;
    transform: translateX(0);
    background-color: transparent;
  }

  .header__nav-link {
    padding: 0;
    border-bottom: none;
  }
}
</style>