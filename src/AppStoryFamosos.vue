<script setup>
import { onMounted } from 'vue';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

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
          <span class="text-site-dark/40 text-sm">26 de Outubro, 2023</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl text-site-dark font-serif-site leading-tight mb-8 reveal reveal-delay-1">
          9 famosos que escaparam do aborto
        </h1>

        <!-- Leadin -->
        <p class="text-xl md:text-2xl text-site-dark/60 font-medium leading-relaxed mb-12 reveal reveal-delay-2">
          Eles estiveram no alvo do aborto; mas porque escaparam e tiveram a oportunidade de nascer, puderam realizar os próprios talentos.
        </p>

        <!-- Banner Image -->
        <div class="relative aspect-[16/9] rounded-sm overflow-hidden shadow-sm mb-16 reveal reveal-delay-3">
          <img 
            src="https://cms.adocaoespiritualrio.org.br/uploads/steve_jobs_de28ae9f15.jpg" 
            alt="Steve Jobs"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none text-site-dark/80 reveal reveal-delay-1">
          <p class="text-lg leading-relaxed mb-10">
            Todos temos o direito a nascer; não importa quantos erros alguém possa cometer, há sempre uma razão maior para essa pessoa existir. Sempre vale a pena deixar cada um realizar o próprio show nessa terra! Tendo isso em vista, é quase impossível acreditar que os famosos abaixo quase não nasceram. Se fosse o caso, o mundo não seria o mesmo sem eles!
          </p>

          <div class="space-y-16">
            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Steve Jobs</h2>
              <p class="text-lg leading-relaxed">
                Imagina a sua vida sem um Mac, I-Phone ou I-Pad? Se Joanne Schieble, com então 22 anos, tivesse desistido de levar a gestação a termo, a tecnologia não seria como conhecemos hoje.
                Joanne, mãe biológica de Steve Jobs, engravidou do namorado sírio e decidiu colocar o bebê para adoção. Ela escolheu uma família financeiramente capaz de pagar pelos estudos universitários do bebê, porém quando os candidatos a pais descobriram que Joanne esperava um menino, recuaram porque queriam uma menina. Joanne, a ponto de dar a luz e sem tempo para procurar uma nova família, acabou concordando em entregar o filho para um casal humilde.
                Jobs, em entrevista, declarou ser agradecido por não ter terminado em um aborto.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Justin Bieber</h2>
              <p class="text-lg leading-relaxed">
                Em seu livro “Nowhere But Up”, Pattie Mallette, mãe de Justin Bieber, conta que quando se viu grávida aos 17 anos, foi pressionada a realizar um aborto. Mas isso nunca foi uma opção: “eu sabia que não poderia fazer isso”, revelou em entrevista. “A única coisa que eu sabia é que eu deveria manter a gestação. Eu não sabia como faria isso, mas eu apenas sabia que não poderia abortar”, disse.
                Aos 18 anos, Pattie deu à luz a Justin em Ontário (Canadá) e o criou com a ajuda de seus pais Bruce e Diane, avós do cantor.
              </p></section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Roberto Gómez Bolaños</h2>
              <p class="text-lg leading-relaxed">
                Em um breve comercial no México, Roberto Gómez Bolaños (conhecido no Brasil por sua atuação como Chaves e Chapolin), revelou que quando sua mãe estava grávida sofreu um acidente em que quase morreu. Os médicos então recomendaram que ela abortasse. “Abortar, eu? Jamais!” respondeu a mãe. “Ela defendeu a vida, a minha vida. É graças a ela que eu estou aqui”, afirmou.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Susan Boyle</h2>
              <p class="text-lg leading-relaxed">
                Quando Bridget Boyle, aos 45 anos, engravidou, os médicos consideraram a gestação de risco e por isso a aconselharam a abortar. “Mas isso era impensável para minha mãe, uma católica devota. Eu só estou aqui porque ela teve fé”, contou a britânica.
                Durante o parto, uma cesária de emergência, Susan sofreu falta de oxigênio e nasceu com pouco peso. Por isso, os médicos disseram a mãe: “Susan nunca será nada, não espere muito dela.” Em sua auto-biografia, Susan disse que os médicos não deveriam ter feito esse comentário. “O que eles não sabiam é que eu sou uma lutadora e tentei durante toda minha vida provar que eles estavam errados”.
                Susan Boyle ganhou atenção internacional durante uma apresentação no programa “Britain’s Got Talent”. Seu primeiro álbum “I Dreamed a Dream” (2009) bateu recordes de vendas no Reino Unido e totalizou quase 14 milhões de cópias vendidas no mundo. Susan ganhou dois Grammys e é conhecida por apoiar causas caritativas.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Cristiano Ronaldo</h2>
              <p class="text-lg leading-relaxed">
                Quando Maria Dolores descobriu que estava grávida pela quarta vez, procurou por um médico para realizar o aborto. Este, porém, respondeu que não havia nenhuma razão física para abortar e que esse bebê lhe traria muita alegria na vida. Sem a cumplicidade do médico, Dolores tentou outros métodos de aborto que não funcionaram. Por fim, disse que “se a vontade de Deus é que esta criança nasça, que assim seja!”
                Durante o parto, o mesmo médico disse uma frase que ficou para sempre na memória de Dolores: “Com pés como estes, será um jogador de futebol!” Em outras consultas, o médico vendo a preocupação da mãe, a animava dizendo: “Alegra-te, mulher, este bebê vai te dar muita sorte na vida e muitas felicidades!”
                Cristiano é hoje a camisa 7 do clube espanhol Real Madrid e é considerado o maior jogador de futebol português de todos os tempos.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Celine Dion</h2>
              <p class="text-lg leading-relaxed">
                A mãe da cantora canadense ficou devastada ao saber que esperava por Celine, sua 14˚ criança, e contou a um padre que pretendia fazer um aborto; o sacerdote, então, a convenceu a não fazer isso e a aceitar o bebê. “Devo a minha vida a este padre”, disse a cantora. “Quando minha mãe superou a decepção, ela não perdeu tempo com auto-piedade e me amou tão apaixonadamente quanto ao meu irmão mais novo”, declarou.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Andrea Bocelli</h2>
              <p class="text-lg leading-relaxed">
                Quando sua mãe estava grávida, foi hospitalizada com apendicite. Em função do tratamento, os médicos a aconselharam a abortar porque o bebê poderia nascer com deficiências. Mesmo assim, a jovem mãe se recusou e deu à luz a Andrea Bocelli, que nasceu com uma voz capaz de emocionar audiências em todo o mundo.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Thiago Silva</h2>
              <p class="text-lg leading-relaxed">
                Dona Angela, mãe do jogador de futebol Thiago Silva, disse que pensou em abortar. “Eu cheguei a chorar no colo do meu pai dizendo que não queria fazer o aborto, mas que eu também não tinha condição de criar mais um filho. Só que ele não deixou que eu fizesse isso, que cometesse um pecado!”, contou a mãe.
                De origem humilde, Thiago cresceu na favela de Santa Cruz, na Zona Oeste do Rio de Janeiro. Hoje, o caçula de dona Angela, é considerado um dos melhores (e mais caros) zagueiros no mundo.
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-serif-site text-site-dark mb-6">Jack Nicholson</h2>
              <p class="text-lg leading-relaxed">
                Aos 17 anos, June Frances Nicholson, apesar de pressionada pelos colegas a abortar, deu à luz a um bebê a quem chamou de Jack. June deixou o filho com os seus pais, John e Ethel, e o menino cresceu acreditando que os avós eram seus pais e que June era sua irmã. Somente após a morte da mãe, Nicholson descobriu a própria história. “Minha única emoção é gratidão, literalmente, pela minha vida. Se June e Ethel tivessem menos caráter, eu nunca teria chegado a viver. Essas mulheres me deram o presente da vida”, disse.
              </p>
            </section>
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
</style>
