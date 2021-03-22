var info = {
    "name": "Nazeem pathan",
    "title":"Mobile Developer",
    "email": "Nazeempathan17@gmail.com",
	"address":"Mhow, Madhya Pradesh, India",
    "about_me":"I'm Mobile Developer, I am omnivert person. I have interests in learning new things and technologies. I often find myself vibing to good music and I enjoy playing cricket. I am kinda omnivert and selectively change my personality.",
    "instagram":"",
    "linkedin": "https://www.linkedin.com/in/nazeem-pathan-87133014b",	
    "twitter":"#",
    "github":"https://github.com/nazeem-jit",
	"work_experience": [
		{
			"work_title": "Customer Relationship Management",
			"company_name": "Oak Tree",
			"company_link": "",
			"description": "In Oak tree I have worked with salesforce CRM and learned a lot about customer management and relations, there I have learned how to deal with customers effectively and There I got to learn a lot.",
		},
		{
			"work_title": "Mobile Developer",
			"company_name": "JIT Inspire",
			"company_link": "https://www.jitinspire.com/",
			"description": "In a startup company I have learned mobile technologies and learned how to do things quikcly and effectively, I have learned Flutter there and Learned how to learn new things quickly.",
		},
	],
	"education":[
		{
			"course_title":"Bachelors Degree",
			"institute_name":"Sushila Devi Bansal College Of Technology ",
			"course_name":"I am doing my bachelor's degree in this institute. My course is Computer Science in B.E.",
		}
	]


}

var workHTMLTemplate="";
var educationTemplate="";
; (function () {

		'use strict';

		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};


		var fullHeight = function () {

			if (!isMobile.any()) {
				$('.js-fullheight').css('height', $(window).height());
				$(window).resize(function () {
					$('.js-fullheight').css('height', $(window).height());
				});
			}
		};

		// Parallax
		var parallax = function () {
			$(window).stellar();
		};

		var contentWayPoint = function () {
			var i = 0;
			$('.animate-box').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function () {

						$('body .animate-box.item-animate').each(function (k) {
							var el = $(this);
							setTimeout(function () {
								var effect = el.data('animate-effect');
								if (effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if (effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if (effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							}, k * 100, 'easeInOutExpo');
						});

					}, 50);

				}

			}, { offset: '85%' });
		};



		var goToTop = function () {

			$('.js-gotop').on('click', function (event) {

				event.preventDefault();

				$('html, body').animate({
					scrollTop: $('html').offset().top
				}, 500, 'easeInOutExpo');

				return false;
			});

			$(window).scroll(function () {

				var $win = $(window);
				if ($win.scrollTop() > 200) {
					$('.js-top').addClass('active');
				} else {
					$('.js-top').removeClass('active');
				}

			});

		};

		var pieChart = function () {
			$('.chart').easyPieChart({
				scaleColor: false,
				lineWidth: 4,
				lineCap: 'butt',
				barColor: '#40826d',
				trackColor: "#f5f5f5",
				size: 160,
				animate: 1000
			});
		};

		var skillsWayPoint = function () {
			if ($('#fh5co-skills').length > 0) {
				$('#fh5co-skills').waypoint(function (direction) {

					if (direction === 'down' && !$(this.element).hasClass('animated')) {
						setTimeout(pieChart, 400);
						$(this.element).addClass('animated');
					}
				}, { offset: '90%' });
			}

		};

		var getDetails = () => {

					var name = document.getElementsByClassName("name");
					var title = document.getElementsByClassName("title");
					var email = document.getElementsByClassName("email");
					var address = document.getElementsByClassName("address");
					var github = document.getElementsByClassName("github")
					var linkedin = document.getElementsByClassName("linkedin")
					var twitter = document.getElementsByClassName("twitter")
					var instagram = document.getElementsByClassName("instagram")
					var footerEmail = document.getElementsByClassName("footer-email");
					var aboutMe = document.getElementsByClassName("about-me");
					var work = info.work_experience;
					var educationInfo = info.education;
					console.log(name)

					for(var i=0;i<name.length;i++)
					{
						name.item(i).innerHTML = info.name;
					}
					title.item(0).innerHTML = info.title;
					email.item(0).innerHTML = info.email;
					address.item(0).innerHTML = info.address;
					for(var i=0;i<github.length;i++)
					{
						github.item(i).href = info.github;
					}
					for(var i=0;i<linkedin.length;i++)
					{
						linkedin.item(i).href = info.linkedin;
					}
					for(var i=0;i<twitter.length;i++)
					{
						twitter.item(i).href = info.twitter;
					}
					for(var i=0;i<instagram.length;i++)
					{
						instagram.item(i).href = info.instagram;
					}
					footerEmail.item(0).innerHTML = info.email;
					footerEmail.item(0).href = "mailto:"+info.email;
					aboutMe.item(0).innerHTML = info.about_me;

					for (let workPlaces = 0; workPlaces < work.length;workPlaces++) {
						workHTMLTemplate += `<li class="timeline-unverted work-list-items animate-box" >
						<div class="timeline-badge"><i class="icon-suitcase"></i></div>
						<div class="timeline-panel">
							<div class="timeline-heading">
								<h3 class="timeline-title"> ${work[workPlaces].work_title} </h3><span class="company"><a href=${work[workPlaces].company_link} id="company-link">${work[workPlaces].company_name}</a></span>
		
							</div>
							<div class="timeline-body" style="color: white;">
								<p>
									${work[workPlaces].description}
								</p>
							</div>
						</div>
						</li>`
					}
		
		
					$("#resume_details").append(workHTMLTemplate);
					var educationHeading = `<li class="timeline-heading text-center animate-box" ">
					<div><h3>Education</h3></div>
				</li>`
				$("#resume_details").append(educationHeading);
					
					for(var edu=0;edu<educationInfo.length;edu++)
					{
						educationTemplate+=`<li class="timeline-inverted animate-box >
						<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
						<div class="timeline-panel">
							<div class="timeline-heading">
								<h3 class="timeline-title">${educationInfo[0].course_title}</h3>
								<span class="company">${educationInfo[0].institute_name}</span>
							</div>
							<div class="timeline-body" style="color: white;">
								<p>
								${educationInfo[0].course_name}
								</p>
							</div>
						</div>
					</li>`
					}
					$("#resume_details").append(educationTemplate);
		





		}
				

		// Loading page
		var loaderPage = function () {
			$(".fh5co-loader").fadeOut("slow");
		};


		$(function () {
			goToTop();

			loaderPage();
			fullHeight();
			parallax();
			// pieChart();
			getDetails();
			contentWayPoint();

			skillsWayPoint();
		});


	}());