<script setup>
import { onMounted } from 'vue';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

const storyPadrePioImg = "https://cms.adocaoespiritualrio.org.br/uploads/padre_pio_29a89a4224.jpg";

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "stories.html";
  }
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderStart always-opaque />

    <main class="pt-[140px] pb-20">
      <div class="container mx-auto px-6 max-w-4xl">
        <!-- Meta -->
        <div class="flex items-center gap-4 mb-6 reveal">
          <span class="px-4 py-1.5 bg-site-terracotta/10 rounded-full text-[13px] font-bold text-site-terracotta uppercase tracking-[0.15em]">
            Histórias de Vida
          </span>
          <span class="text-site-dark/40 text-sm">17 de Janeiro, 2026</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl text-site-dark font-serif-site leading-tight mb-8 reveal reveal-delay-1">
          Padre Pio fez uma mulher ver o Papa que ela abortou
        </h1>

        <!-- Leadin -->
        <p class="text-xl md:text-2xl text-site-dark/60 font-medium leading-relaxed mb-12 reveal reveal-delay-2">
          "A criança que você matou no seu ventre com o aborto, nos desígnios de Deus, devia se tornar esse papa."
        </p>

        <!-- Banner Image -->
        <div class="relative aspect-[16/9] rounded-sm overflow-hidden shadow-sm mb-16 reveal reveal-delay-3">
          <img 
            :src="storyPadrePioImg" 
            alt="Padre Pio e a Vision do Papa"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none text-site-dark/80 reveal reveal-delay-1">
          <p class="text-lg leading-relaxed mb-10 italic border-l-4 border-site-terracotta/30 pl-6 py-2">
            Na vida de S. Padre Pio de Pietrelcina há este belo e interessante episódio.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Para uma mulher que foi ao seu confessionário, o padre Pio disse:
            <br />
            <strong>“Feche os olhos e me diga o que vê.”</strong>
          </p>

          <p class="text-lg leading-relaxed mb-6">
            A senhora obedeceu, fechou os olhos e disse: “Vejo uma praça enorme com muita gente. Entre as pessoas, vejo uma procissão que se move solenemente. Vejo no tribunal muitos padres, bispos e cardeais: todos precedem um papa que está assumindo no trono. Sim, vejo precisamente um papa no trono (era a cadeira gestacional) e uma grande multidão que aclama esse papa, muito bonita … Mas o que tudo isso significa?”
          </p>

          <p class="text-lg leading-relaxed mb-6">
            O padre Pio respondeu: <strong>“A criança que você matou no seu ventre com o aborto, nos desígnios de Deus, devia se tornar esse papa”.</strong>
          </p>

          <p class="text-lg leading-relaxed mb-12">
            A pobre mulher gritou e desmaiou ao lado do confessionário.
          </p>

          <div class="text-sm text-site-dark/40 italic pt-8 border-t border-site-dark/5">
            (Retirado de: E. Boninsegna, Ero curato, ora sono da curare, Verona, Manuscrito profissional, 2019, pág. 139).
          </div>
        </div>

        <!-- Final Back Button -->
        <div class="flex justify-center mt-24 reveal">
          <button
            @click="goBack"
            class="group relative inline-flex items-center h-12 pl-14 pr-6"
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
              {{ $t("general.back") }}
            </span>
          </button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
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

.font-serif-site {
  font-family: serif; /* fallback if not defined globally */
}
</style>
