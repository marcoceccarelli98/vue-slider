'use strict';

// -----------
//    APP
// -----------

const { createApp } = Vue;

const { useInterval } = Vue;

createApp({
    data() {
        return {
            //IMAGES ARRAY OF OBJ
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            imageIndex: 0,
            isActive: true,
        }
    },
    mounted() {
        // Set interval when component is mounted
        this.autoIncIndex = setInterval(() => {
            this.imageIndex++;
        }, 3000);
    },
    beforeDestroy() {
        // Clear interval when component is destoyed
        clearInterval(this.autoIncIndex);
    },
    methods: {
        incIndex() {
            if (this.imageIndex >= this.images.length - 1) {
                this.imageIndex = 0;
            } else {
                this.imageIndex++;
            }
        },
        decIndex() {
            if (this.imageIndex <= 0) {
                this.imageIndex = this.images.length - 1;
            } else {
                this.imageIndex--;
            }
        },
        setIndex(value) {
            this.imageIndex = value;
        }
    }
}).mount('#app')


// -----------
//   EVENTS
// -----------

// thumbsContainer.addEventListener('click', element => {
//     console.log(activeIndex - 1);
//     activeIndex = element.target.closest('.thumb').getAttribute('data-index');
// });

// const intervalCarousel = setInterval(function () {
//     if (activeIndex >= images.length - 1) {
//         activeIndex = 0;
//     } else {
//         activeIndex++;
//     }
// }, 3000); // 3000 ms = 3sec


// -----------
//  FUNCTIONS
// -----------

// btnPlay.addEventListener('click', () => {
//     const intervalCarousel = setInterval(function () {
//         if (!invertedOrder) {
//             if (activeIndex >= images.length - 1) {
//                 activeIndex = 0;
//             } else {
//                 activeIndex++;
//             }
//         } else {
//             if (activeIndex <= 0) {
//                 activeIndex = images.length - 1;
//             } else {
//                 activeIndex--;
//             }
//         }
//         setActiveImg();
//         setActiveThumb();
//     }, 3000); // 3000 ms = 3sec

// });

// btnPause.addEventListener('click', () => {
//     clearInterval(intervalCarousel);
// });

// btnInvert.addEventListener('click', () => {
//     if (invertedOrder) {
//         invertedOrder = false;
//     } else {
//         invertedOrder = true;
//     }
// })

