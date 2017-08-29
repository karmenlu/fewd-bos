
$(document).ready(function(){
	$("#burger").on("click", function(){
		$("#navContain li").toggleClass("down");
		if($("#navContain li").hasClass("down")){$("#navContain li").css("height", "auto")}
			else{$("#navContain li").css("height", 0)}
		
	})
});