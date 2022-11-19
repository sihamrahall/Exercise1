function calc(operation) {
    let value1 = parseInt(document.getElementById('firstNumber').value);
    let value2 = parseInt(document.getElementById('secondNumber').value);

    if (operation == 'sum') {output = value1+value2}
    else if (operation == 'sub') {output = value1-value2}
    else if (operation == 'mul') {output = value1*value2}
    else if(operation == 'div') {output = value1/value2}
    document.getElementById('output').innerHTML = output;
}