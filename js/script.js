
if (document.documentElement.clientWidth > 992) {
	runSwiper(1.75);
	bindSwipers(slider1, slider2, slider3, slider4);
} else if (document.documentElement.clientWidth > 767) {
	const box1 = document.querySelector('.slider1 .swiper-wrapper');
	const box2 = document.querySelector('.slider3 .swiper-wrapper');
	const wrapper2 = document.querySelector('.slider3');
	const items1 = box2.querySelectorAll('.slider__item');
	for (let i = 0; i < items1.length; i++) {
		box1.appendChild(items1[i]);
	}
	wrapper2.parentNode.removeChild(wrapper2);
	const box3 = document.querySelector('.slider2 .swiper-wrapper');
	const box4 = document.querySelector('.slider4 .swiper-wrapper');
	const wrapper4 = document.querySelector('.slider4');
	const items2 = box4.querySelectorAll('.slider__item');
	for (let i = 0; i < items2.length; i++) {
		box3.appendChild(items2[i]);
	}
	wrapper4.parentNode.removeChild(wrapper4);
	runSwiper(1.7);
	bindSwipers(slider1, slider2);
} else {
	const box1 = document.querySelector('.slider1 .swiper-wrapper');
	const box2 = document.querySelector('.slider2 .swiper-wrapper');
	const box3 = document.querySelector('.slider3 .swiper-wrapper');
	const box4 = document.querySelector('.slider4 .swiper-wrapper');
	const wrapper2 = document.querySelector('.slider2');
	const wrapper3 = document.querySelector('.slider3');
	const wrapper4 = document.querySelector('.slider4');
	const items2 = box2.querySelectorAll('.slider__item');
	const items3 = box3.querySelectorAll('.slider__item');
	const items4 = box4.querySelectorAll('.slider__item');
	for (let i = 0; i < items2.length; i++) {
		box1.appendChild(items2[i]);
	}
	for (let i = 0; i < items3.length; i++) {
		box1.appendChild(items3[i]);
	}
	for (let i = 0; i < items4.length; i++) {
		box1.appendChild(items4[i]);
	}
	wrapper2.parentNode.removeChild(wrapper2);
	wrapper3.parentNode.removeChild(wrapper3);
	wrapper4.parentNode.removeChild(wrapper4);
	runSwiper(1.4);
	bindSwipers(slider1);
}



function runSwiper(slidesPerScreen) {
	document.querySelectorAll('.slider').forEach((n, i) => {
		window[`slider${i + 1}`] = new Swiper(n, {
			freeMode: true,
			centeredSlides: true,
			direction: 'vertical',
			mousewheel: true,
			slidesPerView: slidesPerScreen,
			slidesOffsetBefore: -125,
		})
	})
};

