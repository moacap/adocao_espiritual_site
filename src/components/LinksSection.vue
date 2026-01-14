<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import aePretoLogo from '../assets/ae-preto.png';

const { t } = useI18n();

const links = computed(() => [
  {
    type: 'internal',
    title: t('links.item1.title'),
    subtitle: t('links.item1.subtitle'),
    description: t('links.item1.description'),
    icon: aePretoLogo,
    href: 'site_page.html'
  },
  {
    type: 'social',
    title: 'INSTAGRAM',
    handle: 'adocaoespiritualrio',
    description: t('links.item2.description'),
    icon: 'fab fa-instagram',
    color: 'text-[#E1306C]',
    href: 'https://instagram.com/adocaoespiritualrio'
  },
  {
    type: 'social',
    title: 'facebook',
    handle: '@adocaoespiritualrio/',
    description: t('links.item3.description'),
    icon: 'fab fa-facebook',
    color: 'text-[#1877F2]',
    href: 'https://facebook.com/adocaoespiritualrio'
  },
  {
    type: 'social',
    title: 'YouTube',
    handle: 'adocaoespiritualrio',
    description: t('links.item4.description'),
    icon: 'fab fa-youtube',
    color: 'text-[#FF0000]',
    href: 'https://youtube.com/@adocaoespiritualrio'
  },
  {
    type: 'contact',
    title: 'WhatsApp',
    description: t('links.item5.description'),
    icon: 'fab fa-whatsapp',
    color: 'text-[#25D366]',
    href: 'https://wa.me/552112345678'
  },
  {
    type: 'contact',
    title: 'E-MAIL',
    handle: 'contato@adocaoespiritual.org.br',
    description: t('links.item6.description'),
    icon: 'far fa-envelope',
    color: 'text-site-terracotta',
    href: 'mailto:contato@adocaoespiritual.org.br'
  }
]);
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container max-w-2xl mx-auto px-6">
      <div class="space-y-0">
        <div v-for="(link, index) in links" :key="index">
          <a 
            :href="link.href"
            target="_blank"
            class="group block py-8 hover:bg-gray-50/50 transition-all duration-300 rounded-lg px-4 -mx-4"
          >
            <div class="flex items-start gap-6">
              <!-- Icon/Logo Column -->
              <div class="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <template v-if="link.type === 'internal'">
                  <img :src="link.icon" alt="Logo" class="w-full h-auto object-contain" />
                </template>
                <template v-else>
                  <i :class="[link.icon, link.color, 'text-4xl transition-transform group-hover:scale-110']"></i>
                </template>
              </div>

              <!-- Content Column -->
              <div class="flex-grow pt-1">
                <div class="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 class="text-xl font-bold text-site-dark uppercase tracking-wide">
                    {{ link.title }}
                  </h3>
                  <span v-if="link.subtitle" class="text-site-terracotta font-serif italic text-lg">
                    {{ link.subtitle }}
                  </span>
                  <span v-if="link.handle" class="text-site-dark font-bold text-lg">
                    {{ link.handle }}
                  </span>
                </div>
                
                <div v-if="link.stats" class="text-sm text-gray-500 mb-2 font-medium">
                  {{ link.stats }}
                </div>
                
                <p class="text-gray-600 text-base leading-relaxed">
                  {{ link.description }}
                </p>
              </div>

              <!-- Arrow -->
              <div class="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
          <!-- Separator -->
          <hr v-if="index !== links.length - 1" class="border-gray-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  font-family: 'Inter', sans-serif;
}
</style>
