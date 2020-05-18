function calculate() {
    var operation = document.getElementById('operation').value;
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);

    var result = null;

    if(number1 <= 0 || number2 <= 0) {
        alert('Choose not null integers !');
        return false;
    }

    switch (operation) {
        case '1':
            result = number1 + number2;
            break;
    
        case '2':
            result = number1 - number2;
            break;
    
        case '3':
            result = number1 * number2;
            break;
    
        case '4':
            result = number1 / number2;
            break;
    
        default:
            alert('Choose an operation !');
            break;
    }

    document.getElementById('result').value = result;

}