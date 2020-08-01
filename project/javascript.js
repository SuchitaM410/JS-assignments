var quotes = [
'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.','The best time to plant a tree was 20 years ago. The second best time is now','It’s hard to beat a person who never gives up.','The secret of getting ahead is getting started.','If people are doubting how far you can go, go so far that you can’t hear them anymore.','We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.','You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.','Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.','Do one thing every day that scares you.']

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}