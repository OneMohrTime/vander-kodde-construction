var swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  watchSlidesProgress: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});

var swiper2 = new Swiper('.mySwiper2', {
  effect: 'creative',
  loop: true,
  spaceBetween: 44,
  autoHeight: true,
  centeredSlides: true,
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

// const customLightboxHTML = `<div id="glightbox-body" class="c-modal__container">
//   <div class="c-modal__slider visible"></div>
//   <div class="c-modal__overlay"></div>
//   <div class="c-modal">
//     <div id="glightbox-slider" class="c-modal__slider"></div>
//     <button class="gnext c-button" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
//     <button class="gprev c-button" tabindex="1" aria-label="Previous">{prevSVG}</button>
//     <button class="gclose c-button" tabindex="2" aria-label="Close">{closeSVG}</button>
//   </div>
// </div>`;

// let customSlideHTML = `<div class="gslide">
//   <div class="gslide-inner-content">
//     <div class="ginner-container">
//       <div class="gslide-media"></div>
//       <div class="gslide-description">
//         <div class="gdesc-inner">
//           <h4 class="gslide-title"></h4>
//           <div class="gslide-desc"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>`;

// Vars
const lightbox = GLightbox({
  selector: '.swiper-slide-link',
  // lightboxHTML: customLightboxHTML,
  // slideHTML: customSlideHTML,
  // skin: 'supercool',
  autoplayVideos: false,
  autofocusVideos: true,
  descPosition: 'bottom',
  draggable: false,
  loop: true,
  preload: false,
  touchNavigation: true,
  zoomable: false,
});
