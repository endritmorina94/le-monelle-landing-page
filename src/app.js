var app = new Vue(
    {
        el: '#root',
        data: {
            // Logo's Url
            logoImg: "img/logo.png",
            // Top Slider Images
            topSliderImgs: [
                "img/slide-1.jpg",
                "img/slide-2.jpg",
                "img/slide-3.jpg",
                "img/slide-4.jpg",
                "img/slide-5.jpg"
            ],
            // Bottom Slider Images
            bottomSliderImgs: [
                "img/img-lookbook-1.jpg",
                "img/img-lookbook-2.jpg",
                "img/img-lookbook-3.jpg",
                "img/img-lookbook-4.jpg",
                "img/img-lookbook-5.jpg",
                "img/img-lookbook-6.jpg",
                "img/img-lookbook-7.jpg",
                "img/img-lookbook-8.jpg",
                "img/img-lookbook-9.jpg",
            ],
            // Newsletter Banner Image
            newsletterImg: "img/coming-soon.jpg",
            // Job Offers
            jobOffers: [
                {
                    title: "ADDETTA ALLE VENDITE",
                    place: "RICCIONE",
                    contractType: "Tempo pieno, Tempo indeterminato",
                    description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
                    requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
                },
                {
                    title: "ADDETTA ALLE VENDITE",
                    place: "RICCIONE",
                    contractType: "Tempo pieno, Tempo indeterminato",
                    description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
                    requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
                },
                {
                    title: "ADDETTA ALLE VENDITE",
                    place: "RICCIONE",
                    contractType: "Tempo pieno, Tempo indeterminato",
                    description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
                    requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
                },
                {
                    title: "ADDETTA ALLE VENDITE",
                    place: "RICCIONE",
                    contractType: "Tempo pieno, Tempo indeterminato",
                    description: "Le Monelle ricerca risorse spigliate e dinamiche da inserire nel proprio organico. Si occuperanno dell'assistenza alla vendita, del supporto al cliente e della sistemazione della merce.",
                    requirements: "Empatia, capacità di ascolto, orientamento al risultato e al cliente, buone capacità organizzative, disponibilità a lavorare durante il week-end."
                }
            ],
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
            changeFlags() {
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
            changeActiveLinks() {
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
            changeAnimationFlags() {
                if (this.lastKnownPosition > 2900) {
                    this.newsLetterAnimation = true;
                } else if (this.lastKnownPosition > 2300) {
                    this.bottomSlider = true;
                } else if (this.lastKnownPosition > 1400) {
                    this.sideBanners = true;
                }
            }

        },
        mounted() {
            document.addEventListener('scroll', (e) => {
                this.changeFlags();
                this.changeActiveLinks();
                this.changeAnimationFlags();
                console.log(window.scrollY);
                console.log("bottoms  " + this.bottomSlider);
                if (window.scrollY == 0) {
                    this.scrollingDown = false;
                    this.scrollingUp = false;
                    this.pageStart = true;
                }
                this.lastKnownPosition = window.scrollY;
            });

            // Top Slider
            var swiper = new Swiper(".slider-top", {
                slidesPerView: 2,
                direction: 'horizontal',
	            loop: true,
                centeredSlides: true,
            });

            // Bottom Slider
            var swiper2 = new Swiper(".slider-bottom", {
                slidesPerView: 1,
                direction: 'horizontal',
	            loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                spaceBetween: 10,
                pagination: {
                    el: ".bottom-swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    // when window width is <= 768px
                    991: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 10
                    },
                    // when window width is <= 991px
                    768: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 10
                    }
                }
            });
        }
    }
);
