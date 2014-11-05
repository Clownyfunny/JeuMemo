"use script"
var numberOfCards = 4;
var numberOfClick = 0;
var randomImage = {
        paths: [
          "./img/memory01.png",
          "./img/memory02.png",
          "./img/memory03.png",
          "./img/memory04.png",
          "./img/memory05.png",
          "./img/memory06.png",
        ],
        generate: function(){
        var path = randomImage.paths[Math.floor(Math.random()*(numberOfCards/2))];
        return path;
        }
      }
$(document).ready(function(){
	for(i=0; i<numberOfCards; i++){
		$('.cardsBoard').append('<div class="card"><img src="'+randomImage.generate()+'" /></div>');
	}

	$('.card').click(function(){
		numberOfClick++;
		$(".clickCount").text(numberOfClick);
		if($(this).children().is(":visible")){
			$(this).children().hide();
		}
		else{
			$(this).children().show();
		}		
	});
});

