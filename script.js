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

function askSizeOfGrid() {
    let sizeOfGrid = prompt('How big do you want the grid to be? (Maximum of 100)');
    createSquareGrid(sizeOfGrid);

}
