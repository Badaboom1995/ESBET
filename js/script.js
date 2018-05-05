
	var modalBG = document.querySelector(".modal");
	var modal = document.querySelector(".modal__inner");
	var calendar = document.querySelector(".calendar");
	var addStickerBtn = document.querySelector(".add-sticker__plus");
	var burger = document.querySelector(".menu-main__burger");
	var menu = document.querySelector(".menu-main");

	if(modal){
		modalBG.addEventListener("click", function(e){
			if(e.target!=modalBG) return;
			modalBG.classList.toggle("modal__active-bg");
			modal.classList.toggle("modal__active");
		});
	}
	
	if(calendar){
		calendar.addEventListener("click", function(){
			modal.classList.toggle("modal__active");
			modalBG.classList.toggle("modal__active-bg");
		})
	}
	
	if (addStickerBtn){
		addStickerBtn.addEventListener("click", function(e){
			e.preventDefault();
			modal.classList.toggle("modal__active");
			modalBG.classList.toggle("modal__active-bg");
		})
	}
	burger.addEventListener("click", function(e){
			e.preventDefault();
			menu.classList.toggle("menu-main--active");
		});

	function degToRad(degree){
		var factor = Math.PI/180;
		return degree*factor;
	}

	function paintCircle(){
		var percents = "100%";
		var canvasTotalCircle = document.querySelector("#total-circle");
		if(canvasTotalCircle){
			var ctx = canvasTotalCircle.getContext("2d");
			ctx.lineWidth = 6;

		 	ctx.strokeStyle = '#3c3c3c';
		 	ctx.beginPath();
		 	ctx.arc(250,250,200,degToRad(0),degToRad(360));
		 	ctx.stroke();

		 	ctx.strokeStyle = '#2ecc71';
		 	ctx.beginPath();
		 	ctx.arc(250,250,200,degToRad(270),0);
		 	ctx.stroke();

		 	ctx.font = "60px Arial";
		 	ctx.fillStyle = "#ffffff";
		 	ctx.fillText(percents,175,265);
		}
		
	}
	paintCircle();
