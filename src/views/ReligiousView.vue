<template>
  <ServiceDetail
    title="Religieux"
    subtitle="Créer des espaces sacrés pour des rassemblements porteurs de sens"
    background-image="/images/background/religious-bg.png"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Honorez votre parcours spirituel</h2>
        <p class="text">
          Les cérémonies et rassemblements spirituels ont une profonde signification, marquant des transitions et des célébrations importantes dans nos vies. 
          Nous abordons chaque événement spirituel avec respect et sensibilité, en honorant la diversité des traditions et des croyances.
        </p>
        <p class="text">
          Les événements à caractère religieux que nous accueillons ont pour seul objectif de permettre aux personnes partageant une même foi de se rassembler et de celebrer ensemble. 
          Aucun rituel n'est autorisé. Merci de votre compréhension.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Nos Services Comprennent</h2>
        <ul class="list">
          <li class="list-item">Capacité de 300 personnes assises</li>
          <li class="list-item">Baptemes</li>
          <li class="list-item">Ceremonies de confirmation</li>
          <li class="list-item">Meditation ou retraites spirituelles</li>
          <li class="list-item">Seminaires religieux</li>
        </ul>
      </section>

      <ContactSection 
      :show-funeral-venue="false"
      heading="Réservez votre célébration"
      description="Contactez-nous par telephone, email ou vous pouvez vous presenter directement sur place"
      />

    </div>
  </ServiceDetail>
</template>

<script setup lang="ts">
import ServiceDetail from '@/components/features/ServiceDetail.vue';
import ContactSection from '@/components/common/ContactSection.vue';

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