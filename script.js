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

function nextSlide(dotnumber) {
  console.log(dotnumber);
  if (!dotnumber.classList.contains("active-dot")) {
    let next = dotnumber.classList[0];
    let nextSlide = next.toString()[3];
    let title = document.getElementById("header__left__title");
    let subTitle = document.getElementById("header__left__subtitle");
    let subP = document.getElementById("header__left__p");
    let photo = document.getElementById("header__right__img");
    console.log(nextSlide);
    if (nextSlide === "2") {
      subTitle.innerHTML = "Загрузи документ";
      subP.innerHTML =
        "Загружай в систему любой документ который нужно подпись: договор, акт выполненных работ, да что угодно!";
      photo.src = "./images/main/hero-slide-figure-run.png";
    } else if (nextSlide == "1") {
      photo.src = "./images/main/hero-slide-figure-run.png";
    } else {
      photo.src = "./images/main/hero-slide-figure.png";
    }
  }
}

function showVideo() {
  console.log("hello world");
  let video = document.getElementById("videoModal");
  video.style.display = "block";
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  console.log("close video");
  let videoModal = document.getElementById("videoModal");
  videoModal.style.display = "none";
  document.body.style.height = "100%";
  document.body.style.overflow = "scroll";
}
