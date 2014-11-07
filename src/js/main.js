"use script"
var numberOfCards = 10;
if(numberOfCards%2 > 0){
	numberOfCards = numberOfCards+1;
}
var numberOfImages = 6;
var numberOfClick = 0;
var images = [];
var arrayTamp = []
$(document).ready(function(){
	for (var i = 0; i < numberOfCards/2; i++) { 
	  var rand = Math.floor(Math.random() * (numberOfImages))+1; 
	  var img = './img/memory0' + rand + '.png';
	  images.push(img);
	  images.push(img);
	}
	randomizeImages();

	for(i=0; i<numberOfCards;i++){
		$('.cardsBoard').append('<div class="card"><img src="'+images[i]+'"/></div>');
	};

	$('.card').click(function(){
		numberOfClick++;
		$(".clickCount").text(numberOfClick);
		if($(this).children().is(":visible")){
			$(this).children().hide();
			arrayTamp.pop();
		}
		else{
			$(this).children().show();
			arrayTamp.push($(this));
			if(arrayTamp.length==2){
				if(arrayTamp[0].find('img').attr('src')==arrayTamp[1].find('img').attr('src')){
					setTimeout(function() {
						arrayTamp[1].children().hide();
				        arrayTamp[0].children().hide();
						arrayTamp[1].addClass("disable").off('click');
						arrayTamp[0].addClass("disable").off('click');
						arrayTamp = [];
					}, 500);
				}
				else {
					setTimeout(function() {
			          arrayTamp[1].children().hide();
			          arrayTamp[0].children().hide();
			          arrayTamp = [];	
			        }, 500);
				}
			}
		}		
	});
});

// randomize array of images
function randomizeImages(){
  Array.prototype.randomize = function()
  {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  
  images.randomize();
}