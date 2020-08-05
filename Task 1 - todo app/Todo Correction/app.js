var todoList = ["cook", "work", "sleep"];

var htmlList = document.getElementById("list");
var todoItem = document.getElementById("todoItem");

//to append item to array(todoList) and DOM
const appendToList = () => {
  event.preventDefault();

  if (todoItem.value.trim() !== "") {
    let i = todoList.push(todoItem.value) - 1;
    htmlList.insertAdjacentHTML(
      "beforeend",

      `<div class="inline" id=${i} ><form class="ed" onSubmit="editItem(${i})"><input type="text" value="${todoItem.value}" id="edit${i}" disabled/></form><section class="inline"><div class="edit" id="editBtn${i}" onclick="openEditItem(${i})">edit</div><div class="delete" onclick="deleteItem(${i})">delete</div></section></div>`
    );

    todoItem.value = "";
    console.log(todoList);
  }
};

//to delete item from both array and DOM
const deleteItem = (itemId) => {
  todoList.splice(itemId, 1);

  var itemToDelete = document.getElementById(`${itemId}`);

  itemToDelete.style.display = "none";
  console.log(todoList);
};

//To open  existing item in the todo list for editing
const openEditItem = (itemId) => {
  let editBtn = document.getElementById(`editBtn${itemId}`);
  let itemToEdit = document.getElementById(`edit${itemId}`);
  itemToEdit.removeAttribute("disabled");
  itemToEdit.style.borderBottom = "1px solid blue";
  editBtn.style.display = "none";
};

//to edit item from both array and DOM
const editItem = (itemId) => {
  event.preventDefault();
  let itemToEdit = document.getElementById(`edit${itemId}`);
  let editBtn = document.getElementById(`editBtn${itemId}`);
  if (itemToEdit.value.trim().length > 0) {
    todoList[itemId] = itemToEdit.value;
  } else {
    itemToEdit.value = todoList[itemId];
  }
  itemToEdit.setAttribute("disabled", true);
  itemToEdit.style.border = "none";
  editBtn.style.display = "block";

  console.log(todoList);
};

//To display existing todoItems in the DOM
const renderList = () => {
  if (todoList.length > 0) {
    todoList.map((todo, i) => {
      htmlList.insertAdjacentHTML(
        "beforeend",

        `<div class="inline" id=${i} ><form class="ed" onSubmit="editItem(${i})"><input type="text" value="${todo}" disabled id="edit${i}"/></form><section class="inline"><div class="edit" onclick="openEditItem(${i})" id="editBtn${i}">edit</div><div class="delete" onclick="deleteItem(${i})">delete</div></section></div>`
      );
    });
  }
};