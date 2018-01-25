var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'img/hanif.jpg') {

	myImage.setAttribute ('src','img/hanif1.jpg');
	}
	  else if(mySrc === 'img/hanif1.jpg')
	  {
	    myImage.setAttribute ('src','img/hanif2.jpg');
	  }
    
   	else {
	  myImage.setAttribute ('src','img/hanif.jpg');
	}
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Resume of Md Hanif, ' + myName;
}

if(!localStorage.getItem('name'))
	{
       setUserName();
    }
 else 
 {
   var storedName = localStorage.getItem('name');
   myHeading.innerHTML = 'Resume of Md Hanif, ' + storedName;
 }

myButton.onclick = function() {
  setUserName();
}