let sliderImages = document.querySelector('#m_home_slider');
let leftArrow = document.querySelector('.left_a');
let rightArrow = document.querySelector('.right_a');
let current = 0;

function leftClick() {
	if (current===0) {
		current = 1;
		sliderImages.style.backgroundImage = "url('img/slider_img2.jpg')";
	} else if (current===1) {
		current = 0;
		sliderImages.style.backgroundImage = "url('img/slider_img.jpg')";
	}
}

function rightClick() {
	if (current===0) {
		current = 1;
		sliderImages.style.backgroundImage = "url('img/slider_img2.jpg')";
	} else if (current===1) {
		current = 0;
		sliderImages.style.backgroundImage = "url('img/slider_img.jpg')";
	}
}


leftArrow.onclick = leftClick;
rightArrow.onclick = rightClick;