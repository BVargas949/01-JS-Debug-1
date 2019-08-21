/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

function populateFigures(){
   var filename;
   var currentfig;
   for(var i= 1; i<4; i++){
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
      currentfig = document.getElementsByTagName("img")[i-1];
currentfig.src = filename;
   }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive(){
  
}

/* open center figure in separate window */
function zoomFig() {
   alert("center image clicked");
}


function createEventListeners(){

var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");
if(leftArrow.addEventListener){
   leftArrow.addEventListener("click", leftArrow,false);
}else if(leftArrow.attachEvent){
   leftArrow.addEventListener("onlclick",leftArrow);
}

if(rightArrow.addEventListener){
   rightArrow.addEventListener("click", rightArrow,false);
}else if(rightArrow.attachEvent){
   rightArrow.addEventListener("onlclick",rightArrow);
}

var mainfig = document.getElementsByTagName("img")[1];

if (mainfig.addEventListener) {
   mainfig.addEventListener("click",zoomFig,false);
}else if(mainfig.attachEvent){
   mainfig.addEventListener("click",zoomFig);
}

var showAllButton = document.querySelector("#fiveButton p");
if(showAllButton.addEventListener){
   showAllButton.addEventListener("click", previewFive, false);
}else if(showAllButton.attachEvent){
   showAllButton.attachEvent("onclick", previewFive);
}
}



/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}