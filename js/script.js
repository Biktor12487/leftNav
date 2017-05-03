var showNav = function(){
	var nav = document.querySelector(".navigation");
	nav.onclick = function(event){
			if (event.target.className === 'close') {
				this.setAttribute("data-status","hidden");
			}
			else if (event.target.className === 'buregerButton') {
				this.setAttribute("data-status","visab");
			}
	}
}();