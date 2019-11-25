var Homepage_icon = document.querySelector('img')
Homepage_icon.onclick = function(){
  var mySrc = Homepage_icon.getAttribute('src');
  if(mySrc === 'images/firefox-logo.jpg') {
      Homepage_icon.setAttribute ('src','images/google-logo.jpg');
    } else {
      Homepage_icon.setAttribute ('src','images/firefox-logo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}