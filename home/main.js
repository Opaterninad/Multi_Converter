const menuToggle = document.querySelector(".menuToggle");
const naviToggle = document.querySelector(".navigation");
menuToggle.onclick = function () {
  naviToggle.classList.toggle("open");
};
const list = document.querySelectorAll(".list");
function activarLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activarLink));

const menutoggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
