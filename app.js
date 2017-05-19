var score = 0;
var playerChoice;

// Object:
var readable = {
	'0': 'Rock',
	'1': 'Paper',
	'2': 'Scissors'
};

// Function for generating random number between 0 and 3
var cpuChoice = {
	init: function() {
		this.store = Math.floor(Math.random() * 3);
		this.text = readable[this.store];
	},
	store: '',
	text: ''
}

// Array to compare choice of player and computer
var order = [0, 1, 2, 0];

var chooseWinner = function(player, cpu) {
	if(order[player] === order[cpu]) {
		return 'The game is tied. Try again?';
	}
	if(order[player] === order[cpu + 1]) {
		score++;
		return 'You win!';
	}
	else {
		score--;
		return 'You lose!';
	}
}

// UI code
// Selecting the p tag to augment
var paragraph = document.querySelector('p');

var assignClick = function(tag, position) {
	// Assign a click listener
	tag.addEventListener('click', function () {
		// set the player's choice
		playerChoice = position;
		// give feedback to cpu's choice
		cpuChoice.init();
		paragraph.innerText = 'The computer chose: ' + cpuChoice.text;
		// determine a winner
		// display the winner and current score
		paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
		paragraph.innerText += '\nScore: ' + score;
	})
}

// object
var images = {
	tags: document.getElementsByTagName('img'),
	init: function() {
		for(var step = 0; step < this.tags.length; step++) {
			assignClick(this.tags[step], step);
		}
	}
}

images.init();












