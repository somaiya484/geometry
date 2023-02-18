// get input value function
function getInput(value){
    const inputField = document.getElementById(value).value;
    const inputFieldValue = parseFloat(inputField);
    return inputFieldValue;
}

// function of multiplication
function multiplicationOne(valueOne, valueTwo){
    const sum = 0.5 * valueOne * valueTwo;
    return sum
}

function multiplicationTwo(valueOne, valueTwo){
    const sum = valueOne * valueTwo;
    return sum;
}

//table body-container
function tableBody(nameOfGeometry, valueOfGeometry,button){
    const tbodyContainer = document.getElementById('tbody-container');
    const trCreate = document.createElement('tr');
    trCreate.innerHTML = `
        <td>${serial}</td>
        <td>${nameOfGeometry}</td>
        <td>${valueOfGeometry }</td>
        <td>${button}</td>
    `;
    tbodyContainer.appendChild(trCreate)
}

// hover effect
function hoverColorChange(value){
    const cardColorChange = document.getElementById(value);
    cardColorChange.addEventListener('mouseover', () => {
        cardColorChange.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) +
        ','  + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) + ')' ;
    })
}


// validation 
function validation(valueOne, valueTwo ){
    if(isNaN(valueOne) || 
    isNaN(valueTwo) ||
     valueOne == ' ' || 
     valueTwo == ' ' || 
     valueOne <= 0 ||
     valueTwo <= 0){
        alert('Your input is wrong. Please, Enter a valid number');
        return valueOne, valueTwo;
    }
}