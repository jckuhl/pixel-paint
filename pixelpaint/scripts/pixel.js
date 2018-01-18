(function() {
	const playArea = document.getElementById("playArea");
	const createBtn = document.getElementById("create");
	const gridsizeInput = document.getElementById("gridsize");
	const body = document.querySelector("body");
	const warning = document.getElementById("warning");
	const warningBtn = document.getElementById("warning-btn");


	function changeColor() {
		this.style.backgroundColor = "black";
	}

	createBtn.addEventListener("click",()=> {
		const gridsize = parseInt(gridsizeInput.value);
		if((!isNaN(gridsize)) && (gridsize > 0) && (gridsize < 11)){
			const squareWidth = 500 / gridsize;
			const numSquares = gridsize * gridsize;
			let pos_y = playArea.getBoundingClientRect().top;
			let pos_x = playArea.getBoundingClientRect().left;
			let row = 0
			for(let i = 1; i <= numSquares; i++) {
				const square = document.createElement("div");
				square.classList.add("square");
				square.style.top = pos_y + "px";
				square.style.left = pos_x + "px";
				square.style.width = squareWidth + "px";
				square.style.height = squareWidth + "px";
				body.appendChild(square);
				square.addEventListener("click",changeColor);
				pos_x += squareWidth;
				row++
				if(Math.pow(row,2) === numSquares) {
					row = 0;
					pos_y += squareWidth;
					pos_x = playArea.getBoundingClientRect().left;
				}
			}

		} else {
			warning.style.visibility = "visible";
			warningBtn.disabled = false;
		}	
	});

	warningBtn.addEventListener("click", ()=> {
		warning.style.visibility = "hidden";
		warningBtn.disabled = true;
	});

})();


