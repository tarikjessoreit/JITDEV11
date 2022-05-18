$(document).ready(function(){

	$('.hide_btn').click(function(){
		$('.content').slideUp(1000);
	});

	$('.show_btn').click(function(){
		$('.content').slideDown(1000);
	});


	$('.clickme').click(function(){
		// $('body').css("background-color", "red");;
		$('body').css({"background-color": "red", 'color': 'white'});
	});


	$('.stop').click(function(){
		alert($('.content').height());
	});


	$('.display_val').keyup(function(){
		var mark = $('.display_val').val();

		if(mark>32){
			$('h1').html('Pass');
		}else{
			$('h1').html('Faild');

		}
	});



	




});



