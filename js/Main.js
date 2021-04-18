console.log("script found");

var aboutVar =false;

window.onload = function() {
  document.getElementById('info_panel').style = "visibility: hidden;";
};


function menu() {
  document.getElementById('menu').style = "animation: drop 1s ease forwards;";
  document.getElementById('burger').style = "animation: transform 1s ease forwards;";
  document.getElementById('burger_button').setAttribute( "onClick", "javascript: main();" );
  document.getElementById('info_panel').style = "animation: drop_panel 1s ease forwards;";
  setTimeout(function () {document.getElementById('burger').src ="./images/IconExit.png";}, 1000);
  document.getElementById('info_panel').style = "visibility: hidden;";

}
function main(){
	console.log("main set");
	document.getElementById('menu').style = "animation: undrop 1s ease forwards;";
    document.getElementById('burger').style = "animation: untransform 1s ease forwards;";
    document.getElementById('burger_button').setAttribute( "onClick", "javascript: menu();" );
    setTimeout(function () {document.getElementById('burger').src ="../images/IconMenu.png";}, 1000);
    if(aboutVar == true){
    	document.getElementById('about_us').style = "animation: about_back 1s ease forwards";
    }

}

function contacts(){
	console.log("contacts set");
	document.getElementById('info_panel').style = "visibility: visible;";
	document.getElementById('info_panel').style = "animation: undrop_panel 1s ease forwards;";
	main();
}

function about(){
	document.getElementById('about_us').style = "animation: about 1s ease forwards";
	aboutVar = true;
}
