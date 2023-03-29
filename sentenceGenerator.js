
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let names = ["Тодор","Иван","Петър","Явор", "Мария"];
let places = ["Варна","София","Ямбол","Сливен","Хасково"];
let verbs = ["яде","държи","вижда","играе с","носи"];
let nouns = ["камъни","торти","ябълки","лаптопи","колелета"];
let adverbs = ["бавни","усърдни","топли","тъжни", "бързи"];
let details = ["близо до реката","вкъщи","в парка"];

function getRandomWord(arr){
    let word = arr[Math.floor(Math.random()*arr.length)];
    return word;
}

let randomName = getRandomWord(names);
let randomPlaces = getRandomWord(places);
let randomVerbs = getRandomWord(verbs);
let randomNouns = getRandomWord(nouns);
let randomAdverbs = getRandomWord(adverbs);
let randomDetails = getRandomWord(details);

let who = `${randomName} от ${randomPlaces}`;
let action = `${randomVerbs} ${randomAdverbs} ${randomNouns}`;
let sentence = `${who} ${action} ${randomDetails}`;

console.log(`Hello, this is random generator`);
console.log(sentence);





