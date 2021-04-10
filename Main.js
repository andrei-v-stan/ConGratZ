console.log("script found");

var aboutVar =false;

window.onload = function() {
  document.getElementById('info_panel').style = "visibility: hidden;";
};


function menu() {
  document.getElementById('menu').style = "animation: drop 2s ease forwards;";
  document.getElementById('burger').style = "animation: transform 2s ease forwards;";
  document.getElementById('burger_button').setAttribute( "onClick", "javascript: main();" );
  document.getElementById('info_panel').style = "animation: drop_panel 2s ease forwards;";
  setTimeout(function () {document.getElementById('burger').src ="../images/X.png";}, 1000);
  document.getElementById('info_panel').style = "visibility: hidden;";

}
function main(){
	console.log("main set");
	document.getElementById('menu').style = "animation: undrop 2s ease forwards;";
    document.getElementById('burger').style = "animation: untransform 2s ease forwards;";
    document.getElementById('burger_button').setAttribute( "onClick", "javascript: menu();" );
    setTimeout(function () {document.getElementById('burger').src ="../images/Burger.png";}, 1000);
    if(aboutVar == true){
    	document.getElementById('about_us').style = "animation: about_back 2s ease forwards";
    }

}

function contacts(){
	console.log("contacts set");
	document.getElementById('info_panel').style = "visibility: visible;";
	document.getElementById('info_panel').style = "animation: undrop_panel 2s ease forwards;";
	main();
}

function about(){
	document.getElementById('about_us').style = "animation: about 2s ease forwards";
	aboutVar = true;
}
