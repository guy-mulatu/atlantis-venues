<template>
  <ServiceDetail
    title="Corporate Events"
    subtitle="Professional event management for business success"
    background-image="/images/corporate-bg.jpg"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Elevate Your Corporate Events</h2>
        <p class="text">
          In the business world, every event is an opportunity to strengthen relationships, 
          showcase your brand, and achieve your organizational goals. We deliver 
          professional, polished corporate events that leave lasting impressions.
        </p>
        <p class="text">
          From intimate board meetings to large-scale conferences, our team ensures every 
          detail aligns with your corporate objectives and brand identity.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Corporate Event Services</h2>
        <ul class="list">
          <li class="list-item">Conferences and seminars</li>
          <li class="list-item">Product launches and unveilings</li>
          <li class="list-item">Team building events</li>
          <li class="list-item">Company retreats and offsites</li>
          <li class="list-item">Annual meetings and AGMs</li>
          <li class="list-item">Holiday parties and celebrations</li>
          <li class="list-item">Networking events</li>
          <li class="list-item">Trade shows and exhibitions</li>
          <li class="list-item">Award ceremonies</li>
          <li class="list-item">Virtual and hybrid event solutions</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Strategic Event Planning</h2>
        <p class="text">
          We understand that corporate events require precision, professionalism, and 
          strategic thinking. Our team manages every aspect—from venue selection and 
          logistics to technology integration and attendee engagement—ensuring your event 
          achieves its business objectives.
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