//eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(u).v(g(){$(\'#3-4 .l\').i(\'m\',g(e){e.t();$(\'#3-4 .l\').o().8(\'7\');$(\'#3-4 .l\').r(\'7\');9($(\'#3-4 .l\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.l\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.l\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .k\').i(\'m\',g(e){e.t();$(\'#3-4 .k\').o().8(\'7\');$(\'#3-4 .k\').r(\'7\');9($(\'#3-4 .k\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.k\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.k\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .n\').i(\'m\',g(e){e.t();$(\'#3-4 .n\').o().8(\'7\');$(\'#3-4 .n\').r(\'7\');9($(\'#3-4 .n\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.n\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.n\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .j\').i(\'m\',g(e){e.t();$(\'#3-4 .j\').o().8(\'7\');$(\'#3-4 .j\').r(\'7\');9($(\'#3-4 .j\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.j\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.j\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .h\').i(\'m\',g(e){e.t();$(\'#3-4 .h\').o().8(\'7\');$(\'#3-4 .h\').r(\'7\');9($(\'#3-4 .h\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.h\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.h\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .p\').i(\'m\',g(e){e.t();$(\'#3-4 .p\').o().8(\'7\');$(\'#3-4 .p\').r(\'7\');9($(\'#3-4 .p\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.p\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.p\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}})});',32,32,'open|slide|down|primary|nav|drop|addClass|active|removeClass|if|150|hide|hasClass|show||else|function|culture|on|technology|politics|international|click|business|siblings|blogs|slideUp|toggleClass|slideDown|preventDefault|document|ready'.split('|'),0,{}))

//user clicks li on nav bar, set event listener to toggle between slide down and hide
$(document).ready(function(){
//ideally set up conditional where every item with class international hides on click when hidden class becomes active
	$(".international").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("active");
	$("section.international").siblings().removeClass("active");
	$(".drop").hide();
	$("#international-drop").show();
	$("#slide-down").slideDown();
	if($(this).hasClass("active")){
	$("#slide-down").slideUp().removeClass("open");}
});

	$(".politics").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("active");
	$("section.politics").siblings().removeClass("active");
	$(".drop").hide();
	$("#politics-drop").show();
	$("#slide-down").slideDown();
	if($(this).hasClass("active")){
	$("#slide-down").slideUp().removeClass("open");}
});

	//set conditional so that if it is it does not have the class poltics it slides up 
//if something has the id business-drop fire the function toggleClass that in turn switches on/off the class hidden.
	//if something has some other class, then fire the function addClass to temporarily hide other tabs on click 
	$(".business").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("active");
	$("section.business").siblings().removeClass("active");
	$(".drop").hide();
	$("#business-drop").show();
	$("#slide-down").slideDown();
	if($(this).hasClass("active")){
	$("#slide-down").slideUp().removeClass("open");}
});
$(".technology").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("active");
	$("section.technology").siblings().removeClass("active");
	$(".drop").hide();
	$("#technology-drop").show();
	$("#slide-down").slideDown();
	if($(this).hasClass("active")){
	$("#slide-down").slideUp().removeClass("open");}
});
$(".culture").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("active");
	$("section.culture").siblings().removeClass("active");
	$(".drop").hide();
	$("#culture-drop").show();
	$("#slide-down").slideDown();
	if($(this).hasClass("active")){
	$("#slide-down").slideUp().removeClass("open");}
});
$(".blogs").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("active");
	$("section.blogs").siblings().removeClass("active");
	$(".drop").hide();
	$("#blogs-drop").show();
	$("#slide-down").slideDown();
	if($(this).hasClass("active")){
	$("#slide-down").slideUp().removeClass("open");}
});

});