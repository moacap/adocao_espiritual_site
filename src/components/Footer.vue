<script setup></script>

<template>
  <footer class="bg-site-terracotta pt-24 pb-12">
    <div class="container">
      <div
        class="mb-20"
      >
        <!-- Brand -->
        <div class="text-center md:text-left mb-12">
          <h4
            class="text-xl font-bold uppercase tracking-widest mb-4 text-white"
          >
            {{ $t("footer.links1.title") }}
          </h4>
          <p class="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            {{ $t("footer.brand.desc") }}
          </p>
        </div>

        <!-- Links in vertical list on all screen sizes -->
        <ul class="flex flex-col items-center md:items-start space-y-4 text-white/80 text-lg">
          <li>
            <a
              href="#"
              class="hover:text-white transition-colors"
              >{{ $t("footer.links1.item1") }}</a
            >
          </li>
          <li>
            <a
              href="mailto:contato@adocaoespiritual.org.br"
              class="hover:text-white transition-colors"
              >{{ $t("footer.links1.item2") }}</a
            >
          </li>
          <li>
            <a
              href="donate.html"
              class="hover:text-white transition-colors"
              >{{ $t("footer.links1.item3") }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-white transition-colors"
              >{{ $t("footer.links1.item4") }}</a
            >
          </li>
          <li>
            <a
              href="privacy_policy.html"
              class="hover:text-white transition-colors"
              >{{ $t("footer.links1.item5") }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/70 text-[15px]"
      >
        <p>{{ $t("footer.bottom.rights") }}</p>
        <p>{{ $t("footer.bottom.version") }}</p>
      </div>
    </div>
  </footer>
</template>
