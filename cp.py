@app.route('/', methods=['POST'])
def calcular():
    # Leer los valores de fracción molar y temperatura del formulario
    x_w = float(request.form['agua'])
    x_p = float(request.form['proteina'])
    x_g = float(request.form['grasa'])
    x_ch = float(request.form['carbohidratos'])
    x_c = float(request.form['ceniza'])
    T = float(request.form['temperatura'])

    # Calcular los valores de calor específico para cada alimento
    W = 4.1762
    a_w = -0.000090864
    b_w =
