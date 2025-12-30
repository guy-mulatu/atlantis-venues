<template>
  <ServiceDetail
    title="Spiritual Events"
    subtitle="Creating sacred spaces for meaningful gatherings"
    background-image="/images/background/religious-bg.png"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Honor Your Spiritual Journey</h2>
        <p class="text">
          Spiritual ceremonies and gatherings hold deep significance, marking important 
          transitions and celebrations in our lives. We approach each spiritual event 
          with reverence and sensitivity, honoring diverse traditions and beliefs.
        </p>
        <p class="text">
          Whether you're planning a religious ceremony, meditation retreat, or interfaith 
          gathering, we create spaces that foster connection, reflection, and spiritual growth.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Spiritual Event Services</h2>
        <ul class="list">
          <li class="list-item">Capacité de 300 personnes assises</li>
          <li class="list-item">Religious ceremonies and rituals</li>
          <li class="list-item">Baptisms and christenings</li>
          <li class="list-item">Bar/Bat Mitzvahs</li>
          <li class="list-item">Confirmation ceremonies</li>
          <li class="list-item">Meditation and yoga retreats</li>
          <li class="list-item">Interfaith gatherings</li>
          <li class="list-item">Prayer vigils and services</li>
          <li class="list-item">Spiritual workshops and seminars</li>
          <li class="list-item">Sacred space design and setup</li>
          <li class="list-item">Coordination with religious leaders</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Respectful & Mindful Planning</h2>
        <p class="text">
          We work closely with you and your spiritual advisors to ensure every element 
          of your ceremony aligns with your traditions and values. Our team respects the 
          sacred nature of these events and handles every detail with care and cultural 
          sensitivity.
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