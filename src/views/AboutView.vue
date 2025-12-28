<template>
  <div class="about">
    <section class="about__hero">
      <div class="about__hero-content">
        <h1 class="about__title">About Atlantis</h1>
        <p class="about__subtitle">Your trusted partner in creating memorable events</p>
      </div>
    </section>

    <section class="about__content">
      <div class="about__container">
        <div class="about__section">
          <h2 class="about__heading">Our Story</h2>
          <p class="about__text">
            Founded with a passion for creating meaningful experiences, Atlantis has been 
            serving our community for over a decade. We understand that every event is 
            unique and deserves personalized attention to detail.
          </p>
          <p class="about__text">
            Our team of experienced professionals is dedicated to making your vision a 
            reality, whether it's a celebration of life, a corporate gathering, or a 
            spiritual ceremony.
          </p>
        </div>

        <div class="about__section">
          <h2 class="about__heading">Our Mission</h2>
          <p class="about__text">
            To provide exceptional event planning services that honor the significance 
            of each occasion. We believe in the power of well-orchestrated events to 
            bring people together and create lasting memories.
          </p>
        </div>

        <div class="about__section">
          <h2 class="about__heading">Why Choose Us</h2>
          <ul class="about__list">
            <li class="about__list-item">Over 10 years of experience in event planning</li>
            <li class="about__list-item">Personalized service tailored to your needs</li>
            <li class="about__list-item">Professional and compassionate team</li>
            <li class="about__list-item">Attention to every detail</li>
            <li class="about__list-item">Comprehensive event management solutions</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
}

.about__hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 1.5rem 3rem;
  text-align: center;
}

.about__hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.about__title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
}

.about__subtitle {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
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