<template>
  <ServiceDetail
    title="Funeral Services"
    subtitle="Honoring lives with dignity and compassion"
    background-image="/images/funerals-bg.jpg"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Compassionate Funeral Planning</h2>
        <p class="text">
          Losing a loved one is never easy. Our compassionate team is here to guide you 
          through every step of planning a meaningful funeral service that honors their 
          memory and celebrates their life.
        </p>
        <p class="text">
          We understand the importance of creating a dignified and personalized ceremony 
          that reflects the unique personality and values of your loved one.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Our Funeral Services Include</h2>
        <ul class="list">
          <li class="list-item">Traditional funeral ceremonies</li>
          <li class="list-item">Memorial services</li>
          <li class="list-item">Celebration of life events</li>
          <li class="list-item">Graveside services</li>
          <li class="list-item">Coordination with funeral homes and clergy</li>
          <li class="list-item">Venue selection and setup</li>
          <li class="list-item">Audio-visual arrangements</li>
          <li class="list-item">Reception planning</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Let Us Help You</h2>
        <p class="text">
          Our experienced team will work closely with you to ensure every detail is 
          handled with care and respect. Contact us to discuss how we can support you 
          during this difficult time.
        </p>
      </section>
    </div>
  </ServiceDetail>
</template>

<script setup lang="ts">
import ServiceDetail from '@/components/features/ServiceDetail.vue'
</script>

<style scoped>
.content {
  color: #4a4a4a;
}

.section {
  margin-bottom: 3rem;
}

.heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0 0 1rem 0;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  font-size: 1.125rem;
  line-height: 1.8;
  padding: 0.5rem 0 0.5rem 2rem;
  position: relative;
}

.list-item::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  color: #667eea;
  font-weight: 700;
  font-size: 1.5rem;
}
</style>