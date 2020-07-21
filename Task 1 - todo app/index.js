var newTodo = document.getElementById("todoItem");
var todosContainer = document.getElementById("todos-container");
var addTodoButton = document.getElementById("addTodo");
var completedTodos = document.getElementById("todosCompleted");
var uncompletedTodos = document.getElementById("todosIncompleted");

var todoArray = [];
var newArray = [];
var id = 0;
var error = document.getElementById("error");
var doneTodos = 0;
var leftTodos = 0;

addTodoButton.addEventListener("click", createTodo);

function createTodo(e) {
  e.preventDefault();
  error.style.display = "none";
  var newTodo = document.getElementById("todoItem");
  var newTodoValue = newTodo.value;
  if (!newTodoValue) return;

  var isValueInArray = todoArray.find(function (value, index, array) {
    return value === newTodoValue;
  });
  if (isValueInArray) {
    error.style.display = "block";
  } else {
    leftTodos = todoArray.length + 1;
    uncompletedTodos.innerText = leftTodos;
    if (isValueInArray) {
      newArray = todoArray.filter(function (todo) {
        //Empty the array with new Value
        return todo !== isValueInArray;
      });
      todoArray = newArray;
    }

    newTodo.value = "";

    todoArray.push(newTodoValue);

    id++;

    var newDiv = document.createElement("div");
    var todoItem = document.createElement("input");
    var newEditButton = document.createElement("button");
    var newDeleteButton = document.createElement("button");
    var newCheckbox = document.createElement("input");

    newDiv.classList.add("row-flex");

    todoItem.type = "text";
    todoItem.classList.add("todoItem");
    todoItem.value = newTodoValue;
    todoItem.disabled = true;
    todoItem.id = id;
    todoItem.addEventListener("blur", disableInput, true);

    newEditButton.classList.add("btn", "btn-success", "transparent");
    newEditButton.addEventListener("click", editTodo);
    newEditButton.innerHTML = "&#x270E;";

    newDeleteButton.classList.add("btn", "btn-danger", "transparent");
    newDeleteButton.innerHTML = "&#x274C;";
    newDeleteButton.addEventListener("click", deleteTodo);

    newCheckbox.type = "checkbox";
    newCheckbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        doneTodos = doneTodos + 1;
        completedTodos.innerText = doneTodos;
        leftTodos = leftTodos - 1;
        uncompletedTodos.innerText = leftTodos;
      } else {
        doneTodos = doneTodos - 1;
        leftTodos = todoArray.length - doneTodos;
        completedTodos.innerText = doneTodos;
        uncompletedTodos.innerText = leftTodos;
      }
    });

    newDiv.appendChild(todoItem);
    newDiv.appendChild(newEditButton);
    newDiv.appendChild(newDeleteButton);
    newDiv.appendChild(newCheckbox);

    todosContainer.appendChild(newDiv);

    function disableInput(event) {
      todoItem.blur();
      todoItem.disabled = true;
      todoItem.style.background = "transparent";
      todoItem.active = true;
      todoItem.style.color = "white";
    }

    function editTodo(event) {
      todoArray = todoArray.filter(function (todo) {
        //Empty the array with new Value
        return todo !== todoItem.value;
      });
      todoItem.disabled = false;
      todoItem.style.background = "white";
      todoItem.style.color = "black";
      todoItem.focus();
      todoItem.addEventListener("change", function (e) {
        todoItem.value = e.target.value;
        let isValueInArray = todoArray.find(function (value, index, array) {
          return value === todoItem.value;
        });
        if (isValueInArray) return;
        todoArray.push(todoItem.value);
      });
    }

    function deleteTodo(event) {
      var todelete = confirm("Do you want to delete");
      if(!todelete){
        return 
      }else{
        if (newCheckbox.checked) {
          doneTodos = doneTodos - 1;
          completedTodos.innerText = doneTodos;
        } else {
          leftTodos = leftTodos - 1;
          uncompletedTodos.innerText = leftTodos;
        }
  
        this.parentElement.remove();
        newArray = todoArray.filter(function (todo) {
          //Empty the array with new Value
          return todo !== todoItem.value;
        });
        todoArray = newArray;
      }
    }

    newTodo.innerText = "";
  }
}

var navBarItem = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    navBarItem.style.backgroundColor = "green";
  } else {
    navBarItem.style.backgroundColor = "transparent";
  }
});
