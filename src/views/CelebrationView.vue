<template>
  <ServiceDetail
    title="Célébrations"
    subtitle="Faire de votre événements un souvenir inoubliable"
    background-image="/images/background/celebration-bg.png"
  >
    <div class="content">
      <section class="section">
        <h2 class="heading">Célébrez les moments précieux de la vie</h2>
        <p class="text">
          Des anniversaires marquants aux anniversaires de mariage, des mariages aux remises de diplôme, 
          nous sommes spécialisés dans la création de célébrations qui reflètent votre style et votre vision uniques. 
          Chaque détail compte lorsqu’il s’agit de célébrer les moments les plus heureux de la vie.
        </p>
        <p class="text">
          Notre équipe créative donne vie à vos rêves grâce à une planification minutieuse, un design soigné et une organisation irréprochable.
        </p>
      </section>

      <section>
        <h2 class="heading">Nos Packs</h2>
        <p class="text packages-intro">
          Découvrez nos formules soigneusement élaborées pour s’adapter à tous les besoins et à tous les budgets.
        </p>
        <div class="packages">
            <ExpandableCard 
            title="Prestige" 
            subtitle=""
            :default-open="true"
          >
            <div class="package-content">
              <p class="package-description">
                L’expérience haut de gamme Atlantis
                Notre formule la plus complete, pensee pour offrir une ambiance unique, une decoration premium et une gestion totale de votre evenement.
              </p>
              <h4 class="package-subheading">Comprend:</h4>
              <ul class="package-list">
                <li>Tout le Pack Signature</li>
                <li>Chambre à disposition</li>
                <li>Protocole 10 personnes</li>
                <li>Espace photos </li>
                <li>Cabine 360° </li>
              </ul>
            </div>
          </ExpandableCard>
          <ExpandableCard 
            title="Signature" 
            subtitle=""
            :default-open="false"
          >
            <div class="package-content">
              <p class="package-description">
                Notre meilleur équilibre qualité/prix. 
                Une formule complète pour ceux qui veulent un évènement bien organise, harmonieux et esthétique, sans gérer les détails.
              </p>
              <h4 class="package-subheading">Comprend:</h4>
              <ul class="package-list">
                <li>Tout le Pack Essentiel</li>
                <li>Décoration standard (centre de tables, fleurs, arches, lumières)</li>
                <li>Serviettes tissus, Animation (fumigène, lumières pistes de danse)</li>
                <li>Chauffe plats</li>
              </ul>
            </div>
          </ExpandableCard>
          <ExpandableCard 
            title="Essentiel" 
            subtitle=""
            :default-open="false"
          >
            <div class="package-content">
              <p class="package-description">
                La solution simple et pratique.
                Ideal pour les évènements dont vous souhaitez gérer vous-même la majorité de l’organisation, 
                tout en bénéficiant d’un espace professionnel et propre.
              </p>
              <h4 class="package-subheading">Comprend:</h4>
              <ul class="package-list">
                <li>Mise à disposition de la salle </li>
                <li>Groupe électrogène</li>
                <li>Service Dj</li>
                <li>Nappes </li>
                <li>Service nettoyage</li>
                <li>Verres + Vaisselles</li>
                <li>Cuisine à disposition (sans matériel) </li>
                <li>Chaises et tables standards</li>
              </ul>
            </div>
          </ExpandableCard>
        </div>
      </section>

      <section class="section">
        <h2 class="heading">Services Celebratives</h2>
        <ul class="list">
          <li class="list-item">Capacité de 300 personnes assises</li>
          <li class="list-item">Fêtes de mariage</li>
          <li class="list-item">Fêtes d’anniversaire et célébrations de grandes étapes de vie</li>
          <li class="list-item">Célébrations de remise de diplôme</li>
          <li class="list-item">Baby showers et révélations de genre</li>
          <li class="list-item">Création de thèmes et conception décorative</li>
          <li class="list-item">Réservation d’animations et de divertissements</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="heading">Votre Vision, Notre Expertise</h2>
        <p class="text">
          Que vous organisiez une réunion intime ou une grande célébration, nous avons l’expérience et les ressources nécessaires pour donner vie à votre vision. 
          Créons ensemble quelque chose d’extraordinaire.
        </p>
      </section>
    </div>

    <!-- Social Media - Instagram + Facebook -->
    <SocialMedia
      :networks="['facebook', 'instagram']"
      heading="Découvrez nos célébrations"
      description="Suivez-nous sur Instagram et Facebook pour voir des photos inspirantes de nos événements et restez informés de nos actualités."
      facebook-url="https://facebook.com/atlantisvenue-celebrations"
      instagram-url="https://instagram.com/atlantisvenue"
    />

  </ServiceDetail>
</template>

<script setup lang="ts">
import ServiceDetail from '@/components/features/ServiceDetail.vue';
import ExpandableCard from '@/components/common/ExpandableCard.vue';
import SocialMedia from '@/components/common/SocialMedia.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Célébrations & Mariages à Kinshasa - Atlantis Venue | Fêtes Inoubliables',
  meta: [
    {
      name: 'description',
      content: 'Organisez vos célébrations à Kinshasa avec Atlantis Venue : mariages, anniversaires, fiançailles, baptêmes. Salles de fête modernes et packages personnalisés en RDC.'
    },
    {
      name: 'keywords',
      content: 'mariage Kinshasa, salle de fête Kinshasa, célébration RDC, anniversaire Congo, fête Kinshasa, réception mariage, salle de réception Kinshasa'
    }
  ]
});

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

.packages-intro {
  margin-bottom: 2rem;
}

.packages {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.package-content {
  color: #4a4a4a;
}

.package-description {
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  color: #666;
}

.package-subheading {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #1a1a1a;
}

.package-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.package-list li {
  font-size: 1rem;
  line-height: 1.8;
  padding: 0.5rem 0 0.5rem 1.75rem;
  position: relative;
  color: #4a4a4a;
}

.package-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
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