if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
}

localStorage.setItem("experiment", "no");
var experiment = localStorage.getItem("experiment"); 

/* if (confirm("Press OK to enable experimental mode. Press Cancel to turn off experimental mode")) {
     localStorage.setItem("experiment","yes");
if(experiment == "yes"){     
document.getElementById("TNV").style.display = "none";
document.getElementById("experiment").style.display = "block";
}
 }
else{
    localStorage.getItem("experiment", "no");
if (experiment == "no")
{
document.getElementById("experiment").style.display = "none";
document.getElementById("TNV").style.display = "block";

}
}*/

var topnav = document.getElementById('topnav');
var topnav1 = document.getElementById('topnav1');
var bottomnav = document.getElementById('bottomnav');
var bottomnav1 = document.getElementById('bottomnav1');
var dropdown = document.getElementById('dropdown');
var dropbtn = document.getElementById('dropbtn');

if (/Xbox/i.test(navigator.userAgent)){
    location.href = "https://www.terminatevader.com/unavailable.txt"

}

else if (/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|Windows Phone|Mobile Safari|Nokia/i.test(navigator.userAgent)){
    topnav.style.display = "none";
    topnav1.style.display = "none";
    bottomnav.style.display = "none";
	
    
    
    
}


else if (/Windows|Mac|Thunderstorm|i686|Ubuntu|CrOS/i.test(navigator.userAgent)){
    dropdown.style.display = "none";
    bottomnav1.style.display = "none";
    dropbtn.style.display = "none";
    
    document.onkeydown = function(evt) {
    evt = evt || window.event;
	
   if ( window.location.href == "https://www.terminatevader.com/blogs/myplanforaftercollege" ) {
    if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/blogs/myfirstimeingatlinburgandpigeonforge"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/blogs/cooldogs"
    }
}
	       if ( window.location.href == "https://www.terminatevader.com/blogs/cooldogs" ) {
    if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/blogs/myplanforaftercollege"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/blogs/myexperienceatlegolandflorida"
    }
}
	       if ( window.location.href == "https://www.terminatevader.com/blogs/myexperienceatlegolandflorida" ) {
    if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/blogs/cooldogs"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/blogs/myfirsttimeingatlinburgandpigeonforge"
    }
}
	         if ( window.location.href == "https://www.terminatevader.com/blogs/myfirsttimeingatlinburgandpigeonforge" ) {
    if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/blogs/myexperienceatlegolandflorida"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/blogs/myplanforaftercollege"
    }
}
	    
	    if ( window.location.href == "https://www.terminatevader.com/projects" ) {
    if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/blogs"
    }
}
	    if ( window.location.href == "https://www.terminatevader.com/blogs" ) {
    if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/projects"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/"
    }
		}
	   else{
		     if ( evt.keyCode == 37) {
        location.href = "https://www.terminatevader.com/blogs"
    }
		 if ( evt.keyCode == 39) {
        location.href = "https://www.terminatevader.com/projects"
    }
}
	   }
   if ( evt.keyCode == 36) {
        location.href = "https://www.terminatevader.com/"
    }

    }
    document.onclick = hideMenu;
		document.oncontextmenu = rightClick;

		function hideMenu() {
			document.getElementById("contextMenu").style.display = "none"
		}

		function rightClick(e) {
			e.preventDefault();

			if (document.getElementById("contextMenu").style.display == "block")
				hideMenu();
			else {
				var menu = document.getElementById("contextMenu")
					
				menu.style.display = 'block';
				menu.style.left = e.pageX + "px";
				menu.style.top = e.pageY + "px";
			}
		}

	r = Math.floor(Math.random() * 10001); 

if (r==1)
{
	location.href = "https://www.ravbug.com/bsod/bsod7/";
}

if (r==2)
{
	location.href = "https://www.ravbug.com/bsod/booterror7/";
}

if (r==3)
{
	location.href = "https://www.ravbug.com/bsod/bsod8/";
}

if (r==4)
{
	location.href = "https://www.ravbug.com/bsod/bsod10/";
}

if (r==5)
{
	location.href = "https://www.ravbug.com/bsod/bsod10/?g";
}


	

}



    else {
location.href = "https://www.terminatevader.com/unavailable.txt"

}
