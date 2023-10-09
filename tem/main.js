document.getElementById("celcius").addEventListener("input", function () {
  let celcius = parseFloat(this.value);
  let fahcel = celcius * (9 / 5) + 32;
  let kelcel = celcius + 273.15;
  document.getElementById("fahrenheit").value = fahcel.toFixed(2);
  document.getElementById("kelvin").value = kelcel.toFixed(2);
});

document.getElementById("fahrenheit").addEventListener("input", function () {
  let fahrenheit = parseFloat(this.value);
  let kelFah = fahrenheit + 459.67 * (5 / 9);
  document.getElementById("kelvin").value = kelFah.toFixed(2);
  let celFah = (fahrenheit - 32) * (5 / 9);
  document.getElementById("celcius").value = celFah.toFixed(2);
});

document.getElementById("kelvin").addEventListener("input", function () {
  let kelvin = parseFloat(this.value);
  let fahkel = ((kelvin - 273.1) * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahkel.toFixed(2);
  let celkel = kelvin - 273.15;
  document.getElementById("celcius").value = celkel.toFixed(2);
});
function Mostrarconversion() {
  let kelcon = parseFloat(document.getElementById("kelvin").value).toFixed(2);
  let fahcon = parseFloat(document.getElementById("fahrenheit").value).toFixed(
    2
  );
  let celcon = parseFloat(document.getElementById("celcius").value).toFixed(2);

  if ((kelcon === "NaN") | (fahcon === "NaN") | (celcon === "NaN")) {
    mensaje.textContent = `Por favor, coloca un número a convertir.`;
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = `Las conversiones quedan así: Celcius: ${celcon} 
    °C, Fahrenheit: ${fahcon} °F Y Kelvin: ${kelcon} K.`;
    mensaje.style.color = "green";
  }
}
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};
const list = document.querySelectorAll(".list");
function activarLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activarLink));
