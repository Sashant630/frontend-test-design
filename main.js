let nav = document.getElementById("navMenu");
let uname = document.getElementById("name");
let nameErr = document.getElementById("nameErr");

function showMenu() {
  nav.style.left = "0";
}
function hideMenu() {
  nav.style.left = "-20rem";
}

uname.addEventListener("input", (e) => {
  console.log(e.target.value);
  let pattern = /^[\w\s]{6,35}$/;
  let curentValue = e.target.value;
  let valid = pattern.test(curentValue);

  if (valid) {
    nameErr.style.display = "none";
  } else {
    nameErr.style.display = "block";
  }
});
