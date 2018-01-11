

//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
	alert(link)
})
*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this);
	});
});