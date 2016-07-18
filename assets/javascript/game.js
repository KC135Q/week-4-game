$(document).ready(function() {
	var drivers = new Array(4);
	drivers[0] = new Driver ('Fittipaldi', 'fittipaldi.jpg', 120, 20, 25);
	drivers[1] = new Driver ('Mass', 'mass.jpg', 130, 25, 30);
	drivers[2] = new Driver ('Senna', 'senna.jpg', 140, 30, 35);
	drivers[3] = new Driver ('Top Dog', 'top-dog.jpg', 150, 35, 40);

	function Driver(name, image, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
	}

	function addDrivers(drivers) {
		for (ctr = 0; ctr < drivers.length; ctr++) {
			// console.log(drivers[ctr].image);
			// var $newDriver = $('<div class="driver col-sm-3"><span class="name">'+ drivers[ctr].name +'</span><img src="assets/images/'+ drivers[ctr].image +'"><span class="points">'+ drivers[ctr].health +'</span></div>');
			var $newDriver = $('<div>')
				.addClass('driver col-sm-3')
				.attr('driver-id', ctr)
				.html('<span class="name">'+ drivers[ctr].name +'</span><img src="assets/images/'+ drivers[ctr].image +'"><span class="points">'+ drivers[ctr].health +'</span>');
				// $newDriver.on('click', selectDriver(ctr));
			$('.drivers').append($newDriver);
		}		
	}

	function selectDriver(index) {
		console.log("Index " + index);
	}

	addDrivers(drivers);
	$('.driver').on('click', function() {
		selectDriver(this.getAttribute('driver-id'));
	});
	// console.log(drivers);
});