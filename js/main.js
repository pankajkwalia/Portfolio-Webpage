 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });
 const chatLog = document.getElementById("chat-log");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatContainer = document.getElementById("chat-container");
const chatToggleBtn = document.getElementById("chat-toggle");

// Toggle chatbot visibility
chatToggleBtn.addEventListener("click", () => {
  chatContainer.style.display =
    chatContainer.style.display === "none" || chatContainer.style.display === ""
      ? "flex"
      : "none";
});

// Resume information prompt as context for the bot
const systemPrompt = `
You are ResumeBot, an AI assistant designed to answer questions about a candidate named Pankaj Kumar.
Your role is to help others understand Pankaj’s background based only on the resume provided.
You must strictly answer only the question asked, and no more. Do not introduce Pankaj or summarize the resume. Do not answer multiple questions at once. Respond briefly and in the third person.
If a question is irrelevant, respond with: "I'm here to answer only questions about Pankaj Kumar's resume."

[RESUME]

Full Name: Pankaj Kumar  
Email: 2022mcb1274@iitrpr.ac.in  
Phone: +91-9971208882  
GitHub: https://github.com/pankajkwalia  
LinkedIn: https://www.linkedin.com/in/pankaj-kumar-walia-0b5a18264/  

🎓 Education  
- B.Tech in Mathematics and Computing, IIT Ropar (2022–2026), CGPA: 6.49 (till 4th semester)  
- Class 12 (CBSE), 2021 – 97.2%  
- Class 10 (CBSE), 2019 – 96.2%

💻 Projects  
1. Image Compression Using QuadTrees  
   - Python-based compression using quadtree structures  
   - GitHub: https://github.com/r0hit91314/image-compression-using-quad-tree.git

2. Smart File Organiser  
   - Automatic file sorter with MySQL tracking and task scheduling  
   - GitHub: https://github.com/pankajkwalia/Smart-File-Organiser

3. BoatMart – E-commerce Website  
   - Full-stack site with payment, cart logic, animations  
   - GitHub: https://github.com/pankajkwalia/BoatMart.git

4. Minor Projects  
   - Sorting Algorithm Visualizer (Tkinter, Matplotlib)  
   - Flappy Bird Clone (Pygame)  
   - GitHub: https://github.com/pankajkwalia/Sorting-Algorithm-Visualizer.git  
   - GitHub: https://github.com/pankajkwalia/Flappy-Bird.git

🧠 Technical Skills  
- Languages: C, C++, Python, SQL, Arduino  
- Web: HTML, CSS, JavaScript, ReactJS, NextJS  
- Tools: NumPy, OpenCV, Matplotlib, Tkinter, PyGame, Git, Linux, VS Code, LaTeX

📚 Key Courses  
- Data Structures, TOC, Numerical Analysis, Discrete Math, Probability, Linear Algebra

👥 Position of Responsibility  
- Head, Workshop & Talks Team – Advitiya 2025 (IIT Ropar)
- Co-Head, Workshop & Exhibition Team – Advitiya 2024 (IIT Ropar)

🏆 Achievements  
- Top 1% in JEE Advanced 2022  
- G.C. Lagan Young Scientist Award – 2018  
- Academic Scholar (2015–2019)  
- NSO & IMO Olympiad participant (2015–2018)

[/RESUME]
`;

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  // Show user's question
  chatLog.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  userInput.value = "";

  try {
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer caae0a1b2f0e7391d9efa67305ec18d496004325e5397769db7077b1151c8bd1", // ✅ Replace with your API key
      },
      body: JSON.stringify({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // ✅ Or another model if you prefer
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 300
      }),
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content?.trim() || "Sorry, something went wrong.";
    chatLog.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  } catch (error) {
    console.error("Error:", error);
    chatLog.innerHTML += `<p><strong>Bot:</strong> An error occurred: ${error.message}</p>`;
  }
}); 
 
(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

