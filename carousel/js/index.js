
$(document).ready(function(){
//set up event listeners for when user clicks on back 
//function for back
//event listener for skip
//function for skip
//set up event listeners for when user clicks on back 
//function for back
var count =0;
//if skip, fire function the pushes for next photo in queue
$(".btn[value='Skip']").on("click", function(){
	count=count +1;
	if (count>7){count=0};
	$("#image-to-vote-on").attr("src", food[count]);
	if($("img").attr("src") === "images/food8.jpg" ){$("#end").text("You have reached the end!").delay(300).fadeOut()};

});
$(".btn[value='Back']").on("click", function(){
	count=count-1;
	if (count<0){count=7};	
	$("#image-to-vote-on").attr("src", food[count]);
	if($("img").attr("src") === "images/food8.jpg" ){$("#end").text("You have reached the end!").delay(300).fadeIn()};
	
});

//set array with images as elements, get images by 
var food = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg",
"images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg","images/food9.jpg"];
//currentPhoto var count = 0;
//skip count = count +1;
// back count = count -1;


//use eq to link pics to elements of an array 






});
//if i click 