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
  let video = document.getElementById("videoModal");
  video.style.display = "block";
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
  var blockMovie = anime({
    targets: "#videoModal",
    easing: "linear",
    duration: 3000,
    direction: "alternate",
  });
}

function closeVideo() {
  console.log("close video");
  let videoModal = document.getElementById("videoModal");
  videoModal.style.display = "none";
  document.body.style.height = "100%";
  document.body.style.overflow = "scroll";
}

function showAnswer(id) {
  let attId = id.getAttribute("id");
  let addClass = id.classList.contains("activeqi");
  if (addClass) {
    id.classList.remove("activeqi");
    let obj = document.querySelector("#" + attId + " p");
    obj.style.display = "none";
  } else {
    if (attId == "qi1") {
      let obj = document.querySelector("#qi1 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    } else if (attId == "qi2") {
      let obj = document.querySelector("#qi2 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    } else if (attId == "qi3") {
      let obj = document.querySelector("#qi3 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    } else if (attId == "qi4") {
      let obj = document.querySelector("#qi4 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    } else if (attId == "qi5") {
      let obj = document.querySelector("#qi5 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    } else if (attId == "qi6") {
      let obj = document.querySelector("#qi6 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    } else if (attId == "qi7") {
      let obj = document.querySelector("#qi7 p");
      obj.style.display = "block";
      id.classList.add("activeqi");
    }
  }
}

function changeInt(el) {
  let active = el.classList.contains("active-btn");
  if (!active) {
    let id = el.id;
    let one = document.getElementById("one");
    let two = document.getElementById("two");

    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let buy = document.getElementById("buy");
    let img = document.getElementById("img");
    let year = document.getElementById("year");
    let flag = document.getElementById("integ__flag");
    let bcgc = document.getElementsByClassName("integration__content__card")[0];
    if (id == "two") {
      one.classList.remove("active-btn");
      two.classList.add("active-btn");
      flag.style.color = "#fff";
      buy.style.backgroundColor = "#fff";
      title.innerHTML = "Интеграция со всеми системами ЕДО**";
      title.style.color = "#fff";
      title.style.borderBottom = "1px solid #fff";
      price.innerHTML = "4000 ₴";
      bcgc.style.backgroundColor = "#3064dc";
      img.src = "./images/rate/integ2.png";
      year.style.color = "#fff";
      price.style.color = "#fff";
      buy.style.color = "#1064e5";

      preudoBefore.backgroundImage = 'url("./images/rate/checkWhite.svg")';
    } else {
      two.classList.remove("active-btn");
      one.classList.add("active-btn");
      flag.style.color = "#000";
      year.style.color = "#000";
      title.style.color = "#000";

      preudoBefore.backgroundImage = 'url("./images/rate/ptichka.svg")';

      title.style.borderBottom = "1px solid #000";
      price.style.color = "#000";
      bcgc.style.backgroundColor = "#f5f5f5";
      img.src = "./images/rate/integ1.png";
      buy.style.backgroundColor = "#1064e5";
      buy.style.color = "#fff";
    }
  }
  //dotnumber.classList.contains("active-dot")
}

let slideIndex = 1;

showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlideShow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  dots[slideIndex - 1].className += " active";
  slides[slideIndex - 1].style.display = "flex";
  if (slideIndex != 1) slides[slideIndex - 1].style.marginLeft = "-10%";

  var cssSelector = anime({
    targets: ".mySlideShow" + slideIndex,
    translateX: "10%",
  });
}

function showPhone() {
  let phones = document.getElementsByClassName("phone");
  for (let i = 0; i < phones.length; i++) {
    phones[i].style.display = "block";
  }
}

function hidePhone() {
  let phones = document.getElementsByClassName("phone");
  for (let i = 0; i < phones.length; i++) {
    phones[i].style.display = "none";
  }
}

function showList() {
  let lists = document.getElementsByClassName("lists");
  lists[0].style.display = "block";
}

function hideList() {
  let lists = document.getElementsByClassName("lists");
  lists[0].style.display = "none";
}

function buy(n) {
  console.log(n);
}
