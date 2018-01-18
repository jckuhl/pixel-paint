(function() {
	const playArea = document.getElementById("playArea");
	const createBtn = document.getElementById("create");
	const gridsizeInput = document.getElementById("gridsize");

	createBtn.addEventListener("click",()=> {
		const gridsize = gridsizeInput.value;
		if((gridsize !== 0) || (gridsize !== "")) {
			const squareWidth = 500 / gridsize;
			const numSquares = gridsize * gridsize;
		} else {
			
		}	
	})

})();


