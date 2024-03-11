//click on the submit button will activate the function:
function createNewVisitor(event) {
  event.preventDefault();

  let newVisitorName = document.getElementById("vname").value;
  if (validateFormInputs()) {
    if (!visitorExists(newVisitorName)) {
      makeVisitor(newVisitorName); //making new visitor object to the visitors storage
      window.location.href = "login.html";
    } else {
      alert("Sorry, this name is already in use. Please enter different name.");
      const inputSignUp = document.getElementById("vname");
      inputSignUp.value = "";
    }
  }
}

const validateFormInputs = () => {
  // check if the input exists and has a value
  let vnameInput = document.getElementById("vname");
  return vnameInput && vnameInput.value.trim() !== "";
};

// check if the input name is already exists in visitors storage //
const visitorExists = (name) => {
  const found = visitors.find((visitor) => visitor.name === name);
  if (found) return true; // if found === undefined //
  return false;
};

const makeVisitor = (name) => {
  const visitor = {
    name: name,
    coins: 50,
    image: "Images/newVisitor.jpg",
  };
  visitors.push(visitor); // adding new visitor to the visitors array //
  localStorage.setItem("visitors", JSON.stringify(visitors)); // save to local storage
  return visitor;
};

/*submitting form event listener */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
