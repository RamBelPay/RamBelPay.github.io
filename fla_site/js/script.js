$("#imh4").click(function(){
	$("#menu").toggleClass("active");
	if ($(this).hasClass("rotate1")){
		$(this).removeClass("rotate1")
	} else {
		$(this).addClass("rotate1")
	}
	return false;
});

$(".menu_b").click(function(){
	$(this).next(".podmenu").slideToggle(100);
	$(this).next(".podmenu").toggleClass("active");
	$(this).children(".arrow_menu").toggleClass("rotate");
	return false;
});

// $(".menu_b").children(".menu_mtext").css("color", "#A0A0A0")

// $(".menu_b").mouseenter(function(){
// 	if ($(this).children(".menu_mtext").hasClass("red")){
// 		$(this).children(".menu_mtext").css("color", "red");
// 		$(this).mouseleave(function(){
// 			$(this).children(".menu_mtext").css("color", "red");
// 		});
// 	}
// 	else {
// 		$(this).children(".menu_mtext").css("color", "green");
// 		$(this).mouseleave(function(){
// 			$(this).children(".menu_mtext").css("color", "#A0A0A0");
// 		});
// 	}
// });

// $(".menu_b").mouseleave(function(){
// 	if ($(this).children(".menu_mtext").hasClass("red")) {
// 		$(this).children(".menu_mtext").css("color", "red");
// 	}
// 	else {
// 		$(this).children(".menu_mtext").css("color", "#A0A0A0");
// 	}
// });

// $(".menu_b").mousedown(function(){
// 	$(this).children(".menu_mtext").toggleClass("red");
// });

// $("#sub_2").find("input").attr("placeholder").css({paddingLeft:"20px"},{color: "red"});
