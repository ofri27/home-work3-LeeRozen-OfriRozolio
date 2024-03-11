// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
    image: "Images/JohnSmith.png",
  },
  {
    name: "Emily Johnson",
    coins: 50,
    image: "Images/EmilyJohnson.png",
  },
  {
    name: "Michael Williams",
    coins: 50,
    image: "Images/MichaelWilliams.png",
  },
  {
    name: "Jessica Brown",
    coins: 50,
    image: "Images/JessicaBrown.png",
  },
  {
    name: "Christopher Jones",
    coins: 50,
    image: "Images/ChristopherJones.png",
  },
  {
    name: "Ashley Davis",
    coins: 50,
    image: "Images/AshleyDavis.png",
  },
  {
    name: "Matthew Miller",
    coins: 50,
    image: "Images/MatthewMiller.png",
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    image: "Images/AmandaWilson.png",
  },
  {
    name: "David Moore",
    coins: 50,
    image: "Images/DavidMoore.png",
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    image: "Images/SarahTaylor.png",
  },
  {
    name: "James Anderson",
    coins: 50,
    image: "Images/JamesAnderson.png",
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    image: "Images/JenniferThomas.png",
  },
  {
    name: "Robert Jackson",
    coins: 50,
    image: "Images/RobertJackson.png",
  },
  {
    name: "Elizabeth White",
    coins: 50,
    image: "Images/ElizabethWhite.png",
  },
  {
    name: "Daniel Harris",
    coins: 50,
    image: "Images/DanielHarris.png",
  },
  {
    name: "Melissa Martin",
    coins: 50,
    image: "Images/MelissaMartin.png",
  },
  {
    name: "William Thompson",
    coins: 50,
    image: "Images/WilliamThompson.png",
  },
  {
    name: "Linda Garcia",
    coins: 50,
    image: "Images/LindaGarcia.png",
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    image: "Images/JosephMartinez.png",
  },
  {
    name: "Karen Robinson",
    coins: 50,
    image: "Images/KarenRobinson.png",
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Lion.png",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 200,
    color: "grey",
    habitat: "land",
    image: "Images/Elephant.png",
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Giraffe.png",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Tiger.png",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Monkey.png",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Kangaroo.png",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "sea",
    image: "Images/Penguin.png",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Zebra.png",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    image: "Images/Cheetah.png",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
}
generateDataset();


//********************** */
function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
