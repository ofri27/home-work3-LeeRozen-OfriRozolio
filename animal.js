let selectedAnimal = animals.find((animal) => animal.name === localStorage.getItem("selectedAnimal"));


function renderAnimal() {
  const selectedName = document.getElementById("name");
  const selectedWeight = document.getElementById("weight");
  const selectedHeight = document.getElementById("height");
  const selectedColor = document.getElementById("color");
  const selectedHabitat = document.getElementById("habitat");
  const selectedIsPredator = document.getElementById("isPredator");

  const imageDiv = document.getElementById("image");
  const animalImage = document.createElement("img");
  imageDiv.appendChild(animalImage);
  animalImage.src = selectedAnimal.image;
  selectedName.innerText = `Name: ${selectedAnimal.name}`;
  selectedWeight.innerText = `Weight: ${selectedAnimal.weight}`;
  selectedHeight.innerText = `Height: ${selectedAnimal.height}`;
  selectedColor.innerText = `Color: ${selectedAnimal.color}`;
  selectedHabitat.innerText = `Habitat: ${selectedAnimal.habitat}`;
  selectedIsPredator.innerText = `Is Predator? : ${selectedAnimal.isPredator}`;
}

function renderRelatedAnimals() {
  let habitat = selectedAnimal.habitat;
  let habitatDiv = document.getElementById("related-animals");
  habitatDiv.innerHTML = "";

  AnimalsForView.forEach((animal) => {
    if (animal.habitat === habitat) {
      const relatedCard = createRelatedAnimalCard(animal);
      habitatDiv.appendChild(relatedCard);
    }
  });
  
}

function feedAnimal() {
  // ממשו את הלוגיקה של האכלת חיה
  // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
}

function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}

window.addEventListener("load", renderAnimal());
window.addEventListener("load", renderRelatedAnimals());

// fetch('navbar.html')
// .then(response => response.text())
// .then(data => {
//     document.body.innerHTML = data + document.body.innerHTML;
// });

