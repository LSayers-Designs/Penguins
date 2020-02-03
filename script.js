/*
TITLE:
FILE NAME:
DESCRIPTION:
AUTHOR: Letisha Rahming
DATE CREATED: 1/23/2020
DATE COMPLETED:
LAST EDITED DATE: change window alert to instead append the text to document 
*/

//eVENT LISTEENER FOR PAGE OAD WHICH RUNS THE NEWGAME () Function

window.addEventListener("load", newGame);

document.getElementById("button").addEventListener("click", function(){
	window.location.reload();
});

//This function will geerate a random number between 1 and 9.  That number will represent the DIV the Yeti will hid in.  That DIV will gain an ID of "yet" and click event listener

function newGame() {
	var randNum = Math.floor(Math.random()*9)+2;
	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
	document.getElementById("yeti").addEventListener("click", function(){
		window.alert("RAWRRR! I AM THE YETI!!!  YOU HAVE LOST!!!");
		document.getElementById("audio").play();
	});
}