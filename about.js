console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

img.addEventListener('mouseover', (compliment) => {
	alert('You are as good looking as this rubbery ducky!');
	// This site feels kind of creepy... Why all these compliments?
})