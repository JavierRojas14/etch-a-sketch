
function createSquareGrid(sideLength) {
    const majorContainer = document.querySelector('.major-container');
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

createSquareGrid(5);
