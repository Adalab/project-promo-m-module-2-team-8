const data = {
  name: "",
  job: "",
  img: "",
  phone: "",
  mail: "",
  linkedin: "",
  git: "",
};

function handlerChangeForm(ev) {
  const inputNameChange = ev.target.name;
  const inputValueChange = ev.target.value;
  if (inputNameChange === "fullName") {
    data.name = inputValueChange;
    nameTarget.innerHTML = data.name;
  } else if (inputNameChange === "workTitle") {
    data.job = inputValueChange;
  } else if (inputNameChange === "email") {
    data.mail = inputValueChange;
  } else if (inputNameChange === "phone") {
    data.phone = inputValueChange;
  } else if (inputNameChange === "linkedin") {
    data.linkedin = inputValueChange;
  } else if (inputNameChange === "github") {
    data.git = inputValueChange;
  }
}

function hadlerChangePreview() {
  nameTarget.innerHTML = data.name;
  job.innerHTML = data.job;
  phone.href = data.phone;
  mail.href = data.mail;
  linkedin.href = "https://linkedin.com/in/${data.linkedin}";
  gitHub.href = "https://github.com/${data.git}";
}

function handlerTotalChange(ev) {
  handlerChangeForm(ev);
  hadlerChangePreview();
}

form.addEventListener("keyup", handlerTotalChange);

<<<<<<< HEAD

// const buttonReset = document.getElementById('#reset').reset();
// function resetForm(){
//   location.reset();
// }

// buttonReset.addEventListener("click", resetForm());


// const reloadButton = document.getElementById("reset");

// const addReset  = document.querySelectorAll(".js-form");
//   for (const deleteButton of deleteButtons) {
//     deleteButton.addEventListener("click", deleteSerieFromFavorites);
// function cleanForm() {

//   console.log (reloadButton)
// }
// const reloadButton = document.querySelector;
// reloadButton.addEventListener("click", cleanForm());

// function reload() {
  
//   location.reload();

// }
//

=======
//REset
let buttonReset = document.querySelector(".js-btn-reset");

function resetForm(ev) {
  document.getElementById("resetform").reset();
  handlerTotalChange(ev);
}

buttonReset.addEventListener("click", resetForm);
>>>>>>> master
