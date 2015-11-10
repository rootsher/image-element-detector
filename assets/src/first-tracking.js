window.onload = function() {
	var imageElement = document.querySelector('.image');
	var exampleContainer = document.querySelector('.example-container');

	var tracker = new tracking.ColorTracker([ 'magenta', 'cyan', 'yellow' ]);

	tracker.on('track', function (event) {
		event.data.forEach(function (rectangle) {
			window.plot(
				rectangle.x,
				rectangle.y,
				rectangle.width,
				rectangle.height,
				rectangle.color
			);
		});
	});

	tracking.track(imageElement, tracker);

	window.plot = function(posX, posY, width, height, color) {
		var rectangle = document.createElement('div');

		rectangle.classList.add('rectangle');
		rectangle.style.borderColor = color;
		rectangle.style.width = (width + 'px');
		rectangle.style.height = (height + 'px');
		rectangle.style.left = ((imageElement.offsetLeft + posX) + 'px');
		rectangle.style.top = ((imageElement.offsetTop + posY) + 'px');

		exampleContainer.appendChild(rectangle);
	};
};