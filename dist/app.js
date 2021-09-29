/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    // Logo's Url
    logoImg: "img/logo.png",
    // Top Slider Images
    topSliderImgs: ["img/slide-1.jpg", "img/slide-2.jpg", "img/slide-3.jpg", "img/slide-4.jpg", "img/slide-5.jpg"],
    // Bottom Slider Images
    bottomSliderImgs: ["img/img-lookbook-1.jpg", "img/img-lookbook-2.jpg", "img/img-lookbook-3.jpg", "img/img-lookbook-4.jpg", "img/img-lookbook-5.jpg", "img/img-lookbook-6.jpg", "img/img-lookbook-7.jpg", "img/img-lookbook-8.jpg", "img/img-lookbook-9.jpg"],
    // Newsletter Banner Image
    newsletterImg: "img/coming-soon.jpg",
    // Job Offers
    jobOffers: [{
      title: "ADDETTA ALLE VENDITE",
      place: "RICCIONE",
      contractType: "Tempo pieno, Tempo indeterminato",
      description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
      requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
    }, {
      title: "ADDETTA ALLE VENDITE",
      place: "RICCIONE",
      contractType: "Tempo pieno, Tempo indeterminato",
      description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
      requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
    }, {
      title: "ADDETTA ALLE VENDITE",
      place: "RICCIONE",
      contractType: "Tempo pieno, Tempo indeterminato",
      description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
      requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
    }, {
      title: "ADDETTA ALLE VENDITE",
      place: "RICCIONE",
      contractType: "Tempo pieno, Tempo indeterminato",
      description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
      requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
    }],
    // Flags for scriling events
    lastKnownPosition: 0,
    scrollingDown: false,
    scrollingUp: false,
    pageStart: true,
    // Flags for active classes on scroll
    lookbook: true,
    newsLetter: false,
    workWithUs: false,
    // Flags for animations on scrolling
    sideBanners: false,
    bottomSlider: false,
    newsLetterAnimation: false
  },
  methods: {
    // Detecting scroll up or down or page start
    changeFlags: function changeFlags() {
      if (this.lastKnownPosition < window.scrollY) {
        this.scrollingDown = true;
        this.scrollingUp = false;
        this.pageStart = false;
      } else {
        this.scrollingDown = false;
        this.scrollingUp = true;
        this.pageStart = false;
      }
    },
    // Detecting page section in order to give active class to navbar links
    changeActiveLinks: function changeActiveLinks() {
      if (this.lastKnownPosition > 4600) {
        this.workWithUs = true;
        this.newsLetter = false;
        this.lookbook = false;
      } else if (this.lastKnownPosition > 3800) {
        this.workWithUs = false;
        this.newsLetter = true;
        this.lookbook = false;
      } else if (this.lastKnownPosition < 3300) {
        this.workWithUs = false;
        this.newsLetter = false;
        this.lookbook = true;
      }
    },
    // Detecting page section in order to start relative animation
    changeAnimationFlags: function changeAnimationFlags() {
      if (this.lastKnownPosition > 2900) {
        this.newsLetterAnimation = true;
      } else if (this.lastKnownPosition > 2300) {
        this.bottomSlider = true;
      } else if (this.lastKnownPosition > 1400) {
        this.sideBanners = true;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.addEventListener('scroll', function (e) {
      _this.changeFlags();

      _this.changeActiveLinks();

      _this.changeAnimationFlags();

      console.log(window.scrollY);
      console.log("bottoms  " + _this.bottomSlider);

      if (window.scrollY == 0) {
        _this.scrollingDown = false;
        _this.scrollingUp = false;
        _this.pageStart = true;
      }

      _this.lastKnownPosition = window.scrollY;
    }); // Top Slider

    var swiper = new Swiper(".slider-top", {
      slidesPerView: 2,
      direction: 'horizontal',
      loop: true,
      centeredSlides: true
    }); // Bottom Slider

    var swiper2 = new Swiper(".slider-bottom", {
      slidesPerView: 3,
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      spaceBetween: 10,
      pagination: {
        el: ".bottom-swiper-pagination",
        clickable: true
      }
    });
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmonelle"] = self["webpackChunkmonelle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;