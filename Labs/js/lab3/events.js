$(document).ready(function(){
	
	mouseEvents();
	fadeIn();
	animate();
	HideDiv();
	keyboardEvents();
	Slide();
	callback();
});


function mouseEvents(){
	$("#mouse1").on({
		mouseenter: function(){
			$(this).css("background-color","red");
			$(this).html("mouse enter");
		},
		mouseleave:function(){
			$(this).css("background-color","blue");
			$(this).html("mouse leave");
		},
		click:function(){
			$(this).css("background-color","green");
			$(this).html("mouse click");
		},
		dblclick:function(){
			$(this).css("background-color","orange");
			$(this).html("mouse dobleclick");
		}}
		
		)
		
}

function keyboardEvents(){
	$("#keypress").keypress(function () {
		$(this).css("background-color","red");
		$("#keyLabel").text("Keypress");
	});
	
	$("#keypress").keydown(function () {
		$(this).css("background-color","green");
		$("#keyLabel").text("Keydown");
	});
	
	$("#keypress").keyup(function () {
		$(this).css("background-color","yellow");
		$("#keyLabel").text("KeyUp");
	});
}


function fadeIn(){
	$("#btnFadeIn").click(function(){
		$("#div1").fadeIn();
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn(3000);					
	});
}


function animate(){
	
	$("#btnAnimate").click(function(){
        $("#animateDiv").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
			background:'blue'
		});});
		
		
		$("#btnInanimate").click(function(){			
			$("#animateDiv").animate({
				left: '200px',
				opacity: '1',
				height: '100px',
				width: '100px',
				background:'#98bf21'
			});
			
		});
}


function HideDiv(){
	$("#btnShow").click(function(){
		$("#hideDiv1").show();
		$("#btnShow").hide();
		$("#btnHide").show();
	});
	$("#btnHide").click(function(){
		$("#hideDiv1").hide();
		$("#btnHide").hide();
		$("#btnShow").show();
	});
}




function Slide(){
	  $("#flip").click(function(){
        $("#panel").slideDown("slow");
		 $("#flip").html('Haga Doble click para hacer SlideUp al panel');
    });
	  $("#flip").dblclick(function(){
        $("#panel").slideUp("slow");
		 $("#flip").html('Haga click para hacer SlideDown al panel');
    });
}


function callback(){
	
	$("#callbackHideBtn").click(function(){
        $("#ocultarP").hide("slow", function(){
            alert("Este parrafo ahora está oculto");
        });
    });
}

