$(document).on('ready', function(){

	var $undoDelete
	var $quoteList = []
	var quoteCount = 0

	$quoteList.sortByRating = function(){
		return _.sortBy(this, 'rating').reverse()
	}


	var Quote = function(name, text, id, rating){
		this.authorName = name;
		this.quoteText = text;
		this.quoteId = id;
		this.Rating = rating;
		this.$el = null
	}

	$('.submit-button').on('click', function(){
		quoteCount++

		var tempAuthorName = $('.quote').val();
		var tempQuoteText = $('.author').val();
		var tempQuoteId = quoteCount;

		var myQuote = new Quote(tempAuthorName, tempQuoteText, tempQuoteId, 0)

		myQuote.html()

		
	})


























	// $('.submit-button').on('click', function(event){
		
	// 	var quotes = $('.quote').val()
	// 	var author = $('.author').val()
	// 	// var rating = $('<div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
	// 	// 	</div>')
		
	// 	var output = $('<div class="parent-container"><div class="append-div font"> "' + quotes 
	// 		+ '" ' + '-' + author + '</div><button class="undo-button">Remove</button></div>')
	// 	console.log(quotes)
	// 	console.log(author)



		// if ((quotes === '') || ( author === '')){
		// 	return alert('Wrong!')
		// }

		// else {

		// $('input').val('')
		
		// $('.appended-quotes').prepend(output)

		// }





	// 	$('.undo-button').on('click', function(){
	// 		$(this).parent().hide()
	// 		var appQuote = $('<div class="undo parent-container append-div">Your item was deleted: <button class="reverse">Undo?</button></div>')
	// 		$('.appended-quotes').append(appQuote)
			
	// 			$('.undo-button').on('click', '.reverse', function(event){
	// 				event.preventDefault()
	// 				$(this).show()
	// 			})

	// 	})

	// })


	// $('.random-quote').on('click', function(){
	// 	var randQuote = $('<div class="random"><div class ="random-quote"</div><button class="close-button btn btn-primary ">Close</button></div')
	// 	var quote = $('.random').text('"Hello" -Me')
	// 	// var output = randQuote.text(quote)
	// 	$('.appended-quotes').append(randQuote)
	// })

});

