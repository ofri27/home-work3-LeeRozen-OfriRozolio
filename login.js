
let currentVisitor = {
  name: "",
  coins: "",
  image: "",
  animalsVisited: [],
};

let visitorsForView = [...visitors];

// rendering the visitors cards
const renderVisitors = () => {
  const VisitorCards = visitorsForView.map(showVisitorCards);
  const VisitorsPlaceholder = document.getElementById("placeholder");
  VisitorsPlaceholder.innerHTML = "";

  if (!VisitorCards.length) {
    VisitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  VisitorsPlaceholder.append(...VisitorCards);
};

// creating html card for visitor
const showVisitorCards = (visitor) => {
  const template = `
        <img class="card-img-top" src="${visitor.image}" alt="${visitor.name}"/>
          <div class="card-body">
            <p class="card-text"> ${visitor.name}</p>
            <p class="card-text">Coins : ${visitor.coins}</p>
            <form id="connectF">
            <button type="submit" id="select-vis-btn" name="choose" >choose me </button>
            </form>
          </div>
        </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;

  const selectBtn = wrapper.querySelector("#select-vis-btn");

  replaceVisitor(selectBtn, visitor);
  return wrapper;
};

// initialization & replacing visitor
const replaceVisitor = (btn, vis) => {

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    let currentVisitor = localStorage.getItem("currentVisitor"); // checking if any visitor already selected

    if (currentVisitor && currentVisitor !== vis.name) {  // in case visitor already selected 
      const playerChoice = confirm("There is already selected visitor. Are you sure you want to disconnect?");

      if (playerChoice) savingSelectedVisitor(vis.name);
      window.location.href = "zoo.html";
    }
    else savingSelectedVisitor(vis.name); // in case non visitor selected before
  });
  
}

//saving selected visitor to local storage as current visitor 
const savingSelectedVisitor = (name) => {
  let selectedVisitor = visitorsForView.find((visitor) => visitor.name === name);
 
  if (selectedVisitor) {
    const {name, coins, image} = selectedVisitor;
    currentVisitor.name = name;
    currentVisitor.coins = coins;
    currentVisitor.image = image;

    localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
  }
  window.location.href = "zoo.html";

};


// creating search input + filtering cards
const searchVisitor = () => {
  const queryInput = document.createElement("input");
  const queryinputDiv = document.getElementById("queryinputDiv");
  queryInput.id = "search-input";
  queryInput.placeholder = "Search visitors...";
  queryinputDiv.className = "search-div";
  queryInput.oninput = (e) => {
    visitorsForView = visitors.filter((visitor) =>
      visitor.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderVisitors();
  };
  queryinputDiv.appendChild(queryInput);
  return queryInput;
};

// text to show when the searching doesnt have results + clear botton for the search field
const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
      <h2>No Visitors Found</h2>
      <p>We're sorry, but no visitors match your search or filter criteria.</p>
      <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
      `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener("click", clearSearchBox);
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("search-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors;
};

// loading current visitor from local storage
const getVisFromStorage = () => {
  const localStorageVis = JSON.parse(localStorage.getItem("currentVisitor"));

  if (localStorageVis) {
    currentVisitor = { ...localStorageVis };
  }
}

searchVisitor();

// get visitor when coming back 
window.addEventListener("load", getVisFromStorage);

// call the function to display visitor cards when the page loads
window.addEventListener("load", renderVisitors);
