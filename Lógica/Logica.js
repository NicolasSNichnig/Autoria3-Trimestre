const valoresX = [1,5]
const valoresY = [3,6]

function calculoLinear(valoresX, valoresY) {
    const tamanho = valoresX.length;
    let sum_xy = 0;
    let sum_x = 0;
    let sum_y = 0;
    let sum_x_squared = 0;

    for (let i = 0; i < tamanho; i++) {
        sum_xy += valoresX[i] * valoresY[i];
        sum_x += valoresX[i];
        sum_y += valoresY[i];
        sum_x_squared += Math.pow(valoresX[i], 2);
    }

    const linear = (tamanho * sum_xy - sum_x * sum_y) / (tamanho * sum_x_squared - Math.pow(sum_x, 2));
    return linear;
}

console.log("Coeficiente Linear:",calculoLinear(valoresX, valoresY))

function calculoAngular(valoresX, valoresY){
    let x2 =  valoresX.pop();
    let y2 =  valoresY.pop();

    const angular = y2 - valoresY[0] / x2 - valoresX[0]
    return angular
}

console.log("Coeficiente Angular:",calculoAngular(valoresX, valoresY))
