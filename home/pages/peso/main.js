document.getElementById("cantidad_a").addEventListener("input", function () {
  convertir(1);
});
document.getElementById("cantidad_b").addEventListener("input", function () {
  convertir(2);
});
document.getElementById("type_a").addEventListener("change", function () {
  convertir(1);
});
document.getElementById("type_b").addEventListener("change", function () {
  convertir(2);
});
function convertir(origen) {
  let cantidad, unidadOrigen, unidadConvertir;
  if (origen === 1) {
    cantidad = parseFloat(document.getElementById("cantidad_a").value);
    unidadOrigen = document.getElementById("type_a").value;
    unidadConvertir = document.getElementById("type_b").value;
  } else {
    cantidad = parseFloat(document.getElementById("cantidad_b").value);
    unidadOrigen = document.getElementById("type_b").value;
    unidadConvertir = document.getElementById("type_a").value;
  }
  let resultado = 0;
  /*oz lb microg mg g kg*/
  /**onza */
  if (unidadOrigen === "oz" && unidadConvertir === "g") {
    resultado = cantidad * 28.3495;
  } else if (unidadOrigen === "oz" && unidadConvertir === "lb") {
    resultado = cantidad * 0.0625;
  } else if (unidadOrigen === "oz" && unidadConvertir === "kg") {
    resultado = cantidad * 0.028349;
  } else if (unidadOrigen === "oz" && unidadConvertir === "mg") {
    resultado = cantidad * 28349.5;
  } else if (unidadOrigen === "oz" && unidadConvertir === "microg") {
    resultado = cantidad * 2.835e7;
  } else if (unidadOrigen === "oz" && unidadConvertir === "tn") {
    resultado = cantidad * 2.835e-5;
    /**libra*/
  } else if (unidadOrigen === "lb" && unidadConvertir === "g") {
    resultado = cantidad * 453.592;
  } else if (unidadOrigen === "lb" && unidadConvertir === "kg") {
    resultado = cantidad * 0.453592;
  } else if (unidadOrigen === "lb" && unidadConvertir === "mg") {
    resultado = cantidad * 453592;
  } else if (unidadOrigen === "lb" && unidadConvertir === "microg") {
    resultado = cantidad * 4.536e8;
  } else if (unidadOrigen === "lb" && unidadConvertir === "oz") {
    resultado = cantidad * 16;
  } else if (unidadOrigen === "lb" && unidadConvertir === "tn") {
    resultado = cantidad * 0.000453592;
    /*microgramos*/
  } else if (unidadOrigen === "microg" && unidadConvertir === "g") {
    resultado = cantidad * 1e-6;
  } else if (unidadOrigen === "microg" && unidadConvertir === "kg") {
    resultado = cantidad * 1e-9;
  } else if (unidadOrigen === "microg" && unidadConvertir === "mg") {
    resultado = cantidad * 0.001;
  } else if (unidadOrigen === "microg" && unidadConvertir === "lb") {
    resultado = cantidad * 2.2046e-9;
  } else if (unidadOrigen === "microg" && unidadConvertir === "oz") {
    resultado = cantidad * 3.5274e-8;
    /*Miligramo */
  } else if (unidadOrigen === "mg" && unidadConvertir === "g") {
    resultado = cantidad * 0.001;
  } else if (unidadOrigen === "mg" && unidadConvertir === "kg") {
    resultado = cantidad * 1e-6;
  } else if (unidadOrigen === "mg" && unidadConvertir === "microg") {
    resultado = cantidad * 1000;
  } else if (unidadOrigen === "mg" && unidadConvertir === "lb") {
    resultado = cantidad * 2.2046e-6;
  } else if (unidadOrigen === "mg" && unidadConvertir === "oz") {
    (resultado = cantidad * 3), 5274e-5;
  } else if (unidadOrigen === "mg" && unidadConvertir === "tn") {
    resultado = cantidad * 0.000453592;
    /*Gramo */
  } else if (unidadOrigen === "g" && unidadConvertir === "mg") {
    resultado = cantidad * 1000;
  } else if (unidadOrigen === "g" && unidadConvertir === "kg") {
    resultado = cantidad * 0.001;
  } else if (unidadOrigen === "g" && unidadConvertir === "microg") {
    resultado = cantidad * 1e6;
  } else if (unidadOrigen === "g" && unidadConvertir === "lb") {
    resultado = cantidad * 0.00220462;
  } else if (unidadOrigen === "g" && unidadConvertir === "oz") {
    resultado = cantidad * 0.035274;
  } else if (unidadOrigen === "g" && unidadConvertir === "tn") {
    resultado = cantidad * 1e-6;
    /*Kilogramo */
  } else if (unidadOrigen === "kg" && unidadConvertir === "mg") {
    resultado = cantidad * 1e6;
  } else if (unidadOrigen === "kg" && unidadConvertir === "g") {
    resultado = cantidad * 1000;
  } else if (unidadOrigen === "kg" && unidadConvertir === "microg") {
    resultado = cantidad * 1e9;
  } else if (unidadOrigen === "kg" && unidadConvertir === "lb") {
    resultado = cantidad * 2.20462;
  } else if (unidadOrigen === "kg" && unidadConvertir === "oz") {
    resultado = cantidad * 35.274;
  } else if (unidadOrigen === "kg" && unidadConvertir === "tn") {
    resultado = cantidad * 0.001;
    /*Tonelada */
  } else if (unidadOrigen === "tn" && unidadConvertir === "mg") {
    resultado = cantidad * 1e9;
  } else if (unidadOrigen === "tn" && unidadConvertir === "g") {
    resultado = cantidad * 1e6;
  } else if (unidadOrigen === "tn" && unidadConvertir === "microg") {
    resultado = cantidad * 1e12;
  } else if (unidadOrigen === "tn" && unidadConvertir === "lb") {
    resultado = cantidad * 2204.62;
  } else if (unidadOrigen === "tn" && unidadConvertir === "oz") {
    resultado = cantidad * 35274;
  } else if (unidadOrigen === "tn" && unidadConvertir === "kg") {
    resultado = cantidad * 1000.0011;
  } else {
    resultado = cantidad;
  }

  if (origen === 1) {
    document.getElementById("cantidad_b").value = resultado.toFixed(10);
  } else {
    document.getElementById("cantidad_a").value = resultado.toFixed(10);
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
