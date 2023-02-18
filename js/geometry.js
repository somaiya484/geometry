document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'Q&A.html';
})
let serial = 0;

// triangle-btn
document.getElementById('triangle-btn').addEventListener('click', function(){
    const name = document.getElementById('triangle').innerText;
    const baseField = getInput('base-field');
    const heightField = getInput('height-field');

    const sumOfTriangle = multiplicationOne(baseField, heightField);
    serial += 1
    tableBody(name, sumOfTriangle);

    // validation
    validation(baseField , heightField);
})

// Rectangle-btn
document.getElementById('Rectangle-btn').addEventListener('click', function(){
    const name = document.getElementById('rectangle').innerText;

    const widthField = getInput('width-field');
    const lengthField = getInput('length-field');

    const sumOfRectangle =  multiplicationTwo(widthField, lengthField);

    serial += 1
    tableBody(name, sumOfRectangle)

    // validation
    validation(widthField , lengthField);
    
})

// Parallelogram-btn
document.getElementById('Parallelogram-btn').addEventListener('click', function(){
    const name = document.getElementById('parallelogram').innerText;
    const baseField = getInput('pa-base-field');
    const heightField = getInput('pa-height-field');

    const sumOfParallelogram = multiplicationTwo(baseField, heightField);

    serial += 1
    tableBody(name, sumOfParallelogram)

    // validation
    validation(baseField , heightField);
})

// Rhombus-btn
document.getElementById('Rhombus-btn').addEventListener('click', function(){
    const name = document.getElementById('rhombus').innerText;
    const diagonalOne = getInput('diagonal-one');
    const diagonalTwo = getInput('diagonal-two');

    const sumOfDiagonal = multiplicationOne(diagonalOne, diagonalTwo);

    serial += 1
    tableBody(name, sumOfDiagonal);

    // validation
    validation(diagonalOne , diagonalTwo);
})

// Pentagon-btn
document.getElementById('Pentagon-btn').addEventListener('click', function(){
    const name = document.getElementById('pentagon').innerText;
    const PentagonField = getInput('Pentagon-field');
    const PentagonBaseField = getInput('Pentagon-base-field');

    const sumOFPentagon = multiplicationOne(PentagonField, PentagonBaseField);

    serial += 1
    tableBody(name, sumOFPentagon);

    // validation
    validation(PentagonField , PentagonBaseField);
})

// Ellipse-btn
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const name = document.getElementById('ellipse').innerText;
    const ellipseFieldOne = getInput('ellipse-field-one');
    const ellipseFieldTwo = getInput('ellipse-field-two');

    const sumOfEllipse = 3.14 * ellipseFieldOne * ellipseFieldTwo;
    const finalSumOfEllipse = sumOfEllipse.toFixed(2)

    serial += 1
    tableBody(name, finalSumOfEllipse);

    // validation
    validation(ellipseFieldOne , ellipseFieldTwo);
})

//Random color changing in card
hoverColorChange('card-1')
hoverColorChange('card-2')
hoverColorChange('card-3')
hoverColorChange('card-4')
hoverColorChange('card-5')
hoverColorChange('card-6')
