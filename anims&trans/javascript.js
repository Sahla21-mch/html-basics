/*to print on the browseres console
console.log("hello world!");
modes of js include:
strict mode and 
use const when youre creating a variable that cannot
 change eg const a = 4 you cannot reassighn a again:
 use let when creting variables that can be reassigned 

 SELECING ELEMENTS
some variables are global and all browsers recognize then and js in interpreted at the
level of the browser
global variable:
-window variable 
-document variable:information about your current page where the js file is intergrated into
To select an element in js use class,id,tagname
example:document.getElementbyclassname. Returns an array of html documents:
document.queryseector permits you to select based on your css selector
h1.textcontent= "hello world";
hi.inner ntml = "<span>"hello web programing
to select all elements with a particular tag use
h1.innert HTML = <span> Hello${user namer}</span>: generating html dynamically
cont = promt("enter your name:") */
const box = document.getElementsByClassName("box");
const box = document.querySelector(".box")
const secondelement = document.getElementById(second)
const thirdElement = document.getElementsByTagName("div")
console.log(secondelement)
