<script>
  import { onDestroy, onMount } from 'svelte';
  let currentSlide = 0;
  let slides = [];
  // let interval;

  onMount(() => {
    slides = document.querySelectorAll('.carousel-item');
    // interval = setInterval(nextSlide, 7000)
  });

  // onDestroy(() => {
  //   clearInterval(interval);
  // });

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    smoothScrollTo(slides[currentSlide]);
  }

  function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    smoothScrollTo(slides[currentSlide]);
  }

  function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
</script>

<div class="carousel relative w-full overflow-hidden h-full">
  <slot />
  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <button on:click={prevSlide} class="text-4xl rotate-180 ml-8" aria-label="carousel back">
      <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.375 1.75L12.625 13L1.375 24.25" stroke="#1E1E1E" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button on:click={nextSlide} class="text-4xl mr-8" aria-label="carousel forward">
      <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.375 1.75L12.625 13L1.375 24.25" stroke="#1E1E1E" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</div>