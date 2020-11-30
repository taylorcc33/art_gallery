let user1 = { name: "Tony", ranking: "2100" };
let user2 = { name: "Sally", ranking: "1100" };
// state
let state = {
  headerText: "Users",
  users: [user1, user2],
  sortBy: "ranking",
};
const addUser = () => {
  //do stuff
  console.log("add user here");
  // get user input
  let name = prompt("enter name");
  let rank = prompt("enter rank");
  // add to state
  let newUser = { name: name, ranking: rank };
  state.users.push(newUser);
  // call render
  render();
};
const updateUser = (index) => {
  //dostuff
  console.log("update User clicked");
  console.log(index);
  let name = prompt("enter name");
  let rank = prompt("enter rank");
  // add to state
  state.users[index].name = name;
  state.users[index].ranking = rank;
  // call render
  render();
};
const deleteUser = (index) => {
  console.log(index);
  console.log("delete called");
  const filteredUser = state.users.filter((person, currentIndex) => {
    return currentIndex !== index;
  });
  state.users = filteredUser;
  render();
};
const renderUsers = () => {
  // dostuff
  let htmlString = `<div class='list'>`;
  // loop over user add each user to htmlstring
  state.users.forEach((person, index) => {
    //do stuff
    htmlString += `<div class='person'>
                    <div onclick='updateUser(${index})'>${index}) ${person.name} ranking:${person.ranking}</div>
                    <button onclick='deleteUser(${index})'>delete</button>
                   </div>`;
  });
  htmlString += `</div>`;
  return htmlString;
};
// render function - this is responsible for taking state and rendering to the dom ie the web convert to html
const render = () => {
  console.log("render called");
  let root = document.getElementById("root");
  let htmlString = `<h1>${state.headerText}</h1><br/>`;
  htmlString += `<button id='add' onclick='addUser()'>add User</button>`;
  htmlString += renderUsers();
  root.innerHTML = htmlString;
};
// document.getElementById('add').addEventListener('click',()=>{})
// intial render
render();
console.log("script loaded");