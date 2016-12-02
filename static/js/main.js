/*
 * Main.js - Affan Sadiq - v.0.1
 * Matrikelnummer: 1100242
 */


// Falls der SUBMIT-Button gedrückt wird, wird folgendes ausgeführt
$('#changecolor').on('click', function(e) {
	// Variablendeklaration
	var $label = $('.changecolor');

	/* 
	 * Falls der Button die Klasse on nicht hat dann wird
	 * Klasse 'on' hinzugefügt anderenfalls wieder weggenommen 
	 */
	if (!$label.hasClass('on')) {
		$label.toggleClass('on');
	} else {
		$label.toggleClass('on');
	}

});