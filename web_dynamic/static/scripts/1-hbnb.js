window.onload = () => {
	const checkbox = document.querySelector('.amenities .popover input');

	checkbox.addEventListener('change', () => {
		let amenities = {};

		if (checkbox.checked) {
			amenName = checkbox.getAttribute('data-name');
			amenities[amenName] = checkbox.getAttribute('data-id');
		} else {
			delete amenities[amenName];
		}

		const amenitiesChecked = Object.keys(amenities);
		const h4Amenities = document.querySelector('.amenities h4');
		h4Amenities.textContent = amenitiesChecked.join(', ');
	});
};
