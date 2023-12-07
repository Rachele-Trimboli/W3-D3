const form = document.getElementById("inserTask");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = document.getElementById("newTask");
  const list = document.createElement("ul");
  list.innerHTML = `<ul>
  <li class="lista">${task.value}<button class="button">Delete</button></li>
  </ul>
  `;

  const listSection = document.getElementById("listaTask");
  listSection.appendChild(list);
  // const sbarrato = function () {
  const li = document.getElementsByClassName("lista");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function (e) {
      li[i].style.textDecoration = "line-through";
    });
  }
  // };
});
