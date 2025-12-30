<template>
  <ServiceDetail
    title="Services Funeraires"
    subtitle="Honorer la vie avec compassion et dignité"
    background-image="/images/background/funerals-bg.png"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Un accompagnement funéraire empreint de compassion</h2>
        <p class="text">
          Perdre un être cher n’est jamais facile. 
          Notre équipe bienveillante est là pour vous accompagner à chaque étape de l’organisation d’une cérémonie funéraire empreinte de sens, 
          afin d’honorer sa mémoire et de célébrer sa vie.
        </p>
        <p class="text">
          Nous comprenons l’importance de créer une cérémonie digne et personnalisée, qui reflète la personnalité unique et les valeurs de votre proche.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Nos Services Funeraires Comprennent</h2>
        <ul class="list">
          <li class="list-item">Capacité de 200 personnes assises</li>
          <li class="list-item">Salle adaptée aux veillées mortuaires</li>
          <li class="list-item">Espace propre, sécurisé et aménagé</li>
          <li class="list-item">Chaises confortables et disposition harmonieuse</li>
          <li class="list-item">Possibilité d’installer autel, photo, fleurs et équipements d’hommage.</li>
          <li class="list-item">Location de corbillard avec chauffeur</li>

        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Laissez nous vous aider</h2>
        <p class="text">
          ​Nous nous engageons à vous accompagner avec humanité, discrétion et professionnalisme.
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