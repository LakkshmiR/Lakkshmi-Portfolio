function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}
document.getElementById("show-btn").addEventListener("click", function () {
  window.open("LakkshmiResume.pdf", "_blank");
});
