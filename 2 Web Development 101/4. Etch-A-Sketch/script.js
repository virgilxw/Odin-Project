$(document).ready(function () {
	var grid_size = 7;
	var counter = 0;
	var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

	// figure out size of cell
	var cell_size = 700 / grid_size;

	// draw grid
	draw_grid(grid_size, cell_size);

	
	// check for mouseover
	$("#grid").on("mouseenter", "div", function () {
		//change the colour of the div which has been moused over
		$(this).css("background-color", CSS_COLOR_NAMES[counter]);
		
		//keep counter looping
		if (counter == 147){
			counter = 0;
		}
		else{
			counter = counter + 1;
		}
	});

	// event handler for change in size field
	$("#grid_size").change(function () {
		console.log("grid_size changed to " + $(this).val());
		grid_size = $(this).val();

		// check if grid_size larger than 0
		if (grid_size < 1) {
			console.log("grid_size is less than 1");
			$(this).css("color", "red");
		}
		// check if grid_size is an interger
		else if (grid_size % 1 != 0) {
			console.log("grid_size is not an interger");
			$(this).css("color", "red");
			// update grid to new grid_size
		} else {
			$(this).css("color", "black");
			cell_size = 700 / grid_size;
			draw_grid(grid_size, cell_size);
		}
	});
});

//function to draw grid
function draw_grid(grid_size, cell_size) {
	//instantiate variables
	var i;
	var j;

	$("#grid").empty();

	//iterate to create rows
	for (i = 0; i < grid_size; i++) {
		for (j = 0; j < grid_size; j++) {
			//draw row of divs, assinging them a class of "cell" and a css width and height
			$("#grid").append("<div class='cell'></div>").find("div:last").css({
				"width": cell_size,
				"height": cell_size
			});
		}
		//end the line
		$("#grid").append("<br>");
	}
}