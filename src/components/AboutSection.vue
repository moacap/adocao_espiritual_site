<template>
  <section class="py-40 bg-white relative overflow-hidden">
    <div class="container relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-left">
        
        <!-- Left Content -->
        <div class="lg:w-1/2 order-2 lg:order-1">
          <div class="mb-6 inline-block">
             <span class="text-site-terracotta text-sm font-bold uppercase tracking-widest pb-1">
               {{ $t('about.badge') }}
             </span>
          </div>
          <h2 class="text-site-dark text-4xl md:text-5xl leading-tight mb-8">
            {{ $t('about.title1') }} <br>
            {{ $t('about.title2') }}
            <span class="font-script text-site-terracotta text-7xl lowercase block mt-2">{{ $t('about.title3') }}</span>
          </h2>
          
          <div class="space-y-6 text-site-dark/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              {{ $t('about.para1') }}
            </p>
            <p>
              {{ $t('about.para2') }}
            </p>
          </div>

          <a 
            href="#" 
            class="inline-block bg-site-terracotta text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-site-dark transition-all duration-300 mt-10 shadow-lg"
          >
            {{ $t('about.button') }}
          </a>
        </div>

        <!-- Right Image Collage -->
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="grid grid-cols-2 gap-6 relative">
            <div class="space-y-6">
              <div class="rounded-sm overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto1_ee9008fbf4.webp" alt="Baby 1" class="w-full h-auto object-cover aspect-[4/5]" />
              </div>
              <div class="rounded-sm overflow-hidden shadow-2xl transform translate-x-12 hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto2_4699f045db.webp" alt="Baby 2" class="w-full h-auto object-cover aspect-square" />
              </div>
            </div>
            <div class="space-y-6 pt-12">
              <div class="rounded-sm overflow-hidden shadow-2xl transform -translate-x-6 hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto3_f31817b12c.webp" alt="Baby 3" class="w-full h-auto object-cover aspect-square" />
              </div>
              <div class="rounded-sm overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                <img src="https://cms.adocaoespiritualrio.org.br/uploads/foto4_608a3d20a8.webp" alt="Baby 4" class="w-full h-auto object-cover aspect-[4/5]" />
              </div>
            </div>
            <!-- Decorative Element -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-site-beige -z-10 rounded-sm"></div>
          </div>
        </div>

      </div>
    </div>

    <!-- Single Wavy Divider footer-terracotta -->
    <div class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[30px] md:h-[60px] lg:h-[100px]">
        <path d="M0,0c0,0,300,120,600,120s600,-120,600,-120V120H0V0z" fill="#BC6F65"></path>
      </svg>
    </div>
  </section>
</template>
