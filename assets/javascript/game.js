$(document).ready(function() {
	var drivers = new Array(4);
	drivers[0] = new Driver ('Fittipaldi', 'fittipaldi.jpg', 120, 20, 25);
	drivers[1] = new Driver ('Mass', 'mass.jpg', 130, 25, 30);
	drivers[2] = new Driver ('Senna', 'senna.jpg', 140, 30, 35);
	drivers[3] = new Driver ('Top Dog', 'top-dog.jpg', 150, 35, 40);

	var player = -1;
	var opponent = -1;

	function Driver(name, image, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
	}

	function showDriverPool() {
		$('.drivers').empty();
		for (ctr = 0; ctr < drivers.length; ctr++) {
			// Check to see if they have been selected to play first
			// Will also need to check if they have been eliminated
			if (ctr != player && ctr != opponent) {
				var $newDriver = $('<div>')
					.addClass('driver col-sm-3')
					.attr('driver-id', ctr)
					.html('<span class="name">'+ drivers[ctr].name +'</span><img src="assets/images/'+ drivers[ctr].image +'"><span class="points">'+ drivers[ctr].health +'</span>');
					// $newDriver.on('click', selectDriver(ctr));
				$('.drivers').append($newDriver);				
			}
		}
		$('.driver').on('click', function() {
			selectDriver(this.getAttribute('driver-id'));
		});
	}

	function showPlayer(index) {
		var $newPlayer = $('<div>')
			.addClass(' player col-sm-offset-1 col-sm-3 ')
			.html('<span class="name">'+ drivers[index].name +'</span><img src="assets/images/'+ drivers[index].image +'"><span class="points">'+ drivers[index].health +'</span>');
		$('#player').html($newPlayer);
		$('#player-header').html('Player');
		$('#versus').html('<img src="assets/images/vs.png">');
	}
	function showOpponent(index) {
		var $newOpponent = $('<div>')
			.addClass('opponent col-sm-offset-1 col-sm-3 ')
			.html('<span class="name">'+ drivers[index].name +'</span><img src="assets/images/'+ drivers[index].image +'"><span class="points">'+ drivers[index].health +'</span>');
		$('#opponent').html($newOpponent);
		$('#opponent-header').html('Opponent');
	}
	function refreshDisplay () {
		console.log("Player: " + player + ", Opponent: " + opponent);
		showDriverPool();
		if (player != -1) {
			showPlayer(player);
		}
		if (opponent != -1) {
			showOpponent(opponent);
		}
	}

	function selectDriver(index) {
		console.log("Index " + index);
		if (player == -1 && opponent === -1 ) {
			// Nothing selected so this is the player
			player = index;
		} else if (opponent === -1) {
			// player already picked, so pick the opponent
			opponent = index;
		}
		refreshDisplay();
	}

	showDriverPool();

	// console.log(drivers);
});