const saveBtn = document.getElementById("save");
const input = document.getElementById("input");
const list = document.getElementById("list");
input.addEventListener("input", (e) => {
  let length = e.target.value.trim().length;
  if (length >= 3) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
});
saveBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  let button = document.createElement("button");
  button.style.padding = "5px 6px";
  button.style.margin = "10px 20px";
  button.addEventListener("click", () => {
    let newText = prompt("Edit the item:", li.textContent);
    if (newText !== null) {
      li.textContent = newText;
    }
  });
  let icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-trash");
  icon.addEventListener("click", () => {
    let check = confirm("delete?");
    if (check) {
      li.remove();
    }
  });
  li.append(icon);
  li.append(button);
  list.append(li);
  input.value = "";
  saveBtn.disabled = true;
});

