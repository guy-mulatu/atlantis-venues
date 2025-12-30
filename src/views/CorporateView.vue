<template>
  <ServiceDetail
    title="Entreprises"
    subtitle="Gestion d'événements professionnels permettant les échanges et accords commerciaux"
    background-image="/images/background/corporate-bg.png"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Valorisez vos événements d’entreprise</h2>
        <p class="text">
          Dans le monde des affaires, chaque événement est une occasion de renforcer les relations, 
          de valoriser votre marque et d’atteindre vos objectifs organisationnels. 
          Organisez des reunions professionnels et soignés qui laissent une impression durable.
        </p>
        <p class="text">
          Des réunions de direction en petit comité aux conférences de grande envergure, 
          notre équipe veille à ce que chaque détail soit en parfaite adéquation avec vos objectifs et votre identité de marque.
        </p>
      </section>

      <section class="section">
        <h2 class="heading">Reunion d'Entreprises</h2>
        <ul class="list">
          <li class="list-item">Conferences & seminaires</li>
          <li class="list-item">Lancements et présentations de produits</li>
          <li class="list-item">Événements de team building (renforcement d’équipe)</li>
          <li class="list-item">Retraites et séjours d’entreprise</li>
          <li class="list-item">Assemblées annuelles et AG</li>
          <li class="list-item">Fêtes et célébrations d’entreprise</li>
          <li class="list-item">Événements de networking (réseautage professionnel)</li>
          <li class="list-item">Cérémonies de remise de prix</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Stratégie et planification</h2>
        <p class="text">
          Nous comprenons que les événements d’entreprise exigent précision, professionnalisme et réflexion stratégique. 
          Notre équipe gère chaque aspect de la logistique à l’intégration des technologies et à l’engagement des participants 
          afin que votre événement atteigne pleinement ses objectifs business.
        </p>
      </section>
    </div>
  </ServiceDetail>
</template>

<script setup lang="ts">
import ServiceDetail from '@/components/features/ServiceDetail.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Événements Corporatifs à Kinshasa - Atlantis Venue | Réunions & Conférences',
  meta: [
    {
      name: 'description',
      content: 'Salles pour événements corporatifs à Kinshasa : conférences, séminaires, formations, team building. Atlantis Venue, votre partenaire professionnel en RDC.'
    },
    {
      name: 'keywords',
      content: 'événements corporatifs Kinshasa, conférence Kinshasa, séminaire RDC, team building Congo, salle de réunion Kinshasa, formation entreprise'
    }
  ]
})
   
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