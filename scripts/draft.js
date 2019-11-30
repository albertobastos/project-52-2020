// Sorteo de la rotación para proponer temas

const authors = require('../src/data/authors.json');

const names = Object.values(authors);

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
for(let i=0;i<names.length*100;i++) shuffle(names);

names.forEach((name, index) => {
  console.log(`#${index+1}: ${name}`);
});
