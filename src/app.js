social = document.getElementsByClassName("social");

for (let i = 0; i < social.length; i++) {
  social[i].addEventListener("mouseenter", function () {
    var temp = this;
    var source = this.getAttribute("src");

    switch (source) {
      case "Assets/email.png":
        temp.setAttribute("src", "Assets/email hover.png");
        break;

      case "Assets/github.png":
        temp.setAttribute("src", "Assets/github hover.png");
        break;

      case "Assets/linkedin.png":
        temp.setAttribute("src", "Assets/linkedin hover.png");
        break;

      case "Assets/instagram.png":
        temp.setAttribute("src", "Assets/instagram hover.png");
        break;

      default:
        break;
    }
  });

  social[i].addEventListener("mouseleave", function () {
    var temp = this;
    var source = this.getAttribute("src");

    switch (source) {
      case "Assets/email hover.png":
        temp.setAttribute("src", "Assets/email.png");
        break;

      case "Assets/github hover.png":
        temp.setAttribute("src", "Assets/github.png");
        break;

      case "Assets/linkedin hover.png":
        temp.setAttribute("src", "Assets/linkedin.png");
        break;

      case "Assets/instagram hover.png":
        temp.setAttribute("src", "Assets/instagram.png");
        break;

      default:
        break;
    }
  });
}
cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  card_bg = document.getElementsByClassName("card-bg");
  card_title = document.getElementsByClassName("card-title");
  cards[i].addEventListener("mouseenter", function () {
    card = this;
    const id = card.classList[1].slice(5);
    card_bg[cards.length - id].classList.add("card-bg-active");
    card_title[cards.length - id].classList.add("hide-title");
  });

  cards[i].addEventListener("mouseleave", function () {
    card = this;
    const id = card.classList[1].slice(5);
    card_bg[cards.length - id].classList.remove("card-bg-active");
    card_title[cards.length - id].classList.remove("hide-title");
  });
}

function display() {
  var flex = document.getElementsByClassName("nav-links");
  flex[0].classList.toggle("active");
  var img = document.getElementsByClassName("nav-img");
  if (img[0].getAttribute("src") == "Assets/menu.png") {
    img[0].setAttribute("src", "Assets/close.png");
  } else {
    img[0].setAttribute("src", "Assets/menu.png");
  }
}
