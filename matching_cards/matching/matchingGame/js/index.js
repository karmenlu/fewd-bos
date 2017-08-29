
$(document).ready(function(){
	//set up variable that counts matches
//set up variable that counts matches
var clickCount = 0;
var matchCount = 0;
//set up empty array, push clicked(class=selected) items into array, then compare objects in array by index
var selectedArray=[];
//set up deckSrc array as a deck of two king and two queen cards
var deckSrc=["../images/King.png","../images/King.png","../images/Queen.png","../images/Queen.png"];
//click event for start button that shuffles/deals cards, leaving cards with backs facing player
$("#start").on("click", function(){
	alert("Let the games begin!")
	reset();
	shuffle();
	console.log("do the shuffle")
});

//click event for start button that shuffles/deals cards, leaving cards with backs facing player
$("#reset").on("click", function(){
	reset();
	shuffle();
	console.log("do the shuffle")

});
//click on card, set event listener for this method
$(".card").on("click", function(){
	clickCount = clickCount + 1;
	console.log(clickCount);
$(this).addClass("selected");
//give cards fronts
var id = $(this).attr("id");
if(id == 'card1'){
	$("#card1").attr("src", deckSrc[0]).addClass(deckSrc[0])};
if (id == 'card2'){
	$("#card2").attr("src", deckSrc[1]).addClass(deckSrc[1])};
if (id == 'card3'){
	$("#card3").attr("src", deckSrc[2]).addClass(deckSrc[2])};
if (id == 'card4'){
	$("#card4").attr("src", deckSrc[3]).addClass(deckSrc[3])};
selectedArray.push($(this).attr("class"));
    	console.log(selectedArray);
	


//if two element in selectedArray, run function checkForMatch
if ($(".selected").length == 2){
	console.log(selectedArray);
	checkForMatch();
};

//when player reaches max matches(2 matches), fire the function gameOver to display msg
if(matchCount == 2){
	gameOver();
};
});

function checkForMatch(){
	//if match, fire function match
	if (selectedArray[0] == selectedArray[1]){
	match();}
	else{//if no match; matchCount stays the same, flip selected cards over, remove .selected, empty the selectedArray
		console.log(matchCount+"No Match!");
		
	};
	// fire nextPair after 7 seconds, so chosen cards face front before flipped and round reset
	setTimeout(nextPair,700);	
}

function match(){
	matchCount = matchCount + 1;
	console.log("You got a match! "+matchCount);
	//give matched cards the class matchFound
	$("img.selected").addClass("matchFound");
}


//nextPair function runs after two cards chosen. clears selectedArray, toggles the class selected, flips first two cards to back
function nextPair(){

	if ($("img.selected").hasClass("matchFound")){}
		else{$(".selected").attr("src", "../images/back-of-card.png")};
	$(".card").removeClass("selected");
	selectedArray = [];
	console.log("array:"+selectedArray);
	console.log("next pair prepared!");
}

//matchOver function displays matchCount as match score, displays clickCount as total clicks
function gameOver(){
$("#winText").css({"color":"red", "font-size":"20px"}).text("Congrats you got "+matchCount+" matches in only "+clickCount+" clicks!");
};

//reset function resets the matchCount, resets clickCount
function reset(){
	matchCount = 0;
	clickCount = 0;
	$("img.card").attr("src", "../images/back-of-card.png")
	console.log("reset active")
};

//shuffle function shuffles 4 possible card fronts
function shuffle(){
//Loop to shuffle deck using Fisher-Yates Shuffle(Adam Khoury, YouTube)
//set up varible i for our loop
  var i=deckSrc.length, randomNumber, temporaryValue;
//decremate array length array each time so 3,2,1
	while(--i>0){
	randomNumber = Math.floor(Math.random()*(i+1));
//grab randomNumber index position of deck array and set equal to temporaryValue
	temporaryValue =deckSrc[randomNumber];
//randomNumber array position gets swapped with permanent array position
	deckSrc[randomNumber]=deckSrc[i];
	deckSrc[i]=temporaryValue;
}}
});
//.pop.push.shift.unshift
	//this becomes img with .card, .selected, and .king/.queen 

	//call function that changes that image, figure out which card got flipped, assign class selected that is unclickable
	//create event listener for another clicked card, which runs(changes images, figures out what card was flipped, pushes that card into array,assign class selected that is unclickable)
	//determine if there is a match 

	//define variable for counter to track card clicks, set count = 0(counter++)
	//conditionals if first two don't match, on third click flip last two cards over, on fourth click
	
	//(togggle class selected should )
	 //ELSE()
	//compare items based on indecies

	
	//if index 1 and index 0 are equal (var[0]=var[1])A MATCH!COMPARISON, go back to event listener, run comparisons, matchcounter
	//if two matches, set up alert that reveals click count to player

	//ELSE(), go back to event listener for card click
	//alert how many turns it took to match 
//a turn is two clicks, divide counter by two
//when array length equals two, trigger comparison 