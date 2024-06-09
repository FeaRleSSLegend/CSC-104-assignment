function simpleInterest() {
    let p = prompt('What is the Principle?');
    let t = prompt('What is the Time?');
    let r = prompt('What is the Rate?');

    let result = (p*t*r)/100;


    document.getElementById("SI").innerHTML = result;
}

function compoundInterest() {
    let is_amount = prompt('Do you have an amount? Y/N').toUpperCase();

    if (is_amount === 'Y') {
        let amount = parseFloat(prompt('Enter the amount:'));
        let principal = parseFloat(prompt('Enter the principal:'));

        if (isNaN(amount) || isNaN(principal)) {
            alert('Please enter valid numbers');
            return;
        }

        let CI = amount - principal;

        document.getElementById("CI").innerHTML = CI.toFixed(2);
    } else if (is_amount === 'N') {
        let principal = parseFloat(prompt('Enter the principal:'));
        let rate = parseFloat(prompt('Enter the annual interest rate (in %):')) / 100;
        let time = parseFloat(prompt('Enter the time (in years):'));
        let number = parseInt(prompt('Enter the number of times the interest is compounded per year:'), 10);

        if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(number)) {
            alert('Please enter valid numbers');
            return;
        }

        let CI = (principal * Math.pow(1 + (rate / number), number * time)) - principal;

        document.getElementById("CI").innerHTML = CI.toFixed(2);
    } else {
        alert('Please enter Y or N');
    }
}

function temperatureConverter() {
    let temperature = parseInt(prompt('What Conversion would you like to make\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\n Q to quit'));

    if (temperature === 1) {
        let celsius = parseFloat(prompt('Enter temperature in Celsius'));
        if (isNaN(celsius)){
            alert('Enter an Integer');
            return;
        }
        let fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("FCR").innerHTML = `In Fahrenheit is ${fahrenheit.toFixed(2)}°F`;
    } else if (temperature === 2) {
        let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit"));
        if (isNaN(fahrenheit)){
            alert('Enter an Integer')
        }
        let celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("FCR").innerHTML = `In Celsius is ${celsius.toFixed(2)}°C`;
    } else {
        alert('Please enter 1 or 2');
    }
}

function currencyConverter(){
    let choice = parseInt(prompt('What Conversion would you like to make\n1. Naira to Dollar\n2. Dollars to Naira'));
    if (isNaN(choice) || (choice!=1 && choice!=2)){
        alert('Please enter an integer');
        return
    }

    else if (choice == 1){
        let naira = parseFloat(prompt('Enter amount in naira'));
        let dollar = parseFloat(naira/1430.00)
        document.getElementById("money").innerHTML = `${naira} NGN in Dollars is $${dollar.toFixed(2)}`;
    }
    else if (choice==2){
        let dollar = parseFloat(prompt('Enter the amount in Dollars'));
        let naira = parseFloat(dollar*1430.00);
        document.getElementById("money").innerHTML = `$${dollar} in naira is ${naira.toFixed(2)} NGN`;

    }
}



