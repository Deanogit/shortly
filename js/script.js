// Grab the elements

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const errMsg = document.getElementById("err-msg");
const linkInput = document.getElementById("link-input");
const form = document.getElementById("link-form");

// set up an event listener listening out for submits, call a function to..

btn.addEventListener("click", navToggle);

// Toggle Nav Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

form.addEventListener("submit", formSubmit);

// This code here checks if the url is valid...
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

// Now define what the formSubmit function will do...

function formSubmit(e) {
  // prevent the form submitting
  e.preventDefault();

  //   now get the input value and log to console
  //   console.log(linkInput.value);

  //   so if input does not contain anything
  if (linkInput.value === "") {
    //   render the message
    errMsg.textContent = "Please enter a valid URL";
    linkInput.classList.add("border-red");
  } else if (!validURL(linkInput.value)) {
    errMsg.textContent = "Please enter a valid URL";
    linkInput.classList.add("border-red");
  } else {
    errMsg.textContent = "";
    linkInput.classList.remove("border-red");
    alert("Success");
  }
}

// So how would i change the content of the errMsg?

// errMsg.textContent = "Please submit an ";
// linkInput.classList.add("border-red");
