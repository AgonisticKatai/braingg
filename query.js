$.ajax({
	url: 'https://www.instagram.com/braingaming_/?__a=1'
})
.then( function(data){
	const latestIg = (data.user.media.nodes[0].thumbnail_src)
	const igDescription = (data.user.media.nodes[0].caption)
	const igLikes = (data.user.media.nodes[0].likes.count)
	//console.log(igDescription, igLikes)
	$('#latest-ig-pic').attr('src', latestIg)
	$('.igInfo h5').text(igDescription)
	$('.igInfo p').text(igLikes)
})

$('.news1')
	.hover(
		function(){
			$(this).find('.text-news').removeClass( 'hidden' )
		}, function() {
			$('.text-news').addClass( 'hidden' )
		}
)

$('.news1').click(function() {
	window.location = $(this).find("a").attr("href"); 
});


