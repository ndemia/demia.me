$(document).ready(function() {

	// Minimize of the chat window.
	$('.conversation__user__info, .list__view__header').on('click', function(){
		$('.chat__mask').toggleClass('chat__mask--minimize');
	});

	function sendMessage() {
		// Get text message from input.
		var newMessage = $('#chat__input').val();
		// If input is empty and tries to send message, prevent sending.
		if (newMessage == '') {
			return false;
		} else {
			// Add to conversation.
			$('<article class="conversation__view__bubbles"><p class="chat__right__bubble">' + newMessage + '</p></article>').appendTo('.conversation__view__body');
			// Add message as last message received in the chat list.
			$('#chatID-1 .item__message').html('<span class=".item__message">' + newMessage + '</span');
			// Clear input.
			$('#chat__input').val('');
		}
	}

	$('.chat__conversation__send').on('click', function() {
		sendMessage();
	});

	$('#chat__input').keypress(function(e) {
		if(e.which == 13) {
			sendMessage();
		}
	});

	// Show new message notification after x seconds.
	function newMessage() {
		$('.conversation__new__message').addClass('chat__notification--active');
		$('#chatID-2 .item__user').addClass('chat__item--new');
	}
	setTimeout(newMessage, 4000);

	// Go to list view on new message notification.
	$('.conversation__new__message').on('click', function() {
		$('.chat__container').addClass('chat__list--active');
		$('.conversation__new__message').removeClass('chat__notification--active');
	});

	// Go to list view on chat list link.
	$('.list__view__link').on('click', function() {
		$('.chat__container').addClass('chat__list--active');
	});

	// Click to go to the conversation.
	$('#chatID-1').on('click', function() {
		$('.chat__container').removeClass('chat__list--active');
	});

	// Remove notification classes.
	$('#chatID-2').on('click', function() {
		$('#chatID-2').addClass('close__chat');
	});

	// Click to close chat conversation from the list.
	$('.item__close').on('click', function() {
		$(this).parent().addClass('close__chat');
	});

	// Click to close chat window altogether.
	$('.conversation__actions__close').on('click', function() {
		$('.chat__mask').addClass('close__chat');
	});

});