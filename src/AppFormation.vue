<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

const { tm, t } = useI18n();

const footerRef = ref(null);
const buttonBottom = ref('2rem'); // 32px standard spacing

const handleScroll = () => {
  if (!footerRef.value) return;
  const footerRect = footerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    // Footer is entering the viewport
    const overlap = windowHeight - footerRect.top;
    // Push the button up by the overlap amount + original spacing
    buttonBottom.value = `${32 + overlap}px`;
  } else {
    buttonBottom.value = '2rem';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
});

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderStart always-opaque />

    <main class="pt-[160px] pb-20 container mx-auto px-4 lg:px-20">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-5xl font-serif text-site-terracotta mb-8 text-center"
        >
          {{ t("formation_page.title") }}
        </h1>

        <p class="text-lg text-site-dark/70 text-center mb-16 max-w-2xl mx-auto">
          {{ t("formation_page.intro") }}
        </p>

        <div class="prose prose-lg text-site-dark/80 max-w-none">
          <!-- Main Docs (CIC, EV, GS) -->
          <div v-for="(doc, key) in tm('formation_page.docs')" :key="key" class="mb-16">
            <template v-if="key !== 'dicastery'">
              <h2 class="text-2xl font-serif text-site-terracotta mb-4">
                {{ doc.title }}
              </h2>
              <a :href="doc.url" target="_blank" class="text-site-terracotta hover:underline block mb-4 italic text-sm">
                (Link: {{ doc.title.split('—')[0] }})
              </a>
              <p class="font-medium mb-4">{{ doc.about }}</p>
              <h3 class="text-lg font-bold text-site-dark mb-4">{{ doc.refs_title }}</h3>
              <ul class="list-disc pl-6 space-y-3">
                <li v-for="(ref, index) in doc.refs" :key="index">{{ ref }}</li>
              </ul>
            </template>
            
            <!-- Dicastery Docs Sub-section -->
            <template v-else>
              <h2 class="text-3xl font-serif text-site-terracotta mb-8 pt-8 border-t border-site-terracotta/10">
                {{ doc.title }}
              </h2>
              <div v-for="(subDoc, subKey) in doc.docs" :key="subKey" class="mb-12 pl-4 border-l-2 border-site-terracotta/10">
                <h3 class="text-xl font-serif text-site-terracotta mb-3">
                  {{ subDoc.title }}
                </h3>
                <a :href="subDoc.url" target="_blank" class="text-site-terracotta hover:underline block mb-3 italic text-sm">
                  (Link: {{ subDoc.title.split('(')[0] }})
                </a>
                <p class="font-medium mb-3">{{ subDoc.about }}</p>
                <div v-if="subDoc.refs && subDoc.refs.length">
                  <h4 class="text-base font-bold text-site-dark mb-2">{{ subDoc.refs_title }}</h4>
                  <ul class="list-disc pl-6 space-y-2 text-base">
                    <li v-for="(ref, index) in subDoc.refs" :key="index">{{ ref }}</li>
                  </ul>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Back Button -->
        <div 
          class="fixed right-6 md:right-12 z-50 will-change-auto"
          :style="{ bottom: buttonBottom }"
        >
          <button
            @click="goBack"
            class="group relative inline-flex items-center h-12 pl-14 pr-6 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              class="absolute left-0 top-0 h-full w-12 border border-site-terracotta rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full bg-white/0"
            >
              <div
                class="absolute left-0 top-0 w-12 h-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-site-terracotta"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <span
              class="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-site-terracotta whitespace-nowrap"
            >
              {{ t("general.back") }}
            </span>
          </button>
        </div>
      </div>
    </main>

    <div ref="footerRef">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
h1 {
  letter-spacing: -0.02em;
}

.prose h2 {
  margin-top: 0;
}

:deep(ul) {
  margin-bottom: 2rem;
}

:deep(li) {
  line-height: 1.6;
}
</style>
