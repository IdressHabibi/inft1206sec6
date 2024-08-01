/*
NAME: Idress habibi
FILENAME: main.js
LAST UPDATE DATE: 2024_07-31
DESCRIPTION: Web development-Assignment 4-Part 1
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storytext = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const rawinsertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const rawinserty = ['the soup kitchen', 'Disneyland', 'the White House'];
const rawinsertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {

    let finalstory = storytext;

    const insertx = randomValueFromArray(rawinsertx);
    const inserty = randomValueFromArray(rawinserty);
    const insertz = randomValueFromArray(rawinsertz);

    finalstory = finalstory.replaceAll(':insertx:',insertx);
    finalstory = finalstory.replaceAll(':inserty:',inserty);
    finalstory = finalstory.replaceAll(':insertz:',insertz);

    if(customName.value !== '') {
    const name = customName.value;
    finalstory = finalstory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300*0.0714286);
        const temperature =  Math.round((94-32) * 5 / 9);
        finalstory = finalstory.replaceAll('94 fahrenheit', temperature+' centigrade');
        finalstory = finalstory.replaceAll('300 pounds', weight+' stone');
    }

    story.textContent = finalstory;
    story.style.visibility = 'visible';
}