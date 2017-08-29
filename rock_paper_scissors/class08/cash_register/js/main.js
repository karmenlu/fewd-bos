var total = 0;
//set event listener: user types number, hits enter then fire function called enter
document.getElementById('entry').onsubmit = enter;

function enter(e) {
	e.preventDefault();//prevent default refreshing
  var num = document.getElementById('newEntry').value;//declare num variable and assign value of user inputs
  currency = currencyFormat(num);
  num =parseFloat(num); 
  total = total + num;
  newTotally = totalFormat(total);
  document.getElementById('place').innerHTML = currency;
  document.getElementById('newTotal').innerHTML = newTotally;


}
function currencyFormat(number) {//create function to format num variable 
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '&#36;' + currency;
  return currency;//display $value.00
}



function totalFormat(number) {//create function to format num variable 
  var total = parseFloat(number);
  total = total.toFixed(2);
  total = '&#36;' + total;
  return total;//display $value.00
}
function add(x,y){
	return x+y;
}



//