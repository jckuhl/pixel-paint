/*Pixel Painter


2018 Jonathan Kuhl */

(function() {
	const playArea = document.getElementById("playArea");
	const createBtn = document.getElementById("create");
	const gridsizeInput = document.getElementById("gridsize");
	const body = document.querySelector("body");
	const warning = document.getElementById("warning");
	const warningBtn = document.getElementById("warning-btn");
	const resetBtn = document.getElementById("reset");
	const clearBtn = document.getElementById("clear-btn");
	const randomBtn = document.getElementById("random-color");
	const colorPicker = document.getElementById("color-picker");

	let gridArray = [];
	let currentColor = "#2f999e";	//default to one of the theme colors

	function random(min, max) {
   		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//return a hex value from an rgb value
	function hex(rgb) {
		let hex = rgb.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function reset() {
		gridArray.forEach( (sq)=> body.removeChild(sq) );
		gridArray = [];
	}

	resetBtn.addEventListener("click",reset);

	colorPicker.addEventListener("change", ()=> {
		currentColor = colorPicker.value;
	});

	//reset the grid to white
	clearBtn.addEventListener("click", ()=> {
		gridsizeInput.value = "";
		if(gridArray !== []) {
			gridArray.forEach( (sq)=> sq.style.backgroundColor = "white");
		}
	});

	//get a random color
	randomBtn.addEventListener("click", ()=> {
		let red = random(0, 255);
		let green = random(0, 255);
		let blue =random(0, 255);

		currentColor = `rgb(${red}, ${green}, ${blue})`;

		colorPicker.value = `#${hex(red)}${hex(green)}${hex(blue)}`;
	});

	//creates a grid
	createBtn.addEventListener("click",()=> {
		const gridsize = parseInt(gridsizeInput.value);
		if((!isNaN(gridsize)) && (gridsize > 0) && (gridsize < 31)) {
			reset();
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
				square.addEventListener("click",function() {
					this.style.backgroundColor = currentColor;
				});
				gridArray.push(square);
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


