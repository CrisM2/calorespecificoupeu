// Obtener los valores de los coeficientes y las fracciones másicas
let x_w = parseFloat(document.getElementById("x_w").value);
let x_p = parseFloat(document.getElementById("x_p").value);
let x_g = parseFloat(document.getElementById("x_g").value);
let x_ch = parseFloat(document.getElementById("x_ch").value);
let x_c = parseFloat(document.getElementById("x_c").value);

let Xw = parseFloat(document.getElementById("Xw").value);
let a_w = parseFloat(document.getElementById("a_w").value);
let b_w = parseFloat(document.getElementById("b_w").value);

let P = parseFloat(document.getElementById("P").value);
let a_p = parseFloat(document.getElementById("a_p").value);
let b_p = parseFloat(document.getElementById("b_p").value);

let G = parseFloat(document.getElementById("G").value);
let a_g = parseFloat(document.getElementById("a_g").value);
let b_g = parseFloat(document.getElementById("b_g").value);

let CH = parseFloat(document.getElementById("CH").value);
let a_ch = parseFloat(document.getElementById("a_ch").value);
let b_ch = parseFloat(document.getElementById("b_ch").value);

let C = parseFloat(document.getElementById("C").value);
let a_c = parseFloat(document.getElementById("a_c").value);
let b_c = parseFloat(document.getElementById("b_c").value);

// Obtener la temperatura desde el formulario HTML
let T = parseFloat(document.getElementById("temperatura").value);
// Calcular los valores de calor específico para cada alimento
let c_w = Xw + a_w * T + b_w * Math.pow(T, 2);
let c_p = P + a_p * T + b_p * Math.pow(T, 2);
let c_g = G + a_g * T + b_g * Math.pow(T, 2);
let c_ch = CH + a_ch * T + b_ch * Math.pow(T, 2);
let c_c = C + a_c * T + b_c * Math.pow(T, 2);

// Calcular el calor específico del alimento combinado
let c_alimento = x_w * c_w + x_p * c_p + x_g * c_g + x_ch * c_ch + x_c * c_c;
// Mostrar el resultado en el formulario HTML
document.getElementById("resultado").innerHTML = "El calor específico del alimento a " + T + "°C es: " + c_alimento.toFixed(4) + " J/(g*K)";
