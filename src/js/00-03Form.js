"use strict";

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

//REset
let buttonReset = document.querySelector(".js-btn-reset");

function resetForm(ev) {
  document.getElementById("resetform").reset();
  handlerTotalChange(ev);
}

buttonReset.addEventListener("click", resetForm);
