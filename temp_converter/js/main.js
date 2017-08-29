var total = 0;
//when user clicks the button, run the convert function
document.getElementById('convert').onclick = convert;
document.getElementById('convert2').onclick = convert2;

function convert(){
//take value stored in #a
var a =
document.getElementById('a').value;
//set up variable to store the result 
//set conversion string where value is multiply by 9, divide by 5, and add 32
total= a *9 /5 +32
document.getElementById('result').innerHTML=total;
};

//set up convert2 function
function convert2(){
//get value stored in #b
	var b =
	document.getElementById('b').value;
	total= b -32 /9 *5
	document.getElementById('result2').innerHTML=total;
};


