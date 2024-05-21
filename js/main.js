'use strict';

//IMAGES ARRAY OF OBJ
const images = [
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
];

//Declare elements
const body = document.body;
const itemsContainer = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const item = document.createElement('div');
const img = document.createElement('img');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');

const thumbsContainer = document.querySelector('.thumbs');

let invertedOrder = false;

// -----------
//    MAIN
// -----------

//Declare index
let activeIndex = 0;

insertImages();

insertThumbs();

insertBtn();

// -----------
//   EVENTS
// -----------

next.addEventListener('click', () => {
    if (activeIndex >= images.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    setActiveImg();
    setActiveThumb();
});

prev.addEventListener('click', () => {
    if (activeIndex <= 0) {
        activeIndex = images.length - 1;
    } else {
        activeIndex--;
    }
    setActiveImg();
    setActiveThumb();
});

thumbsContainer.addEventListener('click', element => {
    console.log(activeIndex - 1);
    activeIndex = element.target.closest('.thumb').getAttribute('data-index');
    //activeIndex = document.querySelector('.thumbs .thumb.active').getAttribute('data-index');
    setActiveThumb();
    setActiveImg();
});

const intervalCarousel = setInterval(function () {
    if (activeIndex >= images.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    setActiveImg();
    setActiveThumb();
}, 3000); // 3000 ms = 3sec


// -----------
//  FUNCTIONS
// -----------

function insertThumbs() {
    images.forEach((element, index) => {
        const thumb = document.createElement('div');
        const img = document.createElement('img');
        thumb.classList.add('thumb');
        thumb.setAttribute('data-index', index);
        img.src = element.image;
        thumb.append(img);
        thumbsContainer.append(thumb);
    });
}

function insertImages() {
    images.forEach((element, index) => {
        const item = document.createElement('div');
        const img = document.createElement('img');
        item.classList.add('item');
        item.setAttribute('data-index', index);
        img.src = element.image;
        item.append(img);
        itemsContainer.append(item);
    });
}

function insertBtn() {
    const btnContainer = document.createElement('div');
    const btnPlay = document.createElement('button');
    const btnPause = document.createElement('button');
    const btnInvert = document.createElement('button');

    btnContainer.classList.add('btn-container');

    btnPlay.innerHTML = 'Play';
    btnPlay.classList.add('btn');
    btnPause.innerHTML = 'Pause';
    btnPause.classList.add('btn');
    btnInvert.innerHTML = 'Invert';
    btnInvert.classList.add('btn');

    btnPlay.addEventListener('click', () => {
        const intervalCarousel = setInterval(function () {
            if (!invertedOrder) {
                if (activeIndex >= images.length - 1) {
                    activeIndex = 0;
                } else {
                    activeIndex++;
                }
            } else {
                if (activeIndex <= 0) {
                    activeIndex = images.length - 1;
                } else {
                    activeIndex--;
                }
            }
            setActiveImg();
            setActiveThumb();
        }, 3000); // 3000 ms = 3sec

    });

    btnPause.addEventListener('click', () => {
        clearInterval(intervalCarousel);
    });

    btnInvert.addEventListener('click', () => {
        if (invertedOrder) {
            invertedOrder = false;
        } else {
            invertedOrder = true;
        }
    })

    btnContainer.append(btnPlay);
    btnContainer.append(btnPause);
    btnContainer.append(btnInvert);

    body.append(btnContainer);
}

function setActiveImg() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('active');
    });
    items[activeIndex].classList.add('active');
    h1.innerText = images[activeIndex].title;
    h3.innerHTML = images[activeIndex].text
    itemsContainer.append(h1);
    itemsContainer.append(h3);
}

function setActiveThumb() {
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbs[activeIndex].classList.add('active');
    console.log(thumbs[activeIndex]);
}

