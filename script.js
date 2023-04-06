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
let btnStack = document.querySelector("#btn-parent-link");

[...stack.children].reverse().forEach((i) => stack.append(i));

[...btnStack.children].reverse().forEach((i) => btnStack.append(i));

stack.addEventListener("click", swap);
function swap(e) {
  let card = document.querySelector(".card-project:last-child");
  let btnLink = document.querySelector(".btn-link:last-child");
  if (e.target !== card) return;
  card.style.animation = "swap 700ms forwards ";
  btnLink.style.animation = "weep 0ms none";

  setTimeout(() => {
    card.style.animation = "";
    btnLink.style.animation = "";
    stack.prepend(card);
    btnStack.prepend(btnLink);
  }, 700);
}

// contact me, email

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "emanbukhori.git@gmail.com",
    Password: "1999March@faith",
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
  }).then(message => alert("message sent"));
 
}
