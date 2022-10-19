import * as customFunctions from './modules/functions.js'
customFunctions.handleTabs()

// vendors
import Swiper, { Navigation, Pagination } from 'swiper'

// printing eqv swiper
const swiper1 = new Swiper('.swiper--printing', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 40,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        676: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    modules: [Navigation, Pagination],
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// postprinting eqv swiper
const swiper2 = new Swiper('.swiper--postprinting', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 40,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        676: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    modules: [Navigation, Pagination],
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// postprinting eqv swiper
const swiper3 = new Swiper('.swiper--works', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 40,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        676: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },

    modules: [Navigation, Pagination],
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
