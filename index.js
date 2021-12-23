const imageContainer = document.querySelector('.image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dayElement = document.getElementById('day');
const desc = document.querySelector('.description');

imgs = [
    {src: "images/day1_250.jpg",
    alt: "Paddy arrives with some goodies"},
    {src: "images/day2_250.jpg",
    alt: "Paddy frying some eggs"},
    {src: "images/day3_250.jpg",
    alt: "Paddy goes bobsleighing down towel hill"},
    {src: "images/day4_250.jpg",
    alt: "Paddy gives out some play dough haircuts"},
    {src: "images/day5_250.jpg",
    alt: "Paddy gets the other toys climbing the rope up to the shelf"},
    {src: "images/day6_250.jpg",
    alt: "Paddy having a sleep after a busy night"},
    {src: "images/day7_250.jpg",
    alt: "Paddy sitting on top of Christmas Tree"},
    {src: "images/day8_250.jpg",
    alt: "Paddy eating a load of sweets"},
    {src: "images/day9_250.jpg",
    alt: "Paddy bringing a game of find the sweets under the cups"},
    {src: "images/day10_250.jpg",
    alt: "Paddy on a swing on the light"},
    {src: "images/day11_250.jpg",
    alt: "Paddy climbing up the kitchen wall"},
    {src: "images/day12_250.jpg",
    alt: "Paddy sitting with dinosaurs"},
    {src: "images/day13_250.jpg",
    alt: "Paddy driving the shoe shoe train"},
    {src: "images/day14_250.jpg",
    alt: "Paddy playing in the kinetic sand"},
    {src: "images/day15_250.jpg",
    alt: "Paddy with Frosty the toilet roll Snowman"},
    {src: "images/day16_250.jpg",
    alt: "Paddy reading Christmas stories to the toys"},
    {src: "images/day17_250.jpg",
    alt: "Paddy got stuck in the blinds when trying to look out the window"},
    {src: "images/day18_250.jpg",
    alt: "Paddy introduces new Elf Bella with a snowball fight"},
    {src: "images/day19_250.jpg",
    alt: "Paddy and Bella sitting on the shelf"},
    {src: "images/day20_250.jpg",
    alt: "Paddy and Bella getting their hot air balloon stuck in the tree"},
    {src: "images/day21_250.jpg",
    alt: "Paddy and Bella going down the zip wire"},
    {src: "images/day22_250.jpg",
    alt: "Paddy and Bella playing Hungry Hippos"},
    {src: "images/day23_250.jpg",
    alt: "Paddy and Bella turn Cuddles into a Mummy"},
    {src: "images/day24_250.jpg",
    alt: "Paddy and Bella have returned to Santa but left some treats"},
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
        desc.textContent = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    } else {
        currentImg = 0;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        desc.textContent = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    }
};

function prevImage() {
    if(currentImg > 0) {
        currentImg--;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        desc.textContent = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    } else {
        currentImg = imgs.length - 1;
        imageContainer.src = imgs[currentImg].src;
        imageContainer.alt = imgs[currentImg].alt;
        desc.textContent = imgs[currentImg].alt;
        dayElement.textContent = currentImg + 1;
    }
};

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);