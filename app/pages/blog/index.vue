<template>
  <div class="pt-28 pb-20 bg-neutral-950 text-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">Blog & Resource Center</span>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">Conseils, Guides & Stratégies Digitales</h1>
        <p class="text-neutral-400 mt-4 text-base md:text-lg">Découvrez nos articles sur l'acquisition de leads, le référencement Google, l'automation CRM et le dev web moderne.</p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:border-red-600 transition-all group flex flex-col">
          <div class="h-48 bg-neutral-800 relative overflow-hidden">
            <img :src="post.cover" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">{{ post.category }}</span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="text-xs text-neutral-400 mb-2">{{ post.date }} • {{ post.readTime }} min de lecture</div>
              <h2 class="text-xl font-bold text-white group-hover:text-red-500 transition-colors leading-snug">{{ post.title }}</h2>
              <p class="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{{ post.excerpt }}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-red-500 text-xs font-bold">
              Lire l'article →
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog Marketing Digital & Web Engineering — WANDA Agency',
  description: 'Articles et guides pratiques sur la génération de leads, Meta Ads, Google Ads, SEO et développement web Nuxt.'
})

const posts = [
  {
    slug: 'comment-generer-des-leads-qualifies-au-maroc-2026',
    title: 'Comment générer des leads qualifiés au Maroc en 2026 ?',
    category: 'Génération de Leads',
    date: '24 Juillet 2026',
    readTime: '5',
    excerpt: 'Découvrez les meilleures stratégies Google Ads et Meta Ads adaptées au marché marocain pour maximiser vos conversions.',
    cover: 'https://redbox.ma/videos/Comp/image1.webp'
  },
  {
    slug: 'pourquoi-choisir-nuxt-4-pour-votre-site-agence',
    title: 'Pourquoi choisir Nuxt 4 & Vue 3 pour un site web ultra-rapide',
    category: 'Ingénierie Web',
    date: '18 Juillet 2026',
    readTime: '4',
    excerpt: 'Analyse des performances SEO et de la vitesse de chargement obtenues avec l\'architecture Nuxt 4 JAMstack.',
    cover: 'https://redbox.ma/videos/Comp/image2.webp'
  },
  {
    slug: 'automatiser-vos-relances-prospects-avec-whatsapp',
    title: 'Automatiser vos relances prospects grâce à l\'API WhatsApp Business',
    category: 'CRM & Automation',
    date: '10 Juillet 2026',
    readTime: '6',
    excerpt: 'Guide étape par étape pour intégrer un bot WhatsApp et réduire votre temps de réponse commercial à moins de 60 secondes.',
    cover: 'https://redbox.ma/videos/Comp/image3.webp'
  }
]
</script>
