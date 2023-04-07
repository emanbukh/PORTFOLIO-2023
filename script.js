// Time on Home Page
const updateTimes = function () {
  const output = document.querySelector("#output");
  const now = luxon.DateTime.now().setZone("America/Toronto");

  output.innerText = now.toFormat("HH:mm:ss");
};
updateTimes();
setInterval(function () {
  updateTimes();
}, 1000);

//card-stack and button link stack
let stack = document.querySelector("#card-stack");

[...stack.children].reverse().forEach((i) => stack.append(i));

document.querySelector("#btn-parent-link").addEventListener("click", swap);
function swap(e) {
  let card = document.querySelector(".card-project:last-child");
  let btnLink = document.querySelector(".btn-link:last-child");

  if (e.target !== btnLink) return;
  card.style.animation = "swap 700ms forwards ";

  setTimeout(() => {
    card.style.animation = "";
    btnLink.style.animation = "";
    stack.prepend(card);
  }, 700);
}

// contact me, email

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "emanbukhori.git@gmail.com",
    Password: "01F99FF8B77FE1FEB0AEF7AA396A4D36AD90",
    To: "em4nbukhori@gmail.com",
    From: document.getElementById("#email"),
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("firstName").value +
      " " +
      document.getElementById("lastName").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone number: " +
      document.getElementById("mobile").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("message sent"));
}
//menu
let menuDOM = document.querySelector("#menu");
let burgerMenuDOM = document.querySelector("#hamburger");

burgerMenuDOM.addEventListener("change", check);
function check() {
  if (this.checked) {
    menuDOM.style.transform = "translate(0,215%)";
    console.log(check);
  } else {
    menuDOM.style.transform = "translate(0,-215%)";
  }
}
