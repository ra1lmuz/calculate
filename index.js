const keys = document.querySelectorAll('.calculator button');
const screen = document.querySelector('.screen');

var decimal = false;
var operators = ['+', '-', 'x', '÷'];

keys.forEach(element => {
    element.addEventListener('click', () => {
        var keyVal = element.dataset.val;
        console.log(keyVal);
        output = screen.innerHTML;
        btnVal = this.innerHTML;

        // clear
        if (keyVal == 'clear') {
            output = '';
            decimal = false;
        }

        // equal
        else if (keyVal == '=') {
            var equation = output;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation) {
                output = eval(equation);
            }

            decimal = false;
        }

        // operators
        else if (operators.indexOf(btnVal) > -1) {
            var lastChar = output[output.length - 1];

            if(output != '' && operators.indexOf(lastChar) == -1) {
                screen.innerHTML += btnVal;
            }

            else if (output == '' && btnVal == '-') {
                screen.innerHTML += btnVal;
            }

            if (operators.indexOf(lastChar) > -1 && output.length > 1) {
                screen.innerHTML = output.replace(/.$/, btnVal);
            }

            decimal = false;
        } else if (btnVal == '.') {
            if (!decimal) {
                screen.innerHTML += btnVal;
                decimal = true;
            }
        } else {
            screen.innerHTML += btnVal;
        }


    })
});


