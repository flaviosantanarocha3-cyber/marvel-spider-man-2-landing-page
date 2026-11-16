/*
SCRIPT DA LANDING PAGE SPIDER-MAN 2

*/

/* ============================================================
   1. CARROSSEL DE VIDEOS (Swiper)
   
   ============================================================ */
const swiper = new Swiper('.swiper', {

    loop: true,          // ao chegar no ultimo video, volta ao primeiro
    speed: 600,          // duracao da animacao de troca (milissegundos)

    // troca de slide automatica a cada 4 segundos
    autoplay: {
        delay: 4000,
        // mesmo se o usuario interagir, o autoplay volta depois
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',   // onde as bolinhas aparecem
        clickable: true,            // permite clicar nas bolinhas
    },

    navigation: {
        nextEl: '.swiper-button-next',   // seta proximo
        prevEl: '.swiper-button-prev',   // seta anterior
    },

    // quantos cards aparecem ao mesmo tempo, por tamanho de tela
    breakpoints: {
        320: {                    // celular: 1 card por vez
            slidesPerView: 1,
            spaceBetween: 16,
        },
        767: {                  // tablet: 2 cards por vez
            slidesPerView: 2.1,
            spaceBetween: 24,
        },
        1024: {                 // desktop: 3 cards por vez
            slidesPerView: 3.1,
            spaceBetween: 24,
        },
        1200: {                 // desktop: 3 cards por vez
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

// Inicialização padrão
// ========================================
// LOCOMOTIVE SCROLL
// ========================================
AOS.init({
    duration: 1800,
    easing: 'ease-out-cubic',
    once: false,
    offset: 100
});
