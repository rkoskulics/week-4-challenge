$(document).ready(function(){

var attacker = "";

	function moveWarrior() {
		$("button").detach().appendTo("#row2");
	};

	$("button").on("click", function(){
		attacker = this.value;
		moveWarrior(attacker);
		console.log(this);
	})















});