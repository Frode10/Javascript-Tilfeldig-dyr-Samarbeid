// let animal = document.getElementById("animal");

// animal.innerText = "hei jeg er et dyr";

const animals = [
  {
    dyr: "Løve",
    land: "Afrika",
    image: "./images/lion.jpg",
  },
  {
    dyr: "Elefant",
    land: "Afrika",
    image: "./images/elephant.jpg",
  },
  {
    dyr: "Sau",
    land: "Afrika",
    image: "./images/sheep.jpg",
  },
  {
    dyr: "Ekk Korn",
    land: "Afrika",
    image: "./images/squirrel.jpg",
  },
  {
    dyr: "Snake",
    land: "Afrika",
    image: "./images/snake.jpg",
  },
  {
    dyr: "Monkey",
    land: "Afrika",
    image: "./images/monkey.jpg",
  },
  {
    dyr: "Dog",
    land: "Afrika",
    image: "./images/dog.jpg",
  },
  {
    dyr: "Pingvin",
    land: "Afrika",
    image: "./images/pingvin.jpg",
  },
  {
    dyr: "Antilope",
    land: "Afrika",
    image: "./images/antilope.jpg",
  },
  {
    dyr: "Donkey",
    land: "Afrika",
    image: "./images/donkey.jpg",
  },
];

// button med index valgt 0
let btnDyr = document.getElementsByTagName("button")[0];
const dyreContainer = document.getElementById("container");
btnDyr.addEventListener("click", visDyr);

function visDyr() {
  console.log("Her er et tilfeldig dyr");

  // Tømmer container
  dyreContainer.innerHTML = "";

  // tilfeldig dyr
  const randomIndex = Math.floor(Math.random() * animals.length);
  const randomAnimal = animals[randomIndex];

  // lager ul og li
  const ul = document.createElement("ul");
  const liste = document.createElement("li");

  // legger dyr type i ul
  ul.textContent = `${randomAnimal.dyr}`;
  dyreContainer.appendChild(ul);

  // IMAGE
  const img = document.createElement("img");
  img.src = randomAnimal.image;
  liste.appendChild(img);
  ul.appendChild(liste);
}

// console.log(animals.length);
// console.log(animals.map);
