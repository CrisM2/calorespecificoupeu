function calcular() {
    // Obtener los valores de los campos de entrada
    const agua = document.getElementById("agua").value;
    const proteina = document.getElementById("proteina").value;
    const grasa = document.getElementById("grasa").value;
    const carbohidratos = document.getElementById("carbohidratos").value;
    const ceniza = document.getElementById("ceniza").value;
    const temperatura = document.getElementById("temperatura").value;

    // Calcular el calor específico del alimento combinado
    const W = 4.1762;
    const a_w = -0.000090864;
    const b_w = 0.0000054731;
    const P = 2.0082;
    const a_p = 0.0012089;
    const b_p = -0.0000013129;
    const G = 1.9842;
    const a_g = 0.0014733;
    const b_g = -0.0000048008;
    const CH = 1.5488;
    const a_ch = 0.0019625;
    const b_ch = -0.0000059399;
    const C = 1.0926;
    const a_c = 0.0018896;
    const b_c = -0.0000036817;

    const c_w = W + a_w * temperatura + b_w * temperatura ** 2;
    const c_p = P + a_p * temperatura + b_p * temperatura ** 2;
    const c_g = G + a_g * temperatura + b_g * temperatura ** 2;
    const c_ch = CH + a_ch * temperatura + b_ch * temperatura ** 2;
    const c_c = C + a_c * temperatura + b_c * temperatura ** 2;

    const c_alimento = agua * c_w + proteina * c_p + grasa * c_g + carbohidratos * c_ch + ceniza * c_c;

    // Mostrar el resultado en el campo de salida
    document.getElementById("resultado").innerHTML = "El calor específico del alimento a " + temperatura + "°C es: " + c_alimento.toFixed(4) + " J/(g*K)";
}
