$("#aboutlink, #arrowDown").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#about").offset().top
	}, 1100)
})

$("#worklink, #arrowDownSecond").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#work").offset().top
	}, 1100)
})

$("#imherelink, #arrowDownThird").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#imHere").offset().top
	}, 1100)
})

$("#arrowUp").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("body, html").offset().top
	}, 1700)
})

$("#javalink").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#bla").offset().top
	}, 1100)
})