var numberOfDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons.length; i++) {
	numberOfDrumButtons[i].addEventListener("click", function (event) {
		makeSound(event.target.dataset.audio);
		makeAnimation(event.target);
	});
}

document.addEventListener("keydown", function(event) {
	var currentElement = document.querySelector('.' + event.key);
	makeSound(currentElement.dataset.audio);
	makeAnimation(currentElement);
});

function makeSound(pathAudio) {
	new Audio(pathAudio).play(); 
}

function makeAnimation(currentElement) {
	currentElement.classList.add("pressed");	

	setTimeout(function() {
		currentElement.classList.remove("pressed");
	}, 1000);
}