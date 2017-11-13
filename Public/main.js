$('.remove-player').on('click', function(e) {
  const $liContainer = $(this).closest('li')

  const id = $liContainer.context.dataset.id

  const url = `/${id}`
  const method = 'DELETE'

  $.ajax({ url, method})
    .then( () => {
    	console.log('pressed button')
    	window.location.href='/'
    })
})