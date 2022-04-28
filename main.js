let nav = document.getElementById("navMenu");
let uname = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let message = document.getElementById("message");
let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let phoneErr = document.getElementById("phoneErr");

// Responsive navbar

function showMenu() {
  nav.style.left = "0";
}
function hideMenu() {
  nav.style.left = "-285px";
}

// Portfolio tab functionality

function tabs(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Testimonial functionality

let clientRow = document.getElementById("client__row");
let clientCol = clientRow.getElementsByClassName("client__col");
function next() {
  clientRow.append(clientCol[0]);
}
function prev() {
  clientRow.prepend(clientCol[clientCol.length - 1]);
}

// Form validation

let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

uname.addEventListener("input", (e) => {
  let pattern = /^[\w\s]{6,35}$/;
  let curentValue = e.target.value;
  let valid = pattern.test(curentValue);

  if (valid) {
    nameErr.style.display = "none";
    uname.style.borderColor = "#00FF00";
  } else {
    nameErr.style.display = "block";
    uname.style.borderColor = "#f00";
  }
});

email.addEventListener("input", (e) => {
  let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  let curentValue = e.target.value;
  let valid = pattern.test(curentValue);

  if (valid) {
    emailErr.style.display = "none";
    email.style.borderColor = "#00FF00";
  } else {
    emailErr.style.display = "block";
    email.style.borderColor = "#f00";
  }
});

contact.addEventListener("input", (e) => {
  let pattern = /^\d{10}$/;
  let curentValue = e.target.value;
  let valid = pattern.test(curentValue);

  if (valid) {
    phoneErr.style.display = "none";
    contact.style.borderColor = "#00FF00";
  } else {
    phoneErr.style.display = "block";
    contact.style.borderColor = "#f00";
  }
});

// message.addEventListener("input", (e) => {
//
//   let pattern = /^[\w\s]{6,50}$/;
//   let curentValue = e.target.value;
//   let valid = pattern.test(curentValue);

//   if (valid) {
//     messageErr.style.display = "none";
//   } else {
//     messageErr.style.display = "block";
//   }
// });
