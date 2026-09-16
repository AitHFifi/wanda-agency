<template>
  <div>
    <Brand3DLoader />
    <HeroSection />
    <ClientLogoTicker />
    <AboutSection />
    <Portfolio3DCarousel />
    <WorkSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'WANDA Agency — Agence Marketing Digital & Ingénierie Web sur-mesure',
  description: 'WANDA conçoit des stratégies de croissance orientées résultats, des applications web Nuxt 4 ultra-rapides, et des automatisations CRM pour scaler votre activité.',
  ogTitle: 'WANDA Agency — Growth Marketing & Web Engineering',
  ogDescription: 'Génération de leads qualifiés, publicités Google & Meta Ads, CRM & automation, développement web moderne.',
  ogImage: 'https://redbox.ma/wp-content/uploads/2025/06/RedBox-websitr-Modell-scaled.png'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'WANDA Agency',
        url: 'https://wanda-agency.com',
        description: 'Agence de marketing digital et d\'ingénierie web spécialisée en génération de leads et automatisations CRM.',
        sameAs: [
          'https://www.linkedin.com/company/wanda-agency',
          'https://www.instagram.com/wanda.agency'
        ]
      })
    }
  ]
})
</script>
