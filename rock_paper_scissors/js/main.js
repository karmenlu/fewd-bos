var botScore=0,
	playerScore=0;
//set event listeners for rock, paper, and scissors that fire respective functions when clicked
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

//function to fire when rock clicked
function playerThrowsRock(){
	var botsWeapon= getRandomWeapon();// call to retreive random bot weapon
	checkWhoWon(botsWeapon,"rock");// call to compare weapons to check for winner
	displayG("You played <strong>rock</strong>. The bot played <strong>"+ botsWeapon+ "</strong>.");// call to display final results



}
//function to fire when scissors clicked
function playerThrowsScissors(){
	var botsWeapon= getRandomWeapon();//call to retrieve random bot weapon
	checkWhoWon(botsWeapon,"scissors");// call to compare weapons tp check for winner
	displayG("You played <strong>scissors</strong>. The bot played <strong>"+ botsWeapon+ "</strong>.");// call to display results
	//TODO!underline weapon choices

}
//function to fire when paper clicked
function playerThrowsPaper(){
	var botsWeapon= getRandomWeapon();// call to retrieve random bot weapon
	checkWhoWon(botsWeapon,"paper");// call to compare weapons tp check for winner
	displayG("You played <strong>paper</strong>. The bot played <strong>"+ botsWeapon+ "</strong>.");// call to display results
}
//Use Math.random and conditionals to randomize bot choice
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
//set conditionals to display appropriate message
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("You tied. :|");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
//set function to adjust scores 
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("You lose :(");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You win. :)");

}
//set function to display final messages
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
function displayG(msg){
	document.getElementById("displayG").innerHTML=msg;
}
