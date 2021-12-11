const imageContainer = document.querySelector('.image-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dayElement = document.getElementById('day');

imgs = [
    {src: "/images/day1_475.jpg",
    alt: "Paddy arrives with some goodies"},
    {src: "./images/day2_475.jpg",
    alt: "Paddy frying some eggs"},
    {src: "./images/day3_475.jpg",
    alt: "Paddy goes bobsleighing down towel hill"},
    {src: "./images/day4_475.jpg",
    alt: "Paddy gives out some play dough haircuts"},
    {src: "./images/day5_475.jpg",
    alt: "Paddy gets the other toys climbing the rope up to the shelf"},
    {src: "./images/day6_475.jpg",
    alt: "Paddy sitting on top of Christmas Tree"},
    {src: "./images/day7_475.jpg",
    alt: "Paddy eating a load of sweets"},
    {src: "./images/day8_475.jpg",
    alt: "Paddy bringing a game of find the sweets under the cups"},
    {src: "./images/day9_475.jpg",
    alt: "Paddy on a swing on the light"},
    {src: "./images/day10_475.jpg",
    alt: "Paddy climbing up the kitchen wall"},
    {src: "./images/day11_475.jpg",
    alt: "Paddy sitting with dinosaurs"},
];

let currentImg = 0;
let day = 1;
dayElement.textContent = day;

function nextImage() {
    let width = window.innerWidth;
    if(currentImg < imgs.length - 1) {
        currentImg++;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    } else {
        currentImg = 0;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    }
};

function prevImage() {
    if(currentImg > 0) {
        currentImg--;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    } else {
        currentImg = imgs.length - 1;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    }
};

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);