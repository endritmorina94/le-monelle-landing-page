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
            sideBannersAnimation: false,
            bottomSliderAnimation: false,
            newsLetterAnimation: false,
            // Offset of elements that will activate the animations
            newsLetterOffset: 0,
            secondaryBanners: 0,
            bottomSliderOffset: 0,
            // Flag for Dropdown Menu
            dropdownActive: false
        },
        methods: {
            // Detecting scroll up or down or page start
            changeFlags() {
                if (this.lastKnownPosition < window.scrollY) {
                    this.scrollingDown = true;
                    this.scrollingUp = false;
                    this.pageStart = false;
                    // In case of scrolling down, set the flag as false, also uncheck the Burger's menu checkbox
                    this.dropdownActive = false;
                    document.getElementById("menu_checkbox").checked = false;
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

            // Setting the offset of the elements
            snapshotOfElementsOffset() {
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

                let newsletter = document.getElementById("newsletter");
                this.newsLetterOffset = newsletter.offsetTop - vh;

                let bottomSlider = document.getElementById("second-slider");
                this.bottomSliderOffset = bottomSlider.offsetTop - vh;

                let seasonBanners = document.getElementById("season-secondary-banners");
                this.secondaryBannersOffset = seasonBanners.offsetTop - vh;
            },

            // Detecting page section in order to start relative animation
            changeAnimationFlags() {
                if (this.lastKnownPosition > this.newsLetterOffset) {
                    this.newsLetterAnimation = true;
                } else if (this.lastKnownPosition > this.bottomSliderOffset) {
                    this.bottomSliderAnimation = true;
                } else if (this.lastKnownPosition > this.secondaryBannersOffset) {
                    this.sideBannersAnimation = true;
                }
            },

            toggleDropdown() {
                this.dropdownActive ? this.dropdownActive = false : this.dropdownActive = true;
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.snapshotOfElementsOffset();
            });

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
