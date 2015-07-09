$(document).on('ready', function(){


	$('.body-div').on('click','.submit-button' , function(event){
		event.preventDefault();
		var quotes = $('.quote').val()
		var author = $('.author').val()
		
		var output = $('<div class="parent-container"><div class="append-div font"> "' + quotes 
			+ '" ' + '-' + author + '</div><button class="undo-button">Undo Quote</button></div>')
		console.log(quotes)
		console.log(author)



		if ((quotes === '') || ( author === '')){
			return alert('Wrong!')
		}

		else {

		$('input').val(' ')
		
		$('.appended-quotes').prepend(output)

		}





		$('.undo-button').on('click', function(){
			$(this).parent().remove()	
		})

	})

});