const form = document.getElementById("inserTask");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

form.addEventListener("submit", function () {
  const task = document.getElementById("newTask");
  const list = document.createElement("ul");
  list.innerHTML = `<ul>
  <li id="item" class>${task.value}</li>
  <button id="delete">Delete</button>
  
  </ul>
  `;

  const listSection = document.getElementById("listaTask");
  listSection.appendChild(list);

  const li = document.getElementById("item");
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });




