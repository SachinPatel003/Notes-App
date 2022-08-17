showDisplay();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  let addTitle = document.getElementById("addTitle");
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTitle.value = "";
  addTxt.value = "";
  showDisplay();
});

function showDisplay() {
  notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="card card1 m-3" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button type="button" onclick=delete1(${index}) class="btn btn-info">Delete</button>
                    </div>
                </div>`;
  });
  // notes = document.querySelector("#notes");
  // if (notesObj.lenght != 0) {
  //     notes.innerHTML = html;
  // } else {
  //     notes.innerHTML = "notes Empty";
  // }
  // localStorage.setItem("notes", JSON.stringify(notesObj));
  notes = document.querySelector("#notes");
  notes.innerHTML = html;
}

function delete1(index) {
  let notes = localStorage.getItem("notes");
  notesObj = JSON.parse(notes);
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showDisplay();
}

let search1 = document.getElementById("searchtxt");
search1.addEventListener("input", () => {
  searchValue = search1.value.toLowerCase();
  Cards = document.querySelectorAll(".card1");
  Array.from(Cards).forEach((element) => {
    let pText = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    // pText = pText.toLowerCase();
    let titleText = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
    // titleText = titleText.toLowerCase();
    if (pText.includes(searchValue) || titleText.includes(searchValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
