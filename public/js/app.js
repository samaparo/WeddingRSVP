/*global jQuery*/

(function ($) {
	'use strict';
	
	//Page Initialization
	$("#rsvp_container").css("display", "none");
	$("#static_container").css("display", "block");
	
	//Show Form Behavior
	$("#rsvp_showForm button").on("click", function (e) {
		
		$("#rsvp_form input").val("");
		$("#rsvp_form select option").eq(0).attr("selected", "selected");
		
		$("#rsvp_confirm").css("display", "none");
		$("#rsvp_form").css("display", "block");
		
		$("#rsvp_container").css("display", "block");
		$("#static_container").css("display", "none");
		
		
		
		//debug
		//$("#rsvp_confirm").css("display", "block");
		//$("#rsvp_form").css("display", "none");
	});
	
	//Hide Form Behavior
	$("#rsvp_confirm button").on("click", function (e) {
		
		$("#rsvp_container").css("display", "none");
		$("#static_container").css("display", "block");
	});
	
	
	//Submit Form Behavior
	$("#rsvp_submit").on("click", function (e) {
		
		var rsvp_name, rsvp_going, rsvp_email, rsvp_phone, rsvp_message;
		rsvp_name = escape($("#rsvp_name").val());
		rsvp_email = escape($("#rsvp_email").val());
		rsvp_phone = escape($("#rsvp_phone").val());
		rsvp_message = escape($("#rsvp_message").val());
		
		rsvp_going = $("#rsvp_going option:selected").val();
		
		$.ajax({
			url: 'http://localhost:3000/answers/',
			type: 'POST',
			data: {
				NAME: rsvp_name,
				EMAIL: rsvp_email,
				PHONE: rsvp_phone,
				MESSAGE: rsvp_message,
				GOING: rsvp_going
			}
		});
		
		
		$("#rsvp_confirm").css("display", "block");
		$("#rsvp_form").css("display", "none");
		
	});
	
}(jQuery));