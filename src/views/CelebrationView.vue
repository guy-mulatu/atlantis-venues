<template>
  <ServiceDetail
    title="Celebrations"
    subtitle="Making your special moments unforgettable"
    background-image="/images/celebrations-bg.jpg"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Celebrate Life's Special Moments</h2>
        <p class="text">
          From milestone birthdays to anniversaries, weddings to graduations, we 
          specialize in creating celebrations that reflect your unique style and vision. 
          Every detail matters when commemorating life's most joyous occasions.
        </p>
        <p class="text">
          Our creative team brings your dreams to life with meticulous planning, stunning 
          design, and flawless execution.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Celebration Services</h2>
        <ul class="list">
          <li class="list-item">Wedding planning and coordination</li>
          <li class="list-item">Birthday parties and milestone celebrations</li>
          <li class="list-item">Anniversary events</li>
          <li class="list-item">Graduation celebrations</li>
          <li class="list-item">Engagement parties</li>
          <li class="list-item">Baby showers and gender reveals</li>
          <li class="list-item">Theme development and design</li>
          <li class="list-item">Vendor coordination and management</li>
          <li class="list-item">Catering arrangements</li>
          <li class="list-item">Entertainment booking</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Your Vision, Our Expertise</h2>
        <p class="text">
          Whether you're planning an intimate gathering or a grand celebration, we have 
          the experience and resources to bring your vision to life. Let's create 
          something extraordinary together.
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