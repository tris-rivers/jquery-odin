$(document).ready(function(){
	makeGrid();

	$('.button').click(function(){
		$('.box').removeClass('color');
	});

});


$(document).on("mouseenter", ".box", function(){
	$(this).addClass("color");
});

function makeGrid(){
	for(var i = 0; i < 16; i++){
		for(var j = 0; j < 16; j++){
			$('#container').append('<div class="box"></div>');
		}
		$('#container').append('<br>');
	}
};

