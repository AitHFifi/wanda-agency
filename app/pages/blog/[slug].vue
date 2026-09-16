<template>
  <div class="pt-28 pb-20 bg-neutral-950 text-white min-h-screen">
    <div class="max-w-[800px] mx-auto px-5 md:px-8">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-red-500 mb-8 transition-colors">
        ← Retour aux articles
      </NuxtLink>

      <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">{{ post.category }}</span>
      <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">{{ post.title }}</h1>
      <div class="text-xs text-neutral-400 mb-8 border-b border-neutral-800 pb-6">
        Publié le {{ post.date }} • {{ post.readTime }} min de lecture
      </div>

      <div class="rounded-2xl overflow-hidden mb-10 border border-neutral-800">
        <img :src="post.cover" :alt="post.title" class="w-full h-80 object-cover" />
      </div>

      <div class="prose prose-invert max-w-none text-neutral-300 space-y-6 text-base leading-relaxed">
        <p class="text-lg text-neutral-200 font-medium">{{ post.excerpt }}</p>
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. L'importance de la vitesse et de la pertinence</h2>
        <p>Sur le marché digital d'aujourd'hui, capter l'attention d'un prospect nécessite une expérience utilisateur sans friction et un message directement adapté à son besoin principal.</p>
        
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Alignement de la publicité et de la page d'atterrissage</h2>
        <p>Chaque campagne Meta Ads ou Google Ads doit renvoyer vers une page dédiée mettant en avant un appel à l'action clair et concis.</p>
      </div>

      <!-- CTA Box -->
      <div class="mt-16 p-8 rounded-2xl bg-neutral-900 border border-red-900/40 text-center">
        <h3 class="text-xl font-extrabold text-white">Besoin d'aide pour concrétiser cette stratégie ?</h3>
        <p class="text-neutral-400 text-xs mt-2">Discutez avec nos experts et obtenez un devis gratuit pour votre projet.</p>
        <NuxtLink to="/#devis" class="mt-6 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold rounded-xl transition-colors">
          Demander un Devis →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const post = computed(() => ({
  title: slug.value.replace(/-/g, ' ').toUpperCase(),
  category: 'Marketing Digital & Growth',
  date: '24 Juillet 2026',
  readTime: '5',
  excerpt: 'Découvrez comment maximiser le rendement de vos campagnes digitales grâce à un alignement parfait entre acquisition et rétention.',
  cover: 'https://redbox.ma/videos/Comp/image1.webp'
}))

useSeoMeta({
  title: `${post.value.title} — WANDA Blog`,
  description: post.value.excerpt
})
</script>
