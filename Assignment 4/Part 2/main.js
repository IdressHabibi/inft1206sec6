/*
NAME: Idress habibi
FILENAME: main.js
LAST UPDATE DATE: 2024_07-31
DESCRIPTION: Web development-Assignment 4-Part 2
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];


/* Declaring the alternative text for each image file */
const alttext = ['closeup of eye','fossil/stone','orchids','painting egyptian','brown moth']
/* Looping through images */
for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', imageclick => {
    displayedImage.src = imageclick.target.src;
    displayedImage.alt = imageclick.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
