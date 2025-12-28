<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__section">
          <h3 class="footer__heading">Atlantis</h3>
          <p class="footer__text">Creating memorable moments for every occasion</p>
        </div>
        
        <div class="footer__section">
          <h4 class="footer__heading">Contact</h4>
          <p class="footer__text">Email: info@Atlantis.com</p>
          <p class="footer__text">Phone: (555) 123-4567</p>
        </div>
        
        <div class="footer__section">
          <h4 class="footer__heading">Services</h4>
          <router-link to="/funerals" class="footer__link">Funerals</router-link>
          <router-link to="/celebrations" class="footer__link">Celebrations</router-link>
          <router-link to="/corporate" class="footer__link">Corporate</router-link>
          <router-link to="/spiritual" class="footer__link">Spiritual</router-link>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p class="footer__copyright">&copy; 2024 Atlantis. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer__section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.footer__text {
  margin: 0;
  opacity: 0.8;
  line-height: 1.6;
}

.footer__link {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer__link:hover {
  opacity: 1;
  color: #4a9eff;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
}

.footer__copyright {
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
}

/* Tablet and above */
@media (min-width: 768px) {
  .footer__content {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
</style>