const inputGridSize = document.querySelector('input#gridSize');
inputGridSize.addEventListener('input', function(e){
	const cellsPerSide = e.target.value;
	drawGrid(cellsPerSide);
})

const container = document.querySelector('#container');

function drawGrid(cellsPerSide){
	resetGrid();
	[gridHeight, gridWidth] = [container.clientHeight, container.clientWidth];
	const numberOfCells = cellsPerSide * cellsPerSide;
	for(let i = 0; i < numberOfCells; ++i){
		const cell = document.createElement('div');
		cell.classList.add('cell');
		cell.addEventListener('mouseover', function(){
			this.classList.toggle('colored');
		});
		cell.style.width = Math.floor(gridWidth / cellsPerSide) + 'px';
		cell.style.height = Math.floor(gridHeight / cellsPerSide) + 'px';
		container.appendChild(cell);
	}
}

function resetGrid(){
	while(container.hasChildNodes()){
		container.removeChild(container.firstChild);
	}
}

drawGrid(4); //Display a grid by default
