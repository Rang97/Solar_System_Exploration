// script.js

document.addEventListener("DOMContentLoaded", function () {
   // 1. Main Swiper
   const mainSwiper = new Swiper(".main_slide", {
      loop: true,
      speed: 800,
      autoplay: {
         delay: 4000,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      keyboard: {
         enabled: true,
      },
   });

   // 2. Main Guide Slider
   const guideSwiper = new Swiper(".guide_slide", {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
         el: ".guide_slide .swiper-pagination",
         clickable: true,
      },
      breakpoints: {
         640: { slidesPerView: 2 },
         1024: { slidesPerView: 3 },
      },
   });

   // 3. Satellite Slider
   const moonSwiper = new Swiper(".moon_slide", {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
         nextEl: "#moonNext",
         prevEl: "#moonPrev",
      },
      breakpoints: {
         640: { slidesPerView: 2 },
         1024: { slidesPerView: 3 },
      },
   });

   // 4. Mobile Navigation Toggle
   const openSideBtn = document.getElementById("openSideBtn");
   const closeSideBtn = document.getElementById("closeSideBtn");
   const sideDrawer = document.getElementById("sideDrawer");
   const sideOverlay = document.getElementById("sideOverlay");

   function openDrawer() {
      if (sideDrawer && sideOverlay) {
         sideDrawer.classList.remove("translate-x-full");
         sideOverlay.classList.remove("opacity-0", "pointer-events-none");
      }
   }

   function closeDrawer() {
      if (sideDrawer && sideOverlay) {
         sideDrawer.classList.add("translate-x-full");
         sideOverlay.classList.add("opacity-0", "pointer-events-none");
      }
   }

   if (openSideBtn) openSideBtn.addEventListener("click", openDrawer);
   if (closeSideBtn) closeSideBtn.addEventListener("click", closeDrawer);
   if (sideOverlay) sideOverlay.addEventListener("click", closeDrawer);
});

// 5. Tab Switching Logic (HTML onclick 속성 연결을 위해 전역 함수로 지정)
function switchTab(tab) {
   const newsContent = document.getElementById("tabNewsContent");
   const guideContent = document.getElementById("tabGuideContent");
   const newsBtn = document.getElementById("tabNewsBtn");
   const guideBtn = document.getElementById("tabGuideBtn");

   if (!newsContent || !guideContent || !newsBtn || !guideBtn) return;

   if (tab === "news") {
      newsContent.classList.remove("hidden");
      guideContent.classList.add("hidden");
      newsBtn.className = "px-6 py-2.5 bg-cyanHud text-black font-bold uppercase transition-all";
      guideBtn.className =
         " px-6 py-2.5 bg-transparent text-gray-400 font-bold uppercase hover:text-white transition-all";
   } else {
      newsContent.classList.add("hidden");
      guideContent.classList.remove("hidden");
      guideBtn.className = " px-6 py-2.5 bg-cyanHud text-black font-bold uppercase transition-all";
      newsBtn.className =
         " px-6 py-2.5 bg-transparent text-gray-400 font-bold uppercase hover:text-white transition-all";
   }
}
