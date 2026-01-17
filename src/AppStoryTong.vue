<script setup>
import { onMounted } from 'vue';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

const storyImg = "https://cms.adocaoespiritualrio.org.br/uploads/tong_phuoc_phuc_uai_675x450_4ae56360db.jpg";

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
          <span class="text-site-dark/40 text-sm">01 de Novembro, 2023</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl text-site-dark font-serif-site leading-tight mb-8 reveal reveal-delay-1">
          Homem já adotou mais de 100 crianças que seriam abortadas
        </h1>

        <!-- Leadin -->
        <p class="text-xl md:text-2xl text-site-dark/60 font-medium leading-relaxed mb-12 reveal reveal-delay-2">
          O vietnamita Tong Phuoc Phuc é mais um exemplo maravilhoso de heróis da vida real! Se não fosse por ele, mais de cem crianças teriam sido abortadas no seu país.
        </p>

        <!-- Banner Image -->
        <div class="relative aspect-[16/9] rounded-sm overflow-hidden shadow-sm mb-16 reveal reveal-delay-3">
          <img 
            :src="storyImg" 
            alt="Tong Phuoc Phuc"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none text-site-dark/80 reveal reveal-delay-1">
          <p class="text-lg leading-relaxed mb-6">
            O vietnamita Tong Phuoc Phuc é mais um exemplo maravilhoso de heróis da vida real! Se não fosse por ele, mais de cem crianças teriam sido abortadas no seu país. Sim, ele é pai de dezenas de crianças que poderiam nunca ter nascido.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Essa história de amor começou em 2001, quando a esposa de Phuc estava grávida e teve muitas complicações. Durante o parto, que foi extremamente difícil, Phuc viu que muitas das mulheres que entravam na sala de perto saíam de lá sem os seus bebês.
          </p>

          <p class="text-lg leading-relaxed mb-10 italic border-l-4 border-site-terracotta/30 pl-6 py-2">
            Ele não entendia muito bem o motivo no início. Só depois Phuc foi se dar conta de que as crianças tinham sido abortadas, ao ver que os médicos estavam jogando os fetos no lixo. Phuc ficou mexido com o que viu e pediu para levar os corpos para casa.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Com uma vida humilde, ele juntou todas suas economias que tinha de seu trabalho como construtor para comprar um campo onde pudesse enterrar os restos dos bebês que eram jogados no lixo. A esposa de Phuc achou tudo muito estranho no começo, a ponto de pensar que o marido tivesse enlouquecido. Mesmo assim, ele continuou e, hoje, mais de 10 mil fetos descansam em paz no campo comprado por ele.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Desde então, as mães que abortaram as crianças visitam o cemitério para rezar por seus filhos. Além disso, mulheres grávidas com risco de aborto passaram a procurar por Phuc em busca de ajuda. Ele então abriu as portas da sua casa para recebê-las e se ofereceu para adotar os bebês que elas não pudessem criar.
          </p>

          <p class="text-lg leading-relaxed mb-12">
            Phuc fica com os pequenos até que as mães tenham condições de poder cuidar deles por conta própria.
          </p>

          <h2 class="text-3xl font-serif-site text-site-dark mt-16 mb-8">Nomes com Significado</h2>

          <p class="text-lg leading-relaxed mb-6">
            Os meninos adotados por ele ganham o nome de <strong>Vihn</strong> (que significa “Honra”), e as meninas são chamadas de <strong>Tam</strong> (que significa “Coração”). O segundo nome é sempre o da mãe ou da cidade de origem dela – caso a mãe volte para buscá-la.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            O sobrenome é Phuc mesmo, pois ele considera todos como se fossem seus filhos. Phuc diz que “essas crianças agora têm um lar seguro. Estou disposto a ajudar e a ensiná-las a serem boas pessoas”.
          </p>

          <p class="text-lg leading-relaxed mb-12">
            Cuidar de mais de cem crianças não é uma tarefa fácil, mas Phuc não pretende parar por aqui. Ele declarou que continuará “esse trabalho até meu último suspiro de vida, e encorajo meus filhos a continuarem ajudando outras pessoas desprivilegiadas”.
          </p>
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
  font-family: "Libre Caslon Display", serif;
}
</style>
