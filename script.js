function createSquareGrid(sideLength) {
    const majorContainer = document.querySelector('.major-container');
    majorContainer.innerHTML = '';

    for (let i = 0; i < sideLength; i++) {

        const rowOfDivs = document.createElement('div');
        rowOfDivs.classList.add('row-container');

        for (let i = 0; i < sideLength; i++) {
            const childDiv = document.createElement('div');
            childDiv.classList.add('inner-square');
            rowOfDivs.appendChild(childDiv);
        }
        majorContainer.appendChild(rowOfDivs);
    }
}

function paintDiv(event) {
    if (event.buttons === 1 || event.type === 'click') {
        let elementTriggered = event.target;
        elementTriggered.style.backgroundColor = generateRandomRGB();
    }
}

function generateRandomRGB() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function linkDivsToListener() {
    const majorContainer = document.querySelector('.major-container');
    for (const row of majorContainer.children) {
        for (const innerDiv of row.children) {
            innerDiv.addEventListener('mousemove', paintDiv);
            innerDiv.addEventListener('click', paintDiv);
        }
    }
}

function askSizeOfGrid() {
    let sizeOfGrid = Number(prompt('How big do you want the grid to be? (Maximum of 100)'));
    if (sizeOfGrid || sizeOfGrid === 0) {
        if (sizeOfGrid < 1) {
            alert('You cannot enter a number below 1');
        } else if (sizeOfGrid > 100) {
            alert('You cannot enter a number over 100');
        } else {
            createSquareGrid(sizeOfGrid);
            linkDivsToListener();
        }
    } else {
        alert('You entered an invalid character')
    }   
}

console.log(generateRandomRGB());

// Para hacer que se linkeen los cuadritos hay que
// Iterar cada uno, y linkearlo con el event listener mousedown
// Si se clickea, hay que hacer que se haga negro, y que se mantenga asi

