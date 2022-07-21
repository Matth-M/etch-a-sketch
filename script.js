const container = document.querySelector('#container');
const gridSize = 4;
const numberOfCells = gridSize * gridSize;
for(let i = 0; i < numberOfCells; ++i){
	const cell = document.createElement('div');
	cell.classList.add('cell');
	container.appendChild(cell);
}
