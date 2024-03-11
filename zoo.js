let animalsForView = [...animals];

if (localStorage.getItem("animals") === null) {
  localStorage.setItem("animals", JSON.stringify(animalsForView)); // initial load to storage - loading the array to the storage
} else { // copy out the info from local storage
  animalsForView = JSON.parse(localStorage.getItem("animals")); // taking the most updated storage info
}

// getting inputs for filtering
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  const weightInput = document.getElementById("weight-input");
  setFilter("weight", weightInput.value);

  const heightInput = document.getElementById("height-input");
  setFilter("height", heightInput.value);

  const nameInput = document.getElementById("animal-name-input");
  setFilter("name", nameInput.value);

  const habitatInput = document.getElementsByName("habitat"); // for a radio input we need to get the name of the radio section
  setFilter("habitat", habitatInput.value);

  const predatorInput = document.getElementByName("predator");  // for a radio input we need to get the name of the radio section
  setFilter("predator", predatorInput.value);

  const colorInput = document.getElementById("colorDropdown"); 
  setFilter("color", colorInput.value);

  localStorage.setItem("animals", JSON.stringify(animalsForView));
  renderAvailableAnimals(); 
});


function renderAvailableAnimals() {
  const cardsContainer = document.getElementById("animal-cards");

  animalsForView.forEach(animal => {
      const card = document.createElement("div");
      card.classList.add("animal-cards");

      const name = document.createElement("p");
      name.textContent = animal.name;

      const img = document.createElement("img");
      img.src = animal.image;
      img.alt = "animal photo"; 

      card.appendChild(img);
      card.appendChild(name);

      card.addEventListener("click", () => {
          alert(`Selected ${animal.name}`);
          visitAnimal(animal.name);
      });

      cardsContainer.appendChild(card);
  });
}

function visitAnimal(animalName) {
  localStorage.setItem("selectedAnimal", animalName);
  window.location.href = "./animal.html";
}

function setFilter(filterKey, filterValue) {
  localStorage.setItem(JSON.stringify(filterKey,filterValue));
  if (filterValue) { // only if filter actually selected. no filter - no array changing
    if(filterKey === "height") 
    {
      animalsForView = animalsForView.filter((animal) => animal.height >= animal.filterValue); 
    }
    if(filterKey === "weight")
    {
      animalsForView = animalsForView.filter((animal) => animal.weight >= animal.filterValue);
    }
    if(filterKey === "name")
    {
      animalsForView = animalsForView.filter((animal) => animal.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    if(filterKey === "color" || filterValue !== "All") 
    {
      animalsForView = animalsForView.filter((animal) => animal.color === filterValue);
    }
    else // habitat, predator
    {
      animalsForView = animalsForView.filter((animal) => animal.filterKey === filterValue);
    }
  }
}


// dynamicly adding the colors into the dropdown input options
const colorsAdd = () => {
  const availableColors = [...new Set(animals.map((animal) => animal.color))]; 
const colorDropdown = document.getElementById("colorDropdown");

availableColors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  colorDropdown.appendChild(option);
});
}

window.addEventListener("load",renderAvailableAnimals);
window.addEventListener("load",colorsAdd);

// fetch('navbar.html')
// .then(response => response.text())
// .then(data => {
//     document.body.innerHTML = data + document.body.innerHTML;
// });
