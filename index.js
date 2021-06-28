const menu = document.querySelector('.menu');
const wrappers = document.querySelectorAll('.wrapper');
const targets = document.querySelectorAll('.target');

menu.addEventListener('click', () => {
	targets.forEach(target => {
		target.classList.toggle('change');
	});
});

wrappers.forEach(wrapper => {
	wrapper.addEventListener('click', () => {
		targets.forEach(target => {
			target.classList.remove('change');
		});
	});
});

// Section Video
const videos = document.querySelectorAll('.video');

videos.forEach(video => {
	video.addEventListener('mouseover', () => video.play());
	video.addEventListener('mouseout', () => video.pause());
});
