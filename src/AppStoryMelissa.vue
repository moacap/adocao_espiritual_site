<script setup>
import { onMounted } from 'vue';
import HeaderStart from "./components/HeaderStart.vue";
import Footer from "./components/Footer.vue";

const storyImg = "https://cms.adocaoespiritualrio.org.br/uploads/Melissa_Ohden_You_Tube_Susan_B_Anthony_List_060217_7a4018f526.jpg";

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
          <span class="text-site-dark/40 text-sm">07 de Fevereiro, 2017</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl text-site-dark font-serif-site leading-tight mb-8 reveal reveal-delay-1">
          Sua avó obrigou sua mãe a abortar, mas ela sobreviveu
        </h1>

        <!-- Leadin -->
        <p class="text-xl md:text-2xl text-site-dark/60 font-medium leading-relaxed mb-12 reveal reveal-delay-2">
          No oitavo mês de gravidez foi obrigada a abortar contra sua vontade. Mas a criança que crescia em seu ventre tinha um propósito na vida, para além da morte.
        </p>

        <!-- Banner Image -->
        <div class="relative aspect-[16/9] rounded-sm overflow-hidden shadow-sm mb-16 reveal reveal-delay-3">
          <img 
            :src="storyImg" 
            alt="Melissa Ohden"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none text-site-dark/80 reveal reveal-delay-1">
          <p class="text-sm text-site-dark/40 italic mb-10 tracking-wide">
            MADRI, 07 fev. 17 / 06:00 pm (ACI/Actuall)
          </p>

          <p class="text-lg leading-relaxed mb-6">
            No oitavo mês de gravidez, uma universitária de 19 anos, de Ohio (Estados Unidos), foi obrigada a abortar contra sua vontade. Mas a criança que crescia em seu ventre tinha um propósito na vida, para além da morte.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            O aborto não foi sucedido e nasceu uma menina chamada Melissa. Entretanto, a recém-nascida teve que enfrentar outro desafio.
          </p>

          <p class="text-lg leading-relaxed mb-10 italic border-l-4 border-site-terracotta/30 pl-6 py-2">
            Quando uma criança abortada nasce viva, os abortistas tem a obrigação de lhe negar a assistência médica para que morra sozinha. Mas nessa ocasião uma enfermeira desafiou esta ordem e levou Melissa para o hospital a fim de que recebesse os cuidados adequados.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Melissa pesava apenas um quilo e sofria de graves problemas respiratórios, os médicos disseram que teria uma vida cheia de complicações e não havia esperança para o seu futuro.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Entretanto, Melissa foi adotada por uma família que lutou pela sua vida. Quando completou 14 anos, a sua família adotiva lhe explicou que era adotada. Esta notícia causou uma mudança radical em sua vida.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Um novo mundo de perguntas vinha à sua mente: “Fiquei surpresa quando meus pais me disseram que eu era adotada. Quem era então a minha mãe biológica? Quais eram as minhas raízes? De onde eu vim?”, reconhece.
          </p>

          <p class="text-lg leading-relaxed mb-12">
            Com tantas perguntas sem nenhuma resposta, durante os anos seguintes a jovem começou a investigar nos papéis da adoção e nos registros médicos à procura de pistas que a levassem à sua mãe biológica.
          </p>

          <h2 class="text-3xl font-serif-site text-site-dark mt-16 mb-8">A tragédia por trás da verdade</h2>
          
          <p class="text-lg leading-relaxed mb-6">
            Depois de muito tempo lutando com os entraves burocráticos, descobriu uma verdade que escondia muitos segredos:
          </p>

          <p class="text-lg leading-relaxed mb-6">
            “Descobri que havia sobrevivido a um aborto, mas a história se complicava e, na medida em que ia investigando, me deparei com a dura realidade”, diz Melissa.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Na verdade, a mãe biológica de Melissa tinha sido obrigada a abortar. O mais surpreendente desta história é saber quem a obrigou e cometeu este crime: a avó de Melissa, uma “enfermeira” que trabalhava em um lugar que praticavam abortos e não hesitou em organizar tudo para matar a sua própria neta antes do seu nascimento, no oitavo mês de gestação.
          </p>

          <p class="text-lg leading-relaxed mb-12">
            A crueldade da sua avó não tinha limites. Ao descobrir que o bebê havia sobrevivido ao aborto, a deixou em um quarto para que morresse sozinha. Foi a bondade de outra enfermeira que a salvou. Sem que a avó percebesse, ela chamou uma ambulância para transferir a recém-nascida a um hospital.
          </p>

          <h2 class="text-3xl font-serif-site text-site-dark mt-16 mb-8">Uma mãe enganada e atormentada</h2>

          <p class="text-lg leading-relaxed mb-6">
            Mas havia um segundo segredo nesta história, a mãe biológica de Melissa não sabia que a sua filha tinha sobrevivido ao aborto. Disseram-lhe que havia falecido e durante todos esses anos havia vivido atormentada por ter matado o seu bebê.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Quando Melissa soube da terrível história do seu nascimento, experimentou uma luta em seu interior. “Não queria contar para ninguém, estava envergonhada e ao mesmo tempo com raiva, vivi vários anos desolada por isso. Mas percebi que se eu não contasse, a minha mãe biológica nunca saberia que eu estava viva”, afirma a Fox News.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Demorou vários anos para experimentar o verdadeiro perdão. Graças à sua fé cristã conseguiu superar o trauma do seu nascimento, inclusive chegou a entrar em contato com a sua mãe biológica.
          </p>

          <p class="text-lg leading-relaxed mb-10">
            “Agora, sei que minha avó queria mudar o meu destino para que não estivesse no mundo. Por algum motivo, meu nascimento e minha adoção foram um segredo para todo o mundo. Mas não aguento mais permanecer com este segredo. Quero contar minha história para ajudar a salvar milhões de bebês que são abortados a cada ano. Quero ajudar as mães para que tomem a decisão de apostar pela vida de seus filhos”, continua Melissa.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            O aborto é um assunto de direitos humanos, por isso, esta sobrevivente faz parte do movimento pró-vida nos Estados Unidos.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            “Uma vez, li uma estatística que dizia que cada aborto afeta sete pessoas, não apenas a mãe, mas o pai, os avós, irmãos… Se foram feitos 58 milhões de abortos nos últimos 44 anos, equivale a no mínimo 406 milhões de pessoas que sofreram as consequências de um aborto”.
          </p>

          <p class="text-lg leading-relaxed mb-6">
            Assim, Melissa lançou uma mensagem de ânimo para a comunidade pró-vida que está sendo perseguida. “Às pessoas que zombam e ridicularizam a vida humana eu somente posso mostrar amor, podemos amar as pessoas, mas não compartilhar a sua forma de pensar, mesmo se não acreditam que a vida tem valor único”, afirma.
          </p>

          <p class="text-lg leading-relaxed mb-10">
            Melissa também criticou a Planned Parenthood, o primeiro provedor de abortos nos Estados Unidos. “Tenho certeza que se tivessem levado a minha mãe para abortar no centro Planned Parenthood eu não teria sobrevivido: lá não existe piedade. E mesmo que eu tivesse sobrevivido ao aborto, eles fariam tudo para que eu não estivesse viva”, sentencia.
          </p>

          <p class="text-lg leading-relaxed mb-10">
            Agora, Melissa Ohden é autora de vários livros nos quais fala sobre o perdão e o sentido da vida. Além disso, criou o site “Os sobreviventes do aborto”, uma comunidade para que as pessoas que sobreviveram a um aborto possam encontrar ajuda psicológica e social.
          </p>

          <p class="text-lg leading-relaxed mb-12">
            Na vida pessoa, Melissa formou sua própria família. É mãe de duas filhas e a mais velha, Olivia, nasceu no mesmo hospital onde ela foi cuidada após sobreviver ao aborto.
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
