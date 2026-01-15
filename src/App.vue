<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import AboutSection from './components/AboutSection.vue'
import CommitmentSection from './components/CommitmentSection.vue'
import FAQSection from './components/FAQSection.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <AboutSection />
      <CommitmentSection />
      
      <!-- Highlights Section -->
      <section class="py-40 bg-white relative overflow-hidden">
        <div class="container">
          <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 reveal">
            <div class="max-w-xl">
              <span class="text-site-terracotta text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                {{ $t('highlights.badge') }}
              </span>
              <h2 class="text-site-dark text-4xl md:text-5xl">{{ $t('highlights.title') }}</h2>
            </div>
            <a href="#" class="text-site-terracotta font-bold uppercase tracking-widest text-sm flex items-center hover:text-site-dark transition-colors border-b border-site-terracotta/20 pb-1">
              {{ $t('highlights.view_all') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="ms-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- News 1 -->
            <div class="reveal reveal-delay-1 group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="overflow-hidden h-64 relative">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/papa_francesco_8e27546ba4.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div class="absolute top-4 left-4 bg-site-terracotta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {{ $t('highlights.news1.tag') }}
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-2xl text-site-dark group-hover:text-site-terracotta transition-colors mb-4">{{ $t('highlights.news1.title') }}</h3>
                <p class="text-site-dark/70 text-lg leading-relaxed mb-6 line-clamp-3">
                  {{ $t('highlights.news1.desc') }}
                </p>
                <div class="mt-auto flex items-center text-site-terracotta font-bold text-xs uppercase tracking-widest">
                  {{ $t('highlights.news1.read_more') }} 
                  <span class="ms-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            <!-- News 2 -->
            <div class="reveal reveal-delay-2 group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="overflow-hidden h-64 relative">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/papa_joao_paulo_II_cc80df17b9.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div class="absolute top-4 left-4 bg-site-terracotta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {{ $t('highlights.news2.tag') }}
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-2xl text-site-dark group-hover:text-site-terracotta transition-colors mb-4">{{ $t('highlights.news2.title') }}</h3>
                <p class="text-site-dark/70 text-lg leading-relaxed mb-6 line-clamp-3">
                  {{ $t('highlights.news2.desc') }}
                </p>
                <div class="mt-auto flex items-center text-site-terracotta font-bold text-xs uppercase tracking-widest">
                  {{ $t('highlights.news2.read_more') }} 
                  <span class="ms-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>

            <!-- News 3 -->
            <div class="reveal reveal-delay-3 group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="overflow-hidden h-64 relative">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/what_is_spiritual_adoption_e404113954.webp" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div class="absolute top-4 left-4 bg-site-terracotta text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {{ $t('highlights.news3.tag') }}
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-2xl text-site-dark group-hover:text-site-terracotta transition-colors mb-4">{{ $t('highlights.news3.title') }}</h3>
                <p class="text-site-dark/70 text-lg leading-relaxed mb-6 line-clamp-3">
                  {{ $t('highlights.news3.desc') }}
                </p>
                <div class="mt-auto flex items-center text-site-terracotta font-bold text-xs uppercase tracking-widest">
                  {{ $t('highlights.news3.read_more') }} 
                  <span class="ms-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
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

      <FAQSection />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
</style>
