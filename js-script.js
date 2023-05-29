const addButton = document.getElementById("add");
const input = document.getElementById("userInput");

const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

const ENTER_BUTTON_CODE = 13;

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

let taskArr = [];
function createListElement() {
  // step1: create new li element
  const newLiElement = document.createElement("li");

  // step2: get input value
  let inputValue = input.value;
  const inputNode = document.createTextNode(inputValue);
  newLiElement.appendChild(inputNode);

  // saving to localstorage
  taskArr.push(input.value);
  console.log(taskArr);
  localStorage.setItem("task", JSON.stringify(taskArr));

  // step3: append element to ul and then reset input field
  input.value = "";

  function crossOut() {
    newLiElement.classList.toggle("todos--done");
  }

  newLiElement.addEventListener("click", crossOut);

  // step4: add click event listener to new li
  ul.appendChild(newLiElement);

  // step5: create delete button and append intp new li
  let deleteBtn = document.createElement("button");
  // deleteBtn.appendChild(document.createTextNode("X"));
  const deleteIcon = "<i class='fa-regular fa-circle-xmark fa-lg'></i>";
  deleteBtn.innerHTML = deleteIcon;
  newLiElement.appendChild(deleteBtn);

  function deleteListItem() {
    newLiElement.classList.add("todos--delete");
  }

  // step6: add click event listener to delete button
  deleteBtn.addEventListener("click", deleteListItem);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === ENTER_BUTTON_CODE) {
    createListElement();
  }
}

addButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
