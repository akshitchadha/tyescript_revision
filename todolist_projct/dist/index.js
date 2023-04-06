"use strict";
// npm init -y creates package.json
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
const list = document.getElementById("todolist");
const todoArray = readTODos();
// btn.addEventListener("click",function () {
// alert(input.value);
// })
function readTODos() {
    const todoJson = localStorage.getItem("todos");
    if (todoJson === null) {
        return [];
    }
    return JSON.parse(todoJson);
}
for (const [I, todoentry] of todoArray.entries()) {
    createTodoElement(todoentry);
}
form.addEventListener("submit", handlesubmit);
function handlesubmit(e) {
    e.preventDefault();
    const textboxvalue = input.value;
    if (textboxvalue === '') {
        return;
    }
    const newTodotask = {
        text: textboxvalue,
        isCompleted: false,
    };
    todoArray.push(newTodotask);
    updatestorage();
    console.log(todoArray);
    createTodoElement(newTodotask);
    input.value = "";
}
;
function createTodoElement(todoparameter) {
    const newTOdo = todoparameter.text;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoparameter.isCompleted;
    checkbox.addEventListener("change", function () {
        console.log("checked or unchecled");
        todoparameter.isCompleted = checkbox.checked;
        updatestorage();
    });
    newLI.append(newTOdo);
    newLI.append(checkbox);
    list.append(newLI);
}
;
function updatestorage() {
    localStorage.setItem("todos", JSON.stringify(todoArray));
}
