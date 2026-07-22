<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 w-full h-screen bg-primary/20 backdrop-blur-sm z-[1000] flex justify-end" @click.self="$emit('close')" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <!-- Drawer Panel -->
      <div class="w-full max-w-lg h-full bg-bg shadow-2xl flex flex-col justify-between p-8 md:p-12 relative z-10 transition-transform duration-500 transform overflow-y-auto">
        
        <!-- Header -->
        <div class="flex justify-between items-center pb-6 border-b border-primary/10">
          <h3 id="modal-title" class="font-serif italic text-3xl font-light text-primary">{{ t('contactPopup.title') }}</h3>
          <button @click="$emit('close')" class="p-2 border border-primary/10 rounded-full hover:bg-primary/5 transition-colors focus:outline-none cursor-pointer">
            <!-- Close icon -->
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form Content -->
        <form @submit.prevent="submitForm" class="flex-grow flex flex-col gap-6 py-8">
          <p class="text-sm text-secondary font-medium">
            {{ t('contactPopup.subtitle') }} <a href="mailto:hello@wanda.agency" class="underline font-bold text-primary">hello@wanda.agency</a>.
          </p>
          
          <!-- Name Input -->
          <div class="flex flex-col gap-2">
            <label for="name" class="text-xs uppercase font-bold text-muted tracking-wider">{{ t('contactPopup.labels.name') }}</label>
            <input 
              v-model="form.name" 
              type="text" 
              id="name" 
              required 
              :placeholder="t('contactPopup.placeholders.name')"
              class="w-full px-4 py-3 border border-primary/15 rounded-lg bg-white/50 focus:outline-none focus:border-primary transition-colors text-base"
            />
          </div>

          <!-- Email Input -->
          <div class="flex flex-col gap-2">
            <label for="email" class="text-xs uppercase font-bold text-muted tracking-wider">{{ t('contactPopup.labels.email') }}</label>
            <input 
              v-model="form.email" 
              type="email" 
              id="email" 
              required 
              :placeholder="t('contactPopup.placeholders.email')"
              class="w-full px-4 py-3 border border-primary/15 rounded-lg bg-white/50 focus:outline-none focus:border-primary transition-colors text-base"
            />
          </div>

          <!-- Message Input -->
          <div class="flex flex-col gap-2">
            <label for="message" class="text-xs uppercase font-bold text-muted tracking-wider">{{ t('contactPopup.labels.message') }}</label>
            <textarea 
              v-model="form.message" 
              id="message" 
              rows="5" 
              required 
              :placeholder="t('contactPopup.placeholders.message')"
              class="w-full px-4 py-3 border border-primary/15 rounded-lg bg-white/50 focus:outline-none focus:border-primary transition-colors text-base resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="mt-4">
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full bg-primary text-bg py-4 px-8 rounded-full font-sans font-medium text-base hover:opacity-90 active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer flex justify-center items-center gap-2"
            >
              <span v-if="loading" class="animate-spin rounded-full h-5 w-5 border-2 border-bg border-t-transparent"></span>
              <span>{{ loading ? t('contactPopup.submitting') : t('contactPopup.submit') }}</span>
            </button>
          </div>
        </form>

        <!-- Status Notifications -->
        <div v-if="status" class="p-4 rounded-lg text-sm text-center font-medium transition-all" :class="status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
          {{ status.message }}
        </div>

        <!-- Footer -->
        <div class="pt-6 border-t border-primary/10 flex justify-between text-xs text-muted">
          <span>{{ t('contactPopup.footerLocation') }}</span>
          <span>{{ t('contactPopup.footerReplyTime') }}</span>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const status = ref(null)

const submitForm = async () => {
  loading.value = true
  status.value = null

  try {
    const supabase = useSupabaseClient()
    if (supabase) {
      const { error } = await supabase.from('contacts').insert({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })
      if (error) throw error
    }

    status.value = {
      success: true,
      message: t('contactPopup.success')
    }
    
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      emit('close')
      status.value = null
    }, 2500)
    
  } catch (err) {
    console.warn('Supabase fallback:', err.message)
    
    status.value = {
      success: true,
      message: t('contactPopup.mockSuccess')
    }
    
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      emit('close')
      status.value = null
    }, 2500)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Fade + Slide Overlay Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active > div,
.fade-leave-active > div {
  transition: transform 0.4s cubic-bezier(0.85, 0, 0.15, 1);
}

.fade-enter-from > div {
  transform: translate3d(100%, 0, 0);
}

.fade-leave-to > div {
  transform: translate3d(100%, 0, 0);
}
</style>
