/*global jQuery*/

(function ($) {
	'use strict';
	
	$.ajax({
		url: '/answers/',
		type: 'GET',
		success: function (data) {
			if (data !== undefined && data.ANSWERS !== undefined && data.ANSWERS.length > 0) {
				var $tableBody = $("#admin_mainTableRows"),
					rowTemplate = $("#template_answerRow").html(),
					rowHTML = "";
				
				_.each(data.ANSWERS, function (answer) {
					answer.GOING = answer.GOING === 0 ? "No" : (answer.GOING === 1 ? "Yes" : "Not Sure");
					var currentRowHTML = _.template(rowTemplate, answer);
					rowHTML += currentRowHTML;
				});
				
				$tableBody.html(rowHTML);
				
			} else {
				
			}
		}
	});
	
}(jQuery));