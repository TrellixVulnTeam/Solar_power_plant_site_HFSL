"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/sliders.js":
/*!*********************************!*\
  !*** ./src/js/files/sliders.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _scss_base_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/base/swiper.scss */ "./src/scss/base/swiper.scss");
/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }

/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили

// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d51c621e429217da1b22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MGQyMWI0YTYxMTg1OWUxOWE0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDK0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLE1BQU0sOENBQU0sY0FBYztBQUMxQjtBQUNBO0FBQ0EsYUFBYSw4Q0FBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQy9JRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zbGlkZXJzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC/0L4g0YDQsNCx0L7RgtC1INCyINGI0LDQsdC70L7QvdC1OiBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINGB0LvQsNC50LTQtdGA0LA6IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG7QodC90LjQv9C/0LXRgihIVE1MKTogc3dpcGVyXHJcbiovXHJcblxyXG4vLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDRgdC70LDQudC00LXRgCBTd2lwZXIg0LjQtyBub2RlX21vZHVsZXNcclxuLy8g0J/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC/0L7QtNC60LvRjtGH0LDQtdC8INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LAsINGD0LrQsNC30YvQstCw0Y8g0LjRhSDQsiB7fSDRh9C10YDQtdC3INC30LDQv9GP0YLRg9GOXHJcbi8vINCf0YDQuNC80LXRgDogeyBOYXZpZ2F0aW9uLCBBdXRvcGxheSB9XHJcbmltcG9ydCBTd2lwZXIsIHsgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbi8qXHJcbtCe0YHQvdC+0LLQvdC40YvQtSDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsDpcclxuTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXksIFxyXG5FZmZlY3RGYWRlLCBMYXp5LCBNYW5pcHVsYXRpb25cclxu0J/QvtC00YDQvtCx0L3QtdC1INGB0LzQvtGC0YDQuCBodHRwczovL3N3aXBlcmpzLmNvbS9cclxuKi9cclxuXHJcbi8vINCh0YLQuNC70LggU3dpcGVyXHJcbi8vINCR0LDQt9C+0LLRi9C1INGB0YLQuNC70LhcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9iYXNlL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7Qu9C90YvQuSDQvdCw0LHQvtGAINGB0YLQuNC70LXQuSDQuNC3IHNjc3MvbGlicy9zd2lwZXIuc2Nzc1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9zY3NzL2xpYnMvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtC70L3Ri9C5INC90LDQsdC+0YAg0YHRgtC40LvQtdC5INC40Lcgbm9kZV9tb2R1bGVzXHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcblxyXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00LXRgNC+0LJcclxuZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcblx0Ly8g0J/QtdGA0LXRh9C10L3RjCDRgdC70LDQudC00LXRgNC+0LJcclxuXHQvLyDQn9GA0L7QstC10YDRj9C10LwsINC10YHRgtGMINC70Lgg0YHQu9Cw0LnQtNC10YAg0L3QsCDRgdGC0YDQvtC90LjRhtC1XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKSkgeyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdC8vINCh0L7Qt9C00LDQtdC8INGB0LvQsNC50LTQtdGAXHJcblx0XHRuZXcgU3dpcGVyKCcuc3dpcGVyJywgeyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblx0XHRcdG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcclxuXHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdHNwZWVkOiA4MDAsXHJcblxyXG5cdFx0XHQvL3RvdWNoUmF0aW86IDAsXHJcblx0XHRcdC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcblx0XHRcdC8vbG9vcDogdHJ1ZSxcclxuXHRcdFx0Ly9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0Ly9sYXp5OiB0cnVlLFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0Ly8g0K3RhNGE0LXQutGC0YtcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDMwMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0Ly8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcblx0XHRcdC8qXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0Ly8g0KHQutGA0L7Qu9C70LHQsNGAXHJcblx0XHRcdC8qXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG5cdFx0XHQvKlxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblx0XHRcdC8vINCh0L7QsdGL0YLQuNGPXHJcblx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbi8vINCh0LrRgNC+0LvQuyDQvdCwINCx0LDQt9C1INGB0LvQsNC50LTQtdGA0LAgKNC/0L4g0LrQu9Cw0YHRgdGDIHN3aXBlcl9zY3JvbGwg0LTQu9GPINC+0LHQvtC70L7Rh9C60Lgg0YHQu9Cw0LnQtNC10YDQsClcclxuZnVuY3Rpb24gaW5pdFNsaWRlcnNTY3JvbGwoKSB7XHJcblx0bGV0IHNsaWRlclNjcm9sbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlcl9zY3JvbGwnKTtcclxuXHRpZiAoc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoID4gMCkge1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGxJdGVtID0gc2xpZGVyU2Nyb2xsSXRlbXNbaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGxCYXIgPSBzbGlkZXJTY3JvbGxJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyk7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbCA9IG5ldyBTd2lwZXIoc2xpZGVyU2Nyb2xsSXRlbSwge1xyXG5cdFx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRcdG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG5cdFx0XHRcdGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRcdGVsOiBzbGlkZXJTY3JvbGxCYXIsXHJcblx0XHRcdFx0XHRkcmFnZ2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRzbmFwT25SZWxlYXNlOiBmYWxzZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bW91c2V3aGVlbDoge1xyXG5cdFx0XHRcdFx0cmVsZWFzZU9uRWRnZXM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNsaWRlclNjcm9sbC5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0Ly8g0JfQsNC/0YPRgdC6INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INGB0LvQsNC50LTQtdGA0L7QslxyXG5cdGluaXRTbGlkZXJzKCk7XHJcblx0Ly8g0JfQsNC/0YPRgdC6INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INGB0LrRgNC+0LvQu9CwINC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbClcclxuXHQvL2luaXRTbGlkZXJzU2Nyb2xsKCk7XHJcbn0pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ1MWM2MjFlNDI5MjE3ZGExYjIyXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9