var secretNumber,  lastGuess = [],  newClick,form ,fillIn,feedback,counter,guessList;
$(document).ready(function(){
	var $overlay = $(".overlay")
	function fadeOverlay(toggle) {
		$overlay["fade" + toggle](1000);}
  	$(".what").click(function(){
    	fadeOverlay("In")});
  	$("a.close").click(function(){
  		fadeOverlay("Out")});
	newClick = $("a.new")
	form = $("form")
	fillIn = form.find("#userGuess")
	feedback = $("#feedback")
	counter = $("#count")
	guessList = $("#guessList")
	newGame();
	form.submit(function(start){
		start.preventDefault();
		getGuess();});
	newClick.click(newGame);});
function getGuess(){
	verifyGuess();
	render();
	guessRefresh();}
function randomNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;}
function hotCold (){
	var difference = Math.abs(+fillIn.val() - secretNumber);
	if(secretNumber === +fillIn.val()){
		return "You Won!";}
	else if(difference < 10) {
		return "very hot";}
	else if(difference < 20) {
		return "hot";}
	else if(difference < 30) {
		return "warm";}
	else if(difference < 50) {
		return "cold";}
	else {
		return "ice cold";}}
function verifyGuess(){
	if (isNaN(fillIn.val())){
		alert("Please pick a Number.");}
	if (!(101 > fillIn.val() && fillIn.val() > 0)) {
		alert("Make sure the number is from 1 - 100.");}}
function render(){
	guessList.html(listGuess());
	counter.html(lastGuess.length);
	feedback.html(fillIn.val() ? hotCold() : "Make Your Guess");}
function listGuess(){
	fillIn.val() && lastGuess.push(fillIn.val());
	 return lastGuess.length ? "<li>" + lastGuess.join("</li><li>") + "</li>": "";}
function guessRefresh(){
	 fillIn.val("");}
function newGame(){
	randomNumber();
	lastGuess = [];
	render();}