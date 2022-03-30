// SETUP
const searchBtn = document.getElementById("searchBtn");
const luckyBtn = document.getElementById("luckyBtn");

//*******************************************************
//Search button flow
const searchFunc = async() => {
    //click and show search results page
  const url = await fetch('http://localhost:3000/search');
  window.location.href = "https://google.com";
};

//*******************************************************
//Random button flow

const luckyFunc = async() => {
    const response = await fetch('http://localhost:3000/random'); //fetches promise from server at random endpoint
    const url = await response.text(); //translates promise to text using .text() method and assign string to url variable
    window.location.href = url; //new window set to url
};

searchBtn.addEventListener("click", searchFunc);
luckyBtn.addEventListener("click", luckyFunc);
