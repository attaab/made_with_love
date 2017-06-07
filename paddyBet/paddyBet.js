function column1(){
	document.getElementById('belowfirst').style.display = "block";
	document.getElementById('arrw1a').style.transform = "rotate(-180deg)";
}
function column1a(){
	document.getElementById('belowfirst').style.display = "none";
	
}
function column2(){
	document.getElementById('belowsecond').style.display = "block";
	document.getElementById('arrw2a').style.transform = "rotate(-180deg)";
}
function column2a(){
	document.getElementById('belowsecond').style.display = "none";
	
}
function column3(){
	document.getElementById('belowthird').style.display = "block";
	document.getElementById('arrw3a').style.transform = "rotate(-180deg)";
}
function column3a(){
	document.getElementById('belowthird').style.display = "none";
	
}
function column4(){
	document.getElementById('belowfourth').style.display = "block";
	document.getElementById('arrw4a').style.transform = "rotate(-180deg)";
}
function column4a(){
	document.getElementById('belowfourth').style.display = "none";
	
}
function column5(){
	document.getElementById('belowfifth').style.display = "block";
	document.getElementById('arrw5a').style.transform = "rotate(-180deg)";
}
function column5a(){
	document.getElementById('belowfifth').style.display = "none";
	
}
function column6(){
	document.getElementById('belowsixth').style.display = "block";
	document.getElementById('arrw6a').style.transform = "rotate(-180deg)";
}
function column6a(){
	document.getElementById('belowsixth').style.display = "none";
	
}
function column7(){
	document.getElementById('belowseventh').style.display = "block";
	document.getElementById('arrw7a').style.transform = "rotate(-180deg)";
}
function column7a(){
	document.getElementById('belowseventh').style.display = "none";
	
}
function column8(){
	document.getElementById('beloweighth').style.display = "block";
	document.getElementById('arrw8a').style.transform = "rotate(-180deg)";
}
function column8a(){
	document.getElementById('beloweighth').style.display = "none";
	
}
function ajaxLoader(){
	document.getElementById('ajx').style.display = "block";
};
 
function ajaxLoad(){
	document.getElementById('ajx').style.display = 'none';
};
function getstat(){
  setTimeout(stat, 7000);
};
function stat(){
    document.getElementsByClassName('getstatbtn')[0].style.display = "block";
};

		// ADVERT SECTION
    var prompt = document.getElementById('prompt');
    prompt.addEventListener("mouseover", advert);

	function advert(){
		setTimeout(join, 1000);
		setTimeout(endbtn, 2000);
	}
	function join(){
	    document.getElementById('join').style.display = "block";
	};
	function endbtn(){
		document.getElementsByClassName('getstatbtns')[0].style.display = "block";
	}
	function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
};





var ajax = document.getElementById('ajxopen');

ajax.addEventListener("mouseover", ajaxLoader);
ajax.addEventListener("mouseout", ajaxLoad);

