let toggleMENU = true;
function showMenu() {
  console.log("asofb");
  if (toggleMENU) {
    let header__list = document.getElementsByClassName("header__menu")[0];
    header__list.style.display = "block";
    let menuBtn = document.getElementById("menuBtn");
    menuBtn.src = "./images/close.svg";
    toggleMENU = false;
  } else {
    let header__list = document.getElementsByClassName("header__menu")[0];
    header__list.style.display = "none";
    let menuBtn = document.getElementById("menuBtn");
    menuBtn.src = "./images/menu.svg";
    toggleMENU = true;
  }
}
//TODO қайтадан ресайз жасағанда
window.addEventListener("resize", function (event) {
  console.log(event);
});
