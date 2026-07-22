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
        <form @submit.prevent="submitForm" class="flex-grow flex flex-col gap-6 py-8" novalidate>
          <p class="text-sm text-secondary font-medium">
            {{ t('contactPopup.subtitle') }} <a href="mailto:contact@wanda-agency.studio" class="underline font-bold text-primary">contact@wanda-agency.studio</a>.
          </p>
          
          <!-- Name Input -->
          <div class="flex flex-col gap-1.5">
            <label for="name" class="text-xs uppercase font-bold text-muted tracking-wider">{{ t('contactPopup.labels.name') }}</label>
            <input 
              v-model="form.name" 
              @blur="touched.name = true"
              @input="validateField('name')"
              type="text" 
              id="name" 
              required 
              :placeholder="t('contactPopup.placeholders.name')"
              class="w-full px-4 py-3 border rounded-lg bg-white/50 focus:outline-none transition-colors text-base"
              :class="errors.name && touched.name ? 'border-rose-400 focus:border-rose-500 bg-rose-500/5' : 'border-primary/15 focus:border-primary'"
            />
            <span v-if="errors.name && touched.name" class="text-xs text-rose-500 font-medium animate-fadeIn">
              {{ errors.name }}
            </span>
          </div>

          <!-- Email Input -->
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-xs uppercase font-bold text-muted tracking-wider">{{ t('contactPopup.labels.email') }}</label>
            <input 
              v-model="form.email" 
              @blur="touched.email = true"
              @input="validateField('email')"
              type="email" 
              id="email" 
              required 
              :placeholder="t('contactPopup.placeholders.email')"
              class="w-full px-4 py-3 border rounded-lg bg-white/50 focus:outline-none transition-colors text-base"
              :class="errors.email && touched.email ? 'border-rose-400 focus:border-rose-500 bg-rose-500/5' : 'border-primary/15 focus:border-primary'"
            />
            <span v-if="errors.email && touched.email" class="text-xs text-rose-500 font-medium animate-fadeIn">
              {{ errors.email }}
            </span>
          </div>

          <!-- Message Input -->
          <div class="flex flex-col gap-1.5">
            <label for="message" class="text-xs uppercase font-bold text-muted tracking-wider">{{ t('contactPopup.labels.message') }}</label>
            <textarea 
              v-model="form.message" 
              @blur="touched.message = true"
              @input="validateField('message')"
              id="message" 
              rows="4" 
              required 
              :placeholder="t('contactPopup.placeholders.message')"
              class="w-full px-4 py-3 border rounded-lg bg-white/50 focus:outline-none transition-colors text-base resize-none"
              :class="errors.message && touched.message ? 'border-rose-400 focus:border-rose-500 bg-rose-500/5' : 'border-primary/15 focus:border-primary'"
            ></textarea>
            <span v-if="errors.message && touched.message" class="text-xs text-rose-500 font-medium animate-fadeIn">
              {{ errors.message }}
            </span>
          </div>

          <!-- Submit Button -->
          <div class="mt-2">
            <button 
              type="submit" 
              :disabled="loading || isFormInvalid"
              class="w-full bg-primary text-bg py-4 px-8 rounded-full font-sans font-medium text-base hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer flex justify-center items-center gap-2 shadow-md"
            >
              <span v-if="loading" class="animate-spin rounded-full h-5 w-5 border-2 border-bg border-t-transparent"></span>
              <span>{{ loading ? t('contactPopup.submitting') : t('contactPopup.submit') }}</span>
            </button>
          </div>
        </form>

        <!-- Footer -->
        <div class="pt-6 border-t border-primary/10 flex justify-between text-xs text-muted">
          <span>{{ t('contactPopup.footerLocation') }}</span>
          <span>{{ t('contactPopup.footerReplyTime') }}</span>
        </div>

      </div>
    </div>
  </Transition>

  <!-- Centered Confirmation Popup Modal -->
  <Transition name="pop">
    <div v-if="status" class="fixed inset-0 w-full h-screen bg-black/60 backdrop-blur-md z-[1200] flex items-center justify-center p-4" @click.self="dismissStatus">
      <div class="bg-bg border border-primary/10 shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center flex flex-col items-center gap-5 relative animate-pop">
        
        <!-- Status Icon -->
        <div v-if="status.success" class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 shadow-inner">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div v-else class="w-16 h-16 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center border border-rose-500/20 shadow-inner">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        <!-- Title & Text -->
        <div class="flex flex-col gap-2">
          <h4 class="font-serif italic text-2xl font-semibold text-primary">
            {{ status.success ? (t('contactPopup.successTitle') || 'Message Envoyé !') : (t('contactPopup.errorTitle') || 'Oups !') }}
          </h4>
          <p class="text-sm text-secondary leading-relaxed">
            {{ status.message }}
          </p>
        </div>

        <!-- Dismiss Button -->
        <button 
          @click="dismissStatus"
          class="w-full mt-2 py-3 px-6 rounded-full bg-primary text-bg font-medium text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md"
        >
          {{ status.success ? 'D\'accord' : 'Fermer' }}
        </button>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'
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

const touched = ref({
  name: false,
  email: false,
  message: false
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const status = ref(null)
let autoCloseTimer = null

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateField = (field) => {
  if (field === 'name') {
    if (!form.value.name.trim() || form.value.name.trim().length < 2) {
      errors.value.name = t('contactPopup.validation.nameMin') || 'Name must be at least 2 characters.'
    } else {
      errors.value.name = ''
    }
  }

  if (field === 'email') {
    if (!form.value.email.trim() || !emailRegex.test(form.value.email.trim())) {
      errors.value.email = t('contactPopup.validation.emailInvalid') || 'Please enter a valid email address.'
    } else {
      errors.value.email = ''
    }
  }

  if (field === 'message') {
    if (!form.value.message.trim() || form.value.message.trim().length < 10) {
      errors.value.message = t('contactPopup.validation.messageMin') || 'Message must be at least 10 characters.'
    } else {
      errors.value.message = ''
    }
  }
}

const validateAll = () => {
  validateField('name')
  validateField('email')
  validateField('message')
  touched.value = { name: true, email: true, message: true }
  return !errors.value.name && !errors.value.email && !errors.value.message
}

const isFormInvalid = computed(() => {
  return !form.value.name.trim() || 
         form.value.name.trim().length < 2 ||
         !form.value.email.trim() || 
         !emailRegex.test(form.value.email.trim()) ||
         !form.value.message.trim() || 
         form.value.message.trim().length < 10
})

const dismissStatus = () => {
  if (autoCloseTimer) clearTimeout(autoCloseTimer)
  const isSuccess = status.value?.success
  status.value = null
  if (isSuccess) {
    emit('close')
  }
}

const submitForm = async () => {
  if (!validateAll()) return

  loading.value = true
  status.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name.trim(),
        email: form.value.email.trim(),
        message: form.value.message.trim()
      }
    })

    status.value = {
      success: true,
      message: t('contactPopup.success')
    }
    
    form.value = { name: '', email: '', message: '' }
    touched.value = { name: false, email: false, message: false }
    errors.value = { name: '', email: '', message: '' }
    
    autoCloseTimer = setTimeout(() => {
      dismissStatus()
    }, 4000)
    
  } catch (err) {
    console.warn('Contact submission error:', err?.message || err)
    
    status.value = {
      success: false,
      message: err?.statusMessage || t('contactPopup.error') || 'Failed to send message.'
    }
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

/* Centered Pop Transition */
.pop-enter-active,
.pop-leave-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.88) translateY(12px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
