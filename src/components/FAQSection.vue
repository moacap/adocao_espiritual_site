<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const faqs = computed(() => [
  {
    question: t('faq.q1.question'),
    answer: t('faq.q1.answer'),
    isOpen: false
  },
  {
    question: t('faq.q2.question'),
    answer: t('faq.q2.answer'),
    isOpen: false
  },
  {
    question: t('faq.q3.question'),
    answer: t('faq.q3.answer'),
    isOpen: false
  },
  {
    question: t('faq.q4.question'),
    answer: t('faq.q4.answer'),
    isOpen: false
  }
]);

// Since we are using computed, we need a local state for isOpen
const openIndices = ref(new Set());

const toggleFaq = (index) => {
  if (openIndices.value.has(index)) {
    openIndices.value.delete(index);
  } else {
    openIndices.value.add(index);
  }
};

const isFaqOpen = (index) => openIndices.value.has(index);
</script>

<template>
  <section class="py-40 bg-site-beige relative overflow-hidden">
    <div class="container max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
          {{ $t('faq.badge') }}
        </span>
        <h2 class="text-site-dark text-4xl md:text-5xl">{{ $t('faq.title') }}</h2>
      </div>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-sm overflow-hidden shadow-sm border border-black/5">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors group"
          >
            <span class="font-bold text-lg text-site-dark group-hover:text-site-terracotta transition-colors">{{ faq.question }}</span>
            <div 
              class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300"
              :class="{'bg-site-terracotta border-site-terracotta text-white rotate-180': isFaqOpen(index)}"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>
          
          <div 
            v-if="isFaqOpen(index)" 
            class="px-8 pb-8 text-site-dark/70 text-lg leading-relaxed pt-6 mx-8 mb-2"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>

    <!-- Single Wavy Divider beige -->
    <div class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[30px] md:h-[60px] lg:h-[100px]">
        <path d="M0,0c0,0,300,120,600,120s600,-120,600,-120V120H0V0z" fill="#F1EDEA"></path>
      </svg>
    </div>
  </section>
</template>
