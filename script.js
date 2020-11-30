
let user1 = {name:'Tony', ranking:2100};
let user2 = {name:'Sally', ranking: 1100};

// state - current state of data
let state = {
  headerText: 'Users',
  users: [user1, user2],
  sortBy: 'ranking', 
};

const renderUsers = () => {
  return `<div>users here</div>`
};

// render function - takes state and rendering it to DOM
const render = () => {
  console.log("render called");
  let root = document.getElementById("root");
  let htmlString = `<h1>${state.headerText}</h1>`;

  htmlString += renderUsers();
  root.innerHTML = htmlString;
  
};

// initial render
render();

console.log('script loaded');