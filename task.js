const form = document.getElementById("inserTask");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

form.addEventListener("submit", function () {
  const task = document.getElementById("newTask");
  const list = document.createElement("ul");
  list.innerHTML = `<ul>
  <li>${task.value}</li>
  <button>Delete</button>
  </ul>
  `;

  const listSection = document.getElementById("listaTask");
  listSection.appendChild(list);
});
