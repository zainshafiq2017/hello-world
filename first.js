//alert("This is an alert box!");
//var x$=100;
//document.write(x$ + "<br />");
var age = 42;
//var isAdult = (age < 18) ? "Too young"+"<br />": "Old enough"+"<br />";
//document.write(isAdult);
var x=0;
var sum=0;
for (x=4; x<8; x++) {
  if(x==6){
    continue;
  }
  sum+=x;
}
document.write(sum + "<br />");
x = 0;
while(x<6) {
x++;
}
document.write(x);

function test(a, b) {
if(a > b) {
return a*b;
} else {
return b / a;
}
}
alert(test(5, 15));
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
var p1 = new person("John",42,"green");
var p2 = new person("Amy", 21, "red");
document.write("<br />" + p1.age); // Outputs 42
document.write("<br />" + p2.name); // Outputs "Amy"

//var courses = new Array("Html","CSS","JS",);
var courses = new Array(3);
var name="zain";
document.write(name + "<br />");
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
document.write(courses[1]);

/*var n= prompt("Enter a number","Hi!");
var answer = Math.sqrt(n);
document.write("<br />" + answer);*/

/*var d = new Date();
var hours = d.getHours();
document.write("<br />" + hours + " ---- " + d);*/

//alert(Math.PI);

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
//setInterval(printTime, 1000);
/*window.onload = function() {
  var el = document.getElementsByTagName("a");
  el[0].href = "http://www.sololearn.com";

  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);
}*/

/*function show() {

    alert("Hi there");

}*/

//calling the function in window.onload to make sure the HTML is loaded
/*window.onload = function() {

    var x = document.getElementById('demo');

    x.onclick = function () {

        document.body.innerHTML = Date();

    }

};*/

/*function change() {

    var x = document.getElementById('name');

    x.value = x.value.toUpperCase();

}*/

//calling the function in window.onload to make sure the HTML is loaded

/*window.onload = function() {

    var btn = document.getElementById("demo");

    btn.addEventListener("click", myFunction);


    function myFunction() {

        alert(Math.random());

        btn.removeEventListener("click", myFunction);

    }

};*/

 var images = [
  'http://www.sololearn.com/uploads/slider/1.jpg', 
  'http://www.sololearn.com/uploads/slider/2.jpg', 
  'http://www.sololearn.com/uploads/slider/3.jpg'
  ];
  var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}
function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
      return true;
    }
  }
  alert("The values should be equal and not blank");
  return false;
}