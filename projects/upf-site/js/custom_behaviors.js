jQuery.noConflict();
jQuery(document).ready(function($) {
					
	// VARIABLES
	var thisIsATouchDevice;
	var observer = new IntersectionObserver(entries => {
		// console.log(entries);
		if (entries[0].boundingClientRect.y < 0) {
			// console.log("After pixel");
			$("header").css({"backgroundColor": "rgba(214, 47, 4, 1)", "boxShadow": "0px 5px 10px rgba(0, 0, 0, 0.22)"});
			$(".headerGradient").fadeOut(250)
		} else {
			// console.log("Before pixel");
			$("header").css({"backgroundColor": "rgba(214, 47, 4, 0)", "boxShadow": "none"});
			$(".headerGradient").fadeIn(250)
		}
	});
	var isPanel1Open = false;
	var isPanel2Open = false;
	var isPanel3Open = false;
	var isPanel4Open = false;


	// EVENT HANDLERS
	observer.observe(document.querySelector("#pixel-to-watch"));

    $('.navLink').on('click', function(event){
		event.preventDefault();

		if (!$("nav").is(':animated') && !$("html, body").is(':animated')){
			$("nav").animate({
				"right": "-75vw"
			}, 500, "easeInOutCubic")
			$(".navScreenOverlay").fadeOut(500)
			$("nav").css({"boxShadow": "none"});

			var destination = $(this).attr('href');
			var headerHeight = $("header").css("height")
			var headerHeightNum = headerHeight.substr(0, headerHeight.length-2)

			function vh(value) { return (window.innerHeight * (value / 100)); }

			if (window.innerWidth < 768){
				if($(this).hasClass("topPadd")){
					var totalOffset = Number(headerHeightNum) - Number(vh(19.642857142857143/2))
					$('html, body').stop(true).animate({
				        scrollTop: $(destination).offset().top-totalOffset
					}, 1200,'easeInOutExpo');

				} else if ($(this).hasClass("noTopPadd")){
					var totalOffset = Number(headerHeightNum) + Number(vh(19.642857142857143/2))
					$('html, body').stop(true).animate({
				        scrollTop: $(destination).offset().top-totalOffset
					}, 1200,'easeInOutExpo');
				}

			} else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
				if($(this).hasClass("topPadd")){
					var totalOffset = Number(headerHeightNum) - Number(vh(13.888888888888889/2))
					$('html, body').stop(true).animate({
				        scrollTop: $(destination).offset().top-totalOffset
					}, 1200,'easeInOutExpo');

				} else if ($(this).hasClass("noTopPadd")){
					var totalOffset = Number(headerHeightNum) + Number(vh(13.888888888888889/2))
					$('html, body').stop(true).animate({
				        scrollTop: $(destination).offset().top-totalOffset
					}, 1200,'easeInOutExpo');
				}

			} else if (window.innerWidth >= 1025){
				if($(this).hasClass("topPadd")){
					var totalOffset = Number(headerHeightNum) - Number(vh(0))
					$('html, body').stop(true).animate({
				        scrollTop: $(destination).offset().top-totalOffset
					}, 1200,'easeInOutExpo');

				} else if ($(this).hasClass("noTopPadd")){
					var totalOffset = Number(headerHeightNum) + Number(vh(10.37037037037037))
					$('html, body').stop(true).animate({
				        scrollTop: $(destination).offset().top-totalOffset
					}, 1200,'easeInOutExpo');
				}
			}

			$(".navScreenBlur").fadeIn(400, function(){
				$(".navScreenBlur").delay(400).fadeOut(400)
			})
		}
	});

	$('.headerLogo, .footerLogo').on('click', function(event){
		event.preventDefault();
		var destination = $(this).attr('href');
		$('html, body').stop(true).animate({
	        scrollTop: $(destination).offset().top
		}, 1200,'easeInOutExpo');

		$(".navScreenBlur").fadeIn(400, function(){
			$(".navScreenBlur").delay(400).fadeOut(400)
		})
	});

	$('.scroll').on('click', function(event){
		event.preventDefault();

		var destination = $(this).attr('href');
		var headerHeight = $("header").css("height")
		var headerHeightNum = headerHeight.substr(0, headerHeight.length-2)

		function vh(value) { return (window.innerHeight * (value / 100)); }

		if (window.innerWidth < 768){
			var totalOffset = Number(headerHeightNum) - Number(vh(19.642857142857143/2))
			$('html, body').stop(true).animate({
		        scrollTop: $(destination).offset().top-totalOffset
			}, 1200,'easeInOutExpo');

		} else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
			var totalOffset = Number(headerHeightNum) - Number(vh(13.888888888888889/2))
			$('html, body').stop(true).animate({
		        scrollTop: $(destination).offset().top-totalOffset
			}, 1200,'easeInOutExpo');

		} else if (window.innerWidth >= 1025){
			var totalOffset = Number(headerHeightNum) - Number(vh(0))
			$('html, body').stop(true).animate({
		        scrollTop: $(destination).offset().top-totalOffset
			}, 1200,'easeInOutExpo');
		}

		$(".navScreenBlur").fadeIn(400, function(){
			$(".navScreenBlur").delay(400).fadeOut(400)
		})
	});

	$(".navButton").on("click", function(event){
		event.preventDefault();
		// $("nav").fadeIn(500)
		if (!$("nav").is(':animated')){
			$("nav").animate({
				"right": "0"
			}, 500, "easeInOutCubic")
			$(".navScreenOverlay").fadeIn(500)
			$("nav").css({"boxShadow": "-5px 0px 15px rgba(0, 0, 0, .22)"});
		}
	})

    $(".closeNav").on("click", function(event){
    	event.preventDefault();
    	//$("nav").fadeOut(500)
    	if (!$("nav").is(':animated')){
	    	$("nav").animate({
				"right": "-75vw"
			}, 500, "easeInOutCubic")
			$(".navScreenOverlay").fadeOut(500)
			$("nav").css({"boxShadow": "none"});
	    }
    })

	$(window).on("resize", function(){
		if(window.innerWidth >= 768){
			$("nav").css("display", "flex")
		} else {
			$("nav").css("display", "none")
		}
	})

	$(".p1").on("click", function(event){
		event.preventDefault();

		if(window.innerWidth < 768){
			// console.log("MOBILE CLICK")
			acc1Toggle("97.4565vw", "22.504vw", "3.571428571428571vw");
			acc2Close("89.022vw", "15.183vw", "7.321vw");
			acc3Close("76.832vw", "7.49885714285714vw", "11.070571428571429vw");
			acc4Close("84.332vw", "15.183vw", "7.321vw");

		} else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
			// console.log("TABLET CLICK")
			acc1Toggle("69.685vw", "10.501vw", "3.333333333333333vw");
			acc2Close("64.435vw", "5.252vw", "5.958063818vw");
			acc3Close("60.6862vw", "5.252vw", "5.958063818vw");
			acc4Close("60.6862vw", "5.252vw", "5.958063818vw");
		} else if (window.innerWidth >= 1025){
			// console.log("DESKTOP CLICK")
			acc1Toggle("48.907vw", "7.5004vw", "1.8286vw");
			acc2Close("45.157vw", "3.75vw", "3.703703703703703vw");
			acc3Close("42.5165vw", "3.75vw", "3.703703703703703vw");
			acc4Close("42.5165vw", "3.75vw", "3.703703703703703vw");
		}
	})

	$(".p2").on("click", function(event){
		event.preventDefault();

		if(window.innerWidth < 768){
			// console.log("MOBILE CLICK")
			acc2Toggle("89.022vw", "15.183vw", "7.321vw");
			acc1Close("97.4565vw", "22.504vw", "3.571428571428571vw");
			acc3Close("76.832vw", "7.49885714285714vw", "11.070571428571429vw");
			acc4Close("84.332vw", "15.183vw", "7.321vw");
			
		} else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
			// console.log("TABLET CLICK")
			acc2Toggle("64.435vw", "5.252vw", "5.958063818vw");
			acc1Close("69.685vw", "10.501vw", "3.333333333333333vw");
			acc3Close("60.6862vw", "5.252vw", "5.958063818vw");
			acc4Close("60.6862vw", "5.252vw", "5.958063818vw");

		} else if (window.innerWidth >= 1025){
			// console.log("DESKTOP CLICK")
			acc2Toggle("45.157vw", "3.75vw", "3.703703703703703vw");
			acc1Close("48.907vw", "7.5004vw", "1.8286vw");
			acc3Close("42.5165vw", "3.75vw", "3.703703703703703vw");
			acc4Close("42.5165vw", "3.75vw", "3.703703703703703vw");
		}
	})

	$(".p3").on("click", function(event){
		event.preventDefault();

		if(window.innerWidth < 768){
			// console.log("MOBILE CLICK")
			acc3Toggle("76.832vw", "7.49885714285714vw", "11.070571428571429vw");
			acc1Close("97.4565vw", "22.504vw", "3.571428571428571vw");
			acc2Close("89.022vw", "15.183vw", "7.321vw");
			acc4Close("84.332vw", "15.183vw", "7.321vw");
			
		} else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
			// console.log("TABLET CLICK")
			acc3Toggle("60.6862vw", "5.252vw", "5.958063818vw");
			acc1Close("69.685vw", "10.501vw", "3.333333333333333vw");
			acc2Close("64.435vw", "5.252vw", "5.958063818vw");
			acc4Close("60.6862vw", "5.252vw", "5.958063818vw");

		} else if (window.innerWidth >= 1025){
			// console.log("DESKTOP CLICK")
			acc3Toggle("42.5165vw", "3.75vw", "3.703703703703703vw");
			acc1Close("48.907vw", "7.5004vw", "1.8286vw");
			acc2Close("45.157vw", "3.75vw", "3.703703703703703vw");
			acc4Close("42.5165vw", "3.75vw", "3.703703703703703vw");
		}
	})

	$(".p4").on("click", function(event){
		event.preventDefault();

		if(window.innerWidth < 768){
			// console.log("MOBILE CLICK")
			acc4Toggle("84.332vw", "15.183vw", "7.321vw");
			acc1Close("97.4565vw", "22.504vw", "3.571428571428571vw");
			acc2Close("89.022vw", "15.183vw", "7.321vw");
			acc3Close("76.832vw", "7.49885714285714vw", "11.070571428571429vw");
			
		} else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
			// console.log("TABLET CLICK")
			acc4Toggle("60.6862vw", "5.252vw", "5.958063818vw");
			acc1Close("69.685vw", "10.501vw", "3.333333333333333vw");
			acc2Close("64.435vw", "5.252vw", "5.958063818vw");
			acc3Close("60.6862vw", "5.252vw", "5.958063818vw");

		} else if (window.innerWidth >= 1025){
			// console.log("DESKTOP CLICK")
			acc4Toggle("42.5165vw", "3.75vw", "3.703703703703703vw");
			acc1Close("48.907vw", "7.5004vw", "1.8286vw");
			acc2Close("45.157vw", "3.75vw", "3.703703703703703vw");
			acc3Close("42.5165vw", "3.75vw", "3.703703703703703vw");
		}
	})


	// QUESTION 1

	$("#oneBluLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#oneBluLabel", "#oneBlu", "#oneBreLabel", "#oneBre", "#onePeaLabel", "#onePea", "#oneCheLabel", "#oneChe", ".q2Next");
	})

	$("#oneBreLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#oneBreLabel", "#oneBre", "#oneBluLabel", "#oneBlu", "#onePeaLabel", "#onePea", "#oneCheLabel", "#oneChe", ".q2Next");
	})

	$("#onePeaLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#onePeaLabel", "#onePea", "#oneBreLabel", "#oneBre", "#oneBluLabel", "#oneBlu", "#oneCheLabel", "#oneChe", ".q2Next");
	})

	$("#oneCheLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#oneCheLabel", "#oneChe", "#oneBreLabel", "#oneBre", "#onePeaLabel", "#onePea", "#oneBluLabel", "#oneBlu", ".q2Next");
	})

	$(".q2Next").on("click", function(event){
		event.preventDefault();
		$("#q1").fadeOut(750, function(){
			$("#q2").fadeIn(750);
			// $(".q1Back").fadeIn(750);
		})
	})


	// QUESTION 2

	$("#twoPFLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#twoPFLabel", "#twoPF", "#twoUPFLabel", "#twoUPF", "#twoPILabel", "#twoPI", "#twoUMPFLabel", "#twoUMPF", ".q3Next");
	})

	$("#twoUPFLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#twoUPFLabel", "#twoUPF", "#twoPFLabel", "#twoPF", "#twoPILabel", "#twoPI", "#twoUMPFLabel", "#twoUMPF", ".q3Next");
	})

	$("#twoPILabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#twoPILabel", "#twoPI", "#twoUPFLabel", "#twoUPF", "#twoPFLabel", "#twoPF", "#twoUMPFLabel", "#twoUMPF", ".q3Next");
	})

	$("#twoUMPFLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#twoUMPFLabel", "#twoUMPF", "#twoUPFLabel", "#twoUPF", "#twoPILabel", "#twoPI", "#twoPFLabel", "#twoPF", ".q3Next");
	})

	$(".q1Back").on("click", function(event){
		event.preventDefault();
		$("#q2").fadeOut(750, function(){
			$("#q1").fadeIn(750);
		})
	})

	$(".q3Next").on("click", function(event){
		event.preventDefault();
		$("#q2").fadeOut(750, function(){
			$("#q3").fadeIn(750);
		})
	})


	// QUESTION 3

	$("#thr22Label").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#thr22Label", "#thr22", "#thr17Label", "#thr17", "#thr50Label", "#thr50", "#thr44Label", "#thr44", ".q4Next");
	})

	$("#thr17Label").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#thr17Label", "#thr17", "#thr22Label", "#thr22", "#thr50Label", "#thr50", "#thr44Label", "#thr44", ".q4Next");
	})

	$("#thr50Label").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#thr50Label", "#thr50", "#thr17Label", "#thr17", "#thr22Label", "#thr22", "#thr44Label", "#thr44", ".q4Next");
	})

	$("#thr44Label").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#thr44Label", "#thr44", "#thr17Label", "#thr17", "#thr50Label", "#thr50", "#thr22Label", "#thr22", ".q4Next");
	})

	$(".q2Back").on("click", function(event){
		event.preventDefault();
		$("#q3").fadeOut(750, function(){
			$("#q2").fadeIn(750);
		})
	})

	$(".q4Next").on("click", function(event){
		event.preventDefault();
		$("#q3").fadeOut(750, function(){
			$("#q4").fadeIn(750);
		})
	})


	// QUESTION 4

	$("#fouMenLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fouMenLabel", "#fouMen", "#fouCanLabel", "#fouCan", "#fouArtLabel", "#fouArt", "#fouMigLabel", "#fouMig", ".q5Next");
	})

	$("#fouCanLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fouCanLabel", "#fouCan", "#fouMenLabel", "#fouMen", "#fouArtLabel", "#fouArt", "#fouMigLabel", "#fouMig", ".q5Next");
	})

	$("#fouArtLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fouArtLabel", "#fouArt", "#fouCanLabel", "#fouCan", "#fouMenLabel", "#fouMen", "#fouMigLabel", "#fouMig", ".q5Next");
	})

	$("#fouMigLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fouMigLabel", "#fouMig", "#fouCanLabel", "#fouCan", "#fouArtLabel", "#fouArt", "#fouMenLabel", "#fouMen", ".q5Next");
	})

	$(".q3Back").on("click", function(event){
		event.preventDefault();
		$("#q4").fadeOut(750, function(){
			$("#q3").fadeIn(750);
		})
	})

	$(".q5Next").on("click", function(event){
		event.preventDefault();
		$("#q4").fadeOut(750, function(){
			$("#q5").fadeIn(750);
		})
	})


	// QUESTION 5

	$("#fivBadLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fivBadLabel", "#fivBad", "#fivAvoLabel", "#fivAvo", "#fivCooLabel", "#fivCoo", "#fivUniLabel", "#fivUni", "#quizSubmitButton");
	})

	$("#fivAvoLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fivAvoLabel", "#fivAvo", "#fivBadLabel", "#fivBad", "#fivCooLabel", "#fivCoo", "#fivUniLabel", "#fivUni", "#quizSubmitButton");
	})

	$("#fivCooLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fivCooLabel", "#fivCoo", "#fivAvoLabel", "#fivAvo", "#fivBadLabel", "#fivBad", "#fivUniLabel", "#fivUni", "#quizSubmitButton");
	})

	$("#fivUniLabel").on("click", function(event){
		event.preventDefault();
		quizOptionSelect("#fivUniLabel", "#fivUni", "#fivAvoLabel", "#fivAvo", "#fivCooLabel", "#fivCoo", "#fivBadLabel", "#fivBad", "#quizSubmitButton");
	})

	$(".q4Back").on("click", function(event){
		event.preventDefault();
		$("#q5").fadeOut(750, function(){
			$("#q4").fadeIn(750);
		})
	})

	$("#myForm").on("submit", function(event){
		event.preventDefault();

		var q1Value = $("input[name=oneGroup]:checked").val();
		// console.log("q1Value: ", q1Value)
		var q2Value = $("input[name=twoGroup]:checked").val();
		// console.log("q2Value: ", q2Value)
		var q3Value = $("input[name=thrGroup]:checked").val();
		// console.log("q3Value: ", q3Value)
		var q4Value = $("input[name=fouGroup]:checked").val();
		// console.log("q4Value: ", q4Value)
		var q5Value = $("input[name=fivGroup]:checked").val();
		// console.log("q5Value: ", q5Value)
		var score = 0;
		// console.log("initial score: ", score)

		if (q1Value == "bre"){
			score++
		}
		if (q2Value == "UMPF"){
			score++
		}
		if (q3Value == "t50"){
			score++
		}
		if (q4Value == "can"){
			score++
		}
		if (q5Value == "coo"){
			score++
		}

		// console.log("final score: ", score)
		$(".scoreDest").text(score)
		if (score == 5){
			$(".scoreMsg").text("Great job!")
		} else if (score < 5 && score > 2){
			$(".scoreMsg").text("Not bad.")
		} else if (score <= 2){
			$(".scoreMsg").text("Not quite.")
		}
		$("#quizResult").fadeIn(500)
		$(".q2Next, .q3Next, .q4Next, .q5Next").css("display", "none")
	})

	$("#quizResult a").on("click", function(event){
		event.preventDefault();
		window.location = "index.html#quiz"
		$("#quizResult, #q5").fadeOut(500, function(){
			$("#q1").fadeIn(500)
		})
		$("#quiz label").css({"background": "#fffef5", "color": "#D62F04", "boxShadow": "none"})

		// console.log("initial q1Value: ", $("input[name=oneGroup]:checked").val())
		$("input[name=oneGroup]:checked").prop("checked", false)
		$("input[name=twoGroup]:checked").prop("checked", false)
		$("input[name=thrGroup]:checked").prop("checked", false)
		$("input[name=fouGroup]:checked").prop("checked", false)
		$("input[name=fivGroup]:checked").prop("checked", false)
		// console.log("new q1Value: ", $("input[name=oneGroup]:checked").val())
		
	})

	$("#tyScreen a").on("click", function(event){
		event.preventDefault();
		$("#tyScreen").fadeOut(250, function(){
			window.location = "index.html";
		})
	})

	
	// FUNCTIONS
	function init(){
		thisIsATouchDevice = isTouchDevice()
		console.log(thisIsATouchDevice)
		if (!thisIsATouchDevice){
			$(".h").addClass("underlineAni")
			$(".h2").addClass("underlineAni2")
		} else {
			$(".navLink").removeClass("bHover1")
		}

		var hash = window.location.hash;
		// console.log(hash);
		if (hash == "#ty"){
			$("#tyScreen").fadeIn(250)
		}
	}

	function isTouchDevice() {
	  return (('ontouchstart' in window) ||
	     (navigator.maxTouchPoints > 0) ||
	     (navigator.msMaxTouchPoints > 0));
	}

	function scrollFadeIn() {
		$(".scroll").delay(2000).animate({
			"opacity": "1"
		}, 500)
	}

	function acc1Toggle(aniHeight1, aniHeight2, aniPadding){
		if (isPanel1Open == false && !$(".p1").is(':animated') && !$(".p1 .accInfo").is(':animated')){
			$(".p1 .plus").animate({
				"rotate": "45deg"
			}, 500, "easeInOutCubic")

			$(".p1").animate({
				"height": aniHeight1,
				"paddingBottom": "0vw"
			}, 500, "easeInOutCubic", function(){
				$(".p1").css("height", "initial")
			})
			$(".p1 .accInfo").delay(200).fadeIn(300)
			isPanel1Open = true;

		} else if (isPanel1Open == true && !$(".p1").is(':animated') && !$(".p1 .accInfo").is(':animated')){
			$(".p1 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p1").css("height", aniHeight1)
			$(".p1").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p1").css("height", "auto")
			})
			$(".p1 .accInfo").fadeOut(400)
			isPanel1Open = false;
		}
	}

	function acc2Toggle(aniHeight1, aniHeight2, aniPadding){
		if (isPanel2Open == false && !$(".p2").is(':animated') && !$(".p2 .accInfo").is(':animated')){
			$(".p2 .plus").animate({
				"rotate": "45deg"
			}, 500, "easeInOutCubic")

			$(".p2").animate({
				"height": aniHeight1,
				"paddingBottom": "0vw"
			}, 500, "easeInOutCubic", function(){
				$(".p2").css("height", "initial")
			})
			$(".p2 .accInfo").delay(200).fadeIn(300)
			isPanel2Open = true;

		} else if (isPanel2Open == true && !$(".p2").is(':animated') && !$(".p2 .accInfo").is(':animated')){
			$(".p2 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p2").css("height", aniHeight1)
			$(".p2").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p2").css("height", "auto")
			})
			$(".p2 .accInfo").fadeOut(400)
			isPanel2Open = false;
		}
	}

	function acc3Toggle(aniHeight1, aniHeight2, aniPadding){
		if (isPanel3Open == false && !$(".p3").is(':animated') && !$(".p3 .accInfo").is(':animated')){
			$(".p3 .plus").animate({
				"rotate": "45deg"
			}, 500, "easeInOutCubic")

			$(".p3").animate({
				"height": aniHeight1,
				"paddingBottom": "0vw"
			}, 500, "easeInOutCubic", function(){
				$(".p3").css("height", "initial")
			})
			$(".p3 .accInfo").delay(200).fadeIn(300)
			isPanel3Open = true;

		} else if (isPanel3Open == true && !$(".p3").is(':animated') && !$(".p3 .accInfo").is(':animated')){
			$(".p3 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p3").css("height", aniHeight1)
			$(".p3").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p3").css("height", "auto")
			})
			$(".p3 .accInfo").fadeOut(400)
			isPanel3Open = false;
		}
	}

	function acc4Toggle(aniHeight1, aniHeight2, aniPadding){
		if (isPanel4Open == false && !$(".p4").is(':animated') && !$(".p4 .accInfo").is(':animated')){
			$(".p4 .plus").animate({
				"rotate": "45deg"
			}, 500, "easeInOutCubic")

			$(".p4").animate({
				"height": aniHeight1,
				"paddingBottom": "0vw"
			}, 500, "easeInOutCubic", function(){
				$(".p4").css("height", "initial")
			})
			$(".p4 .accInfo").delay(200).fadeIn(300)
			isPanel4Open = true;

		} else if (isPanel4Open == true && !$(".p4").is(':animated') && !$(".p4 .accInfo").is(':animated')){
			$(".p4 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p4").css("height", aniHeight1)
			$(".p4").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p4").css("height", "auto")
			})
			$(".p4 .accInfo").fadeOut(400)
			isPanel4Open = false;
		}
	}

	function acc1Close(aniHeight1, aniHeight2, aniPadding){
		if (isPanel1Open == true && !$(".p1").is(':animated') && !$(".p1 .accInfo").is(':animated')){
			$(".p1 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p1").css("height", aniHeight1)
			$(".p1").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p1").css("height", "auto")
			})
			$(".p1 .accInfo").fadeOut(400)
			isPanel1Open = false;
		}
	}

	function acc2Close(aniHeight1, aniHeight2, aniPadding){
		if (isPanel2Open == true && !$(".p2").is(':animated') && !$(".p2 .accInfo").is(':animated')){
			$(".p2 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p2").css("height", aniHeight1)
			$(".p2").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p2").css("height", "auto")
			})
			$(".p2 .accInfo").fadeOut(400)
			isPanel2Open = false;
		}
	}

	function acc3Close(aniHeight1, aniHeight2, aniPadding){
		if (isPanel3Open == true && !$(".p3").is(':animated') && !$(".p3 .accInfo").is(':animated')){
			$(".p3 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p3").css("height", aniHeight1)
			$(".p3").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p3").css("height", "auto")
			})
			$(".p3 .accInfo").fadeOut(400)
			isPanel3Open = false;
		}
	}

	function acc4Close(aniHeight1, aniHeight2, aniPadding){
		if (isPanel4Open == true && !$(".p4").is(':animated') && !$(".p4 .accInfo").is(':animated')){
			$(".p4 .plus").animate({
				"rotate": "0deg"
			}, 500, "easeInOutCubic")

			$(".p4").css("height", aniHeight1)
			$(".p4").animate({
				"height": aniHeight2,
				"paddingBottom": aniPadding
			}, 500, "easeInOutCubic", function(){
				$(".p4").css("height", "auto")
			})
			$(".p4 .accInfo").fadeOut(400)
			isPanel4Open = false;
		}
	}

	function quizOptionSelect(selectLab, selectRad, otherLab1, otherRad1, otherLab2, otherRad2, otherLab3, otherRad3, nextButton){
		if (!$(selectRad).prop("checked") && !$(otherRad1).prop("checked") && !$(otherRad2).prop("checked") && !$(otherRad3).prop("checked")){
			$(nextButton).fadeIn(500);
			$(nextButton).css("display", "block")
		}

		if ($(otherRad1).prop("checked")){
			$(otherLab1).css({"background": "#fffef5", "color": "#D62F04", "boxShadow": "none"})
		} else if ($(otherRad2).prop("checked")){
			$(otherLab2).css({"background": "#fffef5", "color": "#D62F04", "boxShadow": "none"})
		} else if ($(otherRad3).prop("checked")){
			$(otherLab3).css({"background": "#fffef5", "color": "#D62F04", "boxShadow": "none"})
		}

		$(selectRad).prop("checked","checked");
		$(selectLab).css({"background": "#D96B12", "color": "#fffef5", "boxShadow": "0px 5px 10px rgba(0, 0, 0, .5)"})

	}
	
	// INITIALIZATION
	init();
	scrollFadeIn();
	
});