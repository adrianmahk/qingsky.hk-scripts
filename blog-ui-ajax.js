
  var inited = 0;
  var loadMainAlready = 0;
  var post_body_content_bak = "";
  function init(){
    if (!inited){
      ori = getOrientation_cust();
      if (detectmob()){
        fixBgHeight();
		makeCmUnfocusable();
      }
      if (!loadMainAlready && !document.body.className.match("item-view")){
		var d1 = new Date(sessionStorage.getItem("last-update"));
		var d2 = new Date(document.lastModified);
		if (!checkNeedRefresh()){
	      	loadMain();
        }
        loadMainAlready = 1;
      }
	  window.addEventListener("pagehide", function (){
	  	if (!document.body.className.match("item-view")){
        	saveMain();
        	saveScrollPos();
      	}else {
        setFlag();
      	}
	  });
	  loadIndie();
	  getStars();
      inited = 1;
    }
  }
  function detectmob() {
   if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ){
      return true;
    }
   else {
      return false;
    }
  }
  var ori;
  function isOverflown(element) {
      return element.scrollWidth > element.clientWidth;
  }
  function blurLeft(element){
      element.setAttribute("style", "box-shadow: inset 10px 0px 5px -6px rgba(0,0,0,.5);");
  }
  function blurRight(element){
      element.setAttribute("style", "box-shadow: inset -10px 0px 5px -6px rgba(0,0,0,.5);");
  }
  function blurLeftRight(element){
      element.setAttribute("style", "box-shadow: inset 10px 0px 5px -6px rgba(0,0,0,.5), inset -10px 0px 5px -6px rgba(0,0,0,.5);");
  }
  function noBlur(element){
      element.setAttribute("style", "box-shadow: none;");
  }
  function drawButtonsShadow(){
    overflown_obj= document.getElementById('overflowable-container');
    blur_obj = document.getElementById('overflowable-container-shadow');
      if ( isOverflown(overflown_obj) ){
          var x = overflown_obj.scrollLeft;
          var ul = overflown_obj.scrollWidth - overflown_obj.clientWidth;
          if (x<10)
            blurRight(blur_obj);
          else if (x>= ul-10)
            blurLeft(blur_obj);
          else
            blurLeftRight(blur_obj);
      }
      else{
          noBlur(blur_obj);
      }
  }

  function backupPostBody(){
    var post_body =	document.querySelector('[id^="post-body-"]');
    if (post_body)
	    post_body_content_bak = post_body.innerHTML;
  }
  function onOrientationChange(){
    if (detectmob()){
      fixBgHeight();
    }
  }
  function setResizeListener(){
    window.addEventListener("resize", function (){
      var ori_old = ori;
      ori = getOrientation_cust();
      if (ori != ori_old)
          setTimeout(onOrientationChange, 20);
      drawButtonsShadow();
	  //fixBgHeight2();
    });
  }
  function getOrientation_cust(){
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var local_orientation = width > height ? "Landscape" : "Portrait";
    return local_orientation;
  }
  function fixBgHeight(){
	var height =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (height > 500){
	  var bg_div = document.getElementById("bg-div");
      if (window.matchMedia('(max-aspect-ratio: 1920/1200) and (min-height: 501px)').matches){
          var bg_fixed_h = document.documentElement.clientHeight + 100;
          bg_div.style.backgroundSize = "auto "+bg_fixed_h+"px";
      }
      else{
          bg_div.style.backgroundSize = "cover";
      }
	}
  }
  function makeCmUnfocusable(){
    setTimeout(function (){
        var comment = document.getElementById("comment-editor");
        if (comment != null) comment.setAttribute("tabindex","-1");
      }, 5000);
  }
  function detectHeader(){
    var main_height = document.getElementById("main").scrollTop;
    var current = document.body.scrollTop || document.scrollingElement.scrollTop;

    if (current > main_height){
      if (!document.body.className.match("collapsed-header")){
        document.body.classList.add("collapsed-header");
      }
    }else{
      if (document.body.className.match("collapsed-header")){
        document.body.classList.remove("collapsed-header");
      }
    }
  }
  
  var ajax_times = 0;
  var timer;
  function detectAjaxLoad(){
	if (!document.body.className.match("item-view")){
      if (!document.body.className.match("archive-view")){
        var height =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var current = document.body.scrollTop || document.scrollingElement.scrollTop;
        var next_page_link = document.querySelector('[id*="blog-pager-older-link"]');
        if (document.body.classList.contains("home-view"))
          current = current- height*.5;
        if ((next_page_link) && (current + height - 150 > next_page_link.offsetTop) ){//&& (0)){
            var ajax_msg = document.getElementById("ajax-msg");
            next_page_link.parentNode.removeChild(next_page_link);
            ajax_msg.style.display = "table";
            setTimeout(function(){
			  ajaxLoad(next_page_link.getAttribute("href"));
              timer = setTimeout(function(){
                  document.getElementById("ajax-retry-msg").style.display="table-cell";
              }, 5000);
            }, 1000);
         }
      }
    }
  }
  function removeAllButLast(query){
	var ele_array = document.querySelectorAll(query);
    for (i=0; i<ele_array.length - 1; i++){
	  ele_array[i].parentNode.removeChild(ele_array[i]);
    }
  }

  function ajaxLoad(link, time) {
    //saveMain();
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var ajax_html = this.responseText;
        var main_start_pos = ajax_html.indexOf("<ma"+"in")+ 66;
        var main_end_pos = ajax_html.indexOf("</ma"+"in>") -1 ;
        if ((main_start_pos > 22) && (main_end_pos > 50)){
			ajax_times++;
			if (time)
				ajax_times = time;
            var ajax_main = ajax_html.substring(main_start_pos, main_end_pos);
			ajax_main = "<a name='ajax"+ajax_times+"'/><ajax id='ajax"+ajax_times+"'>"+ajax_main+"</ajax>";
            var main = document.getElementById("main");
			main.insertAdjacentHTML('beforeend',ajax_main);
			//post_body_content_bak += ajax_main;
			removeAllButLast('[id*=blog-pager-older-link]');
			removeAllButLast('[id=blog-pager]');
			clearTimeout(timer);
        }
      }
	};
	if (link){
	  var real_link = link.substring( link.indexOf("search"));
	  xhttp.open("GET", real_link, true);
      xhttp.send();
	}
  }
  
  function checkNeedRefresh() {
	var last_update = sessionStorage.getItem("last-update");
	if (last_update!= null){
		var d1 = new Date(document.lastModified);
		var d2 = new Date(last_update);
		
		if (d1.getTime() == d2.getTime())
			return false;
	}
	return true;
  }
  function saveMain(str){
  	if (typeof(Storage)!=="undefined"){
  		if (!str){
			var main = document.getElementById("main");
			str = main.innerHTML;
		}
  		sessionStorage.clear();
  		sessionStorage.setItem("main", str);
  		sessionStorage.setItem("last-update", document.lastModified);
	
  	}
  	return "unload!";
  }
  function saveScrollPos(){
  	if (typeof(Storage)!=="undefined"){
  		if (!document.body.className.match("item-view"))
  		sessionStorage.setItem("scrollPos", document.body.scrollTop || document.scrollingElement.scrollTop);
  	}
  }
  function loadMain(){
  	if (typeof(Storage)!=="undefined"){
  		if (sessionStorage.getItem("inPost")!=null){
  			if (sessionStorage.getItem("scrollPos")!=null){
  			  		var scrollPos = sessionStorage.getItem("scrollPos") ? sessionStorage.getItem("scrollPos") : 0;
    	  	setTimeout(function (){
    			window.scrollTo(0,scrollPos);
    		}, 1000);
  		}
  		if (sessionStorage.getItem("main")!=null && sessionStorage.getItem("inPost")!=null){
  		  var main = document.getElementById("main");
  		  main.innerHTML = sessionStorage.getItem("main");
  	  }
  	  sessionStorage.clear();
    	}
    }
  }
  function setFlag(){
    if (typeof(Storage)!=="undefined"){
    //alert("setFlag");
    	sessionStorage.setItem("inPost", "true");
    }
  }
 
  function clearSearchInput(){    
    var search_input = document.querySelectorAll('[id^="search-input"]');
    for (i=0; i< search_input.length; i++){
    	search_input[i].value = "";
    }
    if (document.body.className.match("item-view")){
    	var post_body =	document.querySelector('[id^="post-body-"]');
    	post_body.innerHTML = post_body_content_bak;
    }
    if (document.body.className.match("home-view")){
    	//ajaxSearch(null);
    }
  }

      function getCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
                                     for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
                 c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
      }
      function changeFontSizeInit(){
        setTimeout(function(){
          var font_size_cookie = getCookie("font_size");
          if (font_size_cookie != ""){
            var post_body =	document.querySelector('[id^="post-body-"]');
		  if (post_body!=null)
            post_body.style.fontSize =	font_size_cookie;
          }
        }, 1000);
      }
      function changeFontSize(){
        var post_body =	document.querySelector('[id^="post-body-"]');
        var font_size = window.getComputedStyle(post_body, null).getPropertyValue('font-size');
        if (font_size=="12px"){
          post_body.style.fontSize =	"14px";
          setCookie("14px");
        }
        if (font_size=="14px"){
          post_body.style.fontSize =	"16px";
          setCookie("16px");
        }
        if (font_size=="16px"){
          post_body.style.fontSize =	"18px";
          setCookie("18px");
        }
        if (font_size=="18px"){
          post_body.style.fontSize =	"12px";
          setCookie("12px");
        }
      }
      function setCookie(px){
        var someDate = new Date();
        var numberOfDaysToAdd = 30;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        var str = "font_size=" + px +"; expires=" +someDate.toUTCString()+ "; path=/";
        document.cookie = str;
      }
      
      
function getStars() {      
 var star = getCookie("star_today");
 if (star == ""){
  star = Math.floor(Math.random() * 10) + 1;
   var someDate = new Date();
   var timeZone = -(someDate.getTimezoneOffset() / 60);
   someDate.setHours(timeZone, 0, 0);
   someDate.setDate(someDate.getDate() + 1);
     var cookie = "star_today=" + star +"; expires=" +someDate.toUTCString()+ "; path=/";
     document.cookie = (cookie);
     alert(cookie);
 }
 var str = '';
 var starCount = star;
 for (i = 0; i < 10 ; i ++){
    if (starCount > 0){
         str += '★　';
         starCount--;
    }
    else {
         str += '☆　';
    }
 }
 
 var starDiv = document.getElementById('stars');
 if (starDiv){
 	starDiv.innerHTML = str;
 }
}

 function darkMode(){
 	var darkOverlay = document.getElementById("dark-mode-overlay");
 	if (darkOverlay.style.visibility == "hidden"){
	 	darkOverlay.style.visibility = "visible";
	 	darkOverlay.style.opacity = 1;
 	}
 	else {
 		darkOverlay.style.visibility = "hidden";
	 	darkOverlay.style.opacity = 0;
 	}
 }
