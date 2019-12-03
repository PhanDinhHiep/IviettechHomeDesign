$(document).ready(function(){
		$('#tiep').click(function(){
		var anhdau = $('.slide img:last-child');
		$('.slide').prepend(anhdau);
		// console.log(anhdau);
	})
});

$(document).ready(function(){
	$('#lui').click(function(){
	 var anhcuoi = $('.slide img:first-child');
	 $('.slide').append(anhcuoi);
	// console.log(anhcuoi);
	})
});