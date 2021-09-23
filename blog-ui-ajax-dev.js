// blog-ui-ajax-dev.js
var timer = 0;
// var ori;
function showPageLoading() {
  document.body.classList.add("page-loading");
}

function hidePageLoading(delay = 100) {
  if (delay > 0) {
    setTimeout(function () {document.body.classList.remove('page-loading');}, 100);
  }
  else {
    document.body.classList.remove('page-loading');
  }
}

function gotoUrlWithDelay(url, delay = 100, animated = true) {
  if (animated) {
    showPageLoading();
  }
  setTimeout(function () {
    window.location.href = url;
  }, delay);
  return false;
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(function () {
  //makeExternalLinkOpenInBlank();
  init();
  fixDropboxImgSrc();
});

function fixDropboxImgSrc() {
  var imgEls = document.querySelectorAll('img');
  for (var i = 0; i < imgEls.length; i++) {
      var src = imgEls[i].getAttribute("src");
      if (src && src.includes("www.dropbox.com")) {
          var newSrc = src.replace("www.dropbox.com", "dl.dropboxusercontent.com");
          imgEls[i].setAttribute("src", newSrc);
          // console.log(imgEls[i]);
      }
  }
}

function makeExternalLinkOpenInBlank() {
  setupLinks();
}
function setupLinks() {
  console.log("now uses bubble callback / handleLink");
}

function findLink(el) {
  if (el.tagName == 'A' && el.href) {
      return el;
  } else if (el.parentElement) {
      return findLink(el.parentElement);
  } else {
      return null;
  }
};

function handleLink(anchorEl) {
  var website = window.location.hostname;
  website = website.replace("www.", "");
  
  var internalLinkRegex = new RegExp(
  '^('
    +'(((http:\\/\\/|https:\\/\\/)(www\\.)?)?' + website + ')' //starts with host
    +'|'  // or
    +'(localhost:\\d{4})' //starts with localhost
    +'|' // or
    +'(\\/.*))'  //starts with /
    +'((\\/|\\?|\#).*'  //ends with / # $
  +')?$'
  // +'|' // or 
  // +'^(javascript:|\#|\\?).*?$'//starts with javascript: / # / ?
  , '');
  var jsCheck = new RegExp('^(javascript:|\#|\\?).*?$');
  var href = anchorEl.getAttribute('href');
  if (href) {
    if (!jsCheck.test(href)) {
      if (!internalLinkRegex.test(href)) {
        anchorEl.setAttribute('target', '_blank');
      }
      else if (new URL(window.location.href, "http://example.com").pathname === new URL(href, "http://example.com").pathname) {
        return true; // same url, just a #
      }
      else if (!anchorEl.getAttribute('onclick') && !anchorEl.getAttribute('target') && !jsCheck.test(href)) {
        return gotoUrlWithDelay(href); // which is always false
      }
    }
  }
  return true;
}

function init() {
  if (!document.body.getAttribute("inited")) {
    document.body.setAttribute("orientation", getOrientation());
    if (detectmob()) {
      fixBgHeight();
      makeCmUnfocusable();
    }
    if (!document.body.getAttribute("loaded-main") && !document.body.className.match("item-view")) {
      if (!checkNeedRefresh()) {
        loadMain();
      }
      //loadMainAlready = 1;
      document.body.setAttribute("loaded-main", true);
    }

    
    window.addEventListener('load', function (e) {
      hidePageLoading();
    });
    window.addEventListener('click', function(e) {
      const link = findLink(e.target);
      console.log(link);
      if (link == null) {
        return;
      }
      else if (!handleLink(link)) {
        e.preventDefault();
      }
    }, false);

    // if (document.addEventListener) {
    //   document.addEventListener('click', linkCallback, false);
    // }
    // else {
    //   document.attachEvent('onclick', linkCallback);
    // }

    window.addEventListener("pagehide", function () {
      if (!document.body.className.match("item-view")) {
        saveMain();
        saveScrollPos();
      } else {
        setFlag();
      }  
      hidePageLoading(0);
    });
    
    window.addEventListener("pageshow", function (event) {
      if (event.persisted) {
        darkModeInit();
        changeFontSizeInit();
        hidePageLoading(0);
      }
    });
    // window.addEventListener("orientationchange", function(event) {
    //   if (detectmob()) {
    //     fixBgHeight();
    //   }
    // });
    loadIndie();
    getStars();
    getStarsYear();
    //inited = 1;
    document.body.setAttribute("inited", true);
    //darkModeInit();
    //changeFontSizeInit();
  }
  console.log("init");
}

function detectmob() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }
  else {
    return false;
  }
}

function isOverflown(element) {
  return element.scrollWidth > element.clientWidth;
}
function blurLeft(element) {
  element.setAttribute("style", "box-shadow: inset 10px 0px 5px -6px rgba(0,0,0,.5);");
}
function blurRight(element) {
  element.setAttribute("style", "box-shadow: inset -10px 0px 5px -6px rgba(0,0,0,.5);");
}
function blurLeftRight(element) {
  element.setAttribute("style", "box-shadow: inset 10px 0px 5px -6px rgba(0,0,0,.5), inset -10px 0px 5px -6px rgba(0,0,0,.5);");
}
function noBlur(element) {
  element.setAttribute("style", "box-shadow: none;");
}
function drawButtonsShadow() {
  overflown_obj = document.getElementById('label-container');
  blur_obj = document.getElementById('label-container-shadow');
  if (overflown_obj && blur_obj) {
    if (isOverflown(overflown_obj)) {
      var x = overflown_obj.scrollLeft;
      var ul = overflown_obj.scrollWidth - overflown_obj.clientWidth;
      if (x < 10)
        blurRight(blur_obj);
      else if (x >= ul - 10)
        blurLeft(blur_obj);
      else
        blurLeftRight(blur_obj);
    }
    else {
      noBlur(blur_obj);
    }
  }
}

function setResizeListener() {
  window.addEventListener("resize", function () {
    var ori_old = document.body.getAttribute("orientation");
    var ori = getOrientation();
    if (ori != ori_old) {
      document.body.setAttribute("orientation", ori);
      //setTimeout(onOrientationChange, 20);
    }
    drawButtonsShadow();
  });
}
function getOrientation() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var local_orientation = width > height ? "landscape" : "portrait";
  
  return local_orientation;
}
function fixBgHeight() {
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if (height > 500) {
    var bg_div = document.getElementById("bg-div");
    if (window.matchMedia('(max-aspect-ratio: 1920/1200) and (min-height: 501px)').matches) {
      var bg_fixed_h = document.documentElement.clientHeight + 100;
      bg_div.style.backgroundSize = "auto " + bg_fixed_h + "px";
    }
    else {
      bg_div.style.backgroundSize = "cover";
    }
  }
}
function makeCmUnfocusable() {
  setTimeout(function () {
    var comment = document.getElementById("comment-editor");
    if (comment != null) comment.setAttribute("tabindex", "-1");
  }, 5000);
}
function detectHeader() {
  var main_height = document.getElementById("main").scrollTop;
  var current = document.body.scrollTop || document.scrollingElement.scrollTop;

  if (current > main_height) {
    if (!document.body.className.match("collapsed-header")) {
      document.body.classList.add("collapsed-header");
    }
  } else {
    if (document.body.className.match("collapsed-header")) {
      document.body.classList.remove("collapsed-header");
    }
  }
}

// var ajax_times = 0;


function removeAllButLast(query) {
  var ele_array = document.querySelectorAll(query);
  for (i = 0; i < ele_array.length - 1; i++) {
    ele_array[i].parentNode.removeChild(ele_array[i]);
  }
}

function ajaxLoad(link, removeFirst = false, button = null) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ajax_html = this.responseText;
      if (ajax_html.indexOf("</html>") == -1) {
        return;
      }
      //console.log(ajax_html);
      var ajax_doc = new DOMParser().parseFromString(ajax_html, "text/html");
      var ajax_main = ajax_doc.getElementById("main");
      if (ajax_main) {
        // var ajax_blog = ajax_doc.getElementById("main");
          var ajax_articles = ajax_main.getElementsByTagName("article");
          if (removeFirst) {
            if (ajax_articles.length > 1) {
              ajax_articles[0].parentNode.removeChild(ajax_articles[0]);
            }
            else if (ajax_articles.length == 1) {
                var next_link = ajax_doc.getElementById('blog-pager-older-link');
                ajaxLoad(next_link.href);
                return;
            }
          }
          // ajax_times++;
          var main = document.getElementById("main");
          //main.appendChild(ajax_main);
          main.insertAdjacentHTML('beforeend', ajax_main.innerHTML);

          removeAllButLast('[id*=blog-pager-older-link]');
          removeAllButLast('[id=blog-pager]');
          clearTimeout(timer);    
      }

      //makeExternalLinkOpenInBlank();
      hidePageLoading();
    }
  };
  if (link) {
    var tempMoreMsg = "更多文章";

    showPageLoading();
    if (button) {
      tempMoreMsg = button.innerHTML;
      button.innerHTML = "載入中…";
      button.style["pointer-events"] = "none";
    }
    // var url = new URL(link);
    // console.log(url.protocol + "//" + url.hostname);
    // console.log(link.replace(url.protocol + "//" + url.hostname, ""));
    // var real_link = link.replace(url.protocol + "//" + url.hostname, "");
    // console.log(real_link);
    var real_link = link;
    xhttp.open("GET", real_link, true);
    xhttp.send();

    setTimeout(function () {
      timer = setTimeout(function () {
        if (button) {
          button.innerHTML = tempMoreMsg;
          button.style["pointer-events"] = "all";
        }
        hidePageLoading();
        xhttp.abort();
      }, 5000);
    }, 1000);
  }
}

function getLatestArchiveMonthLink(nextPageLink) {
  var searchParams = nextPageLink.substr(nextPageLink.indexOf('?'));
  var urlParams = new URLSearchParams(searchParams);

  var updatedMax = new Date(urlParams.get("updated-max"));
  if (updatedMax) {
    var year = updatedMax.getFullYear();
    var month = updatedMax.getMonth();
    month++; //to compromise the getMonth return 0 - 11
    // if (month == 0) {
    // 	year--;
    //     month = 12;
    // }
    var archiveUrl = window.location.origin + '/' + year + ((month < 10) ? '/0' : '/') + month + '/';
    console.log(archiveUrl);

    return archiveUrl;
  }

  return nextPageLink;
}
function loadLinkPreventDefault(event, href, removeFirst = false, button = null) {
  event.preventDefault();
  event.stopPropagation();
  ajaxLoad(href, removeFirst, button);
}

function checkNeedRefresh() {
  var last_update = sessionStorage.getItem("last-update");
  if (last_update != null) {
    var d1 = new Date(document.lastModified);
    var d2 = new Date(last_update);
    var url1 = sessionStorage.getItem("last-url");
    var url2 = window.location.href;

    if ((d1.getTime() == d2.getTime()) && (url1 == url2)) {
      return false;
    }
  }
  return true;
}
function saveMain(str) {
  if (typeof (Storage) !== "undefined") {
    if (!str) {
      var main = document.getElementById("main");
      str = main.innerHTML;
    }
    sessionStorage.clear();
    sessionStorage.setItem("main", str);
    sessionStorage.setItem("last-update", document.lastModified);
    sessionStorage.setItem("last-url", window.location);
  }
  return "unload!";
}
function saveScrollPos() {
  if (typeof (Storage) !== "undefined") {
    if (!document.body.className.match("item-view"))
      sessionStorage.setItem("scrollPos", document.body.scrollTop || document.scrollingElement.scrollTop);
  }
}
function loadMain() {
  if (typeof (Storage) !== "undefined") {
    // if (sessionStorage.getItem("inPost") != null) {
      
      if (sessionStorage.getItem("main") != null){// && sessionStorage.getItem("inPost") != null) {
        var main = document.getElementById("main");
        main.innerHTML = sessionStorage.getItem("main");
        
        // set scrollPos
        if (sessionStorage.getItem("scrollPos") != null) {
          var scrollPos = sessionStorage.getItem("scrollPos") ? sessionStorage.getItem("scrollPos") : 0;
          setTimeout(function () {
            window.scrollTo(0, scrollPos);
          }, 1000);
        }
      }
      sessionStorage.clear();
    // }
  }
}
function setFlag() {
  if (typeof (Storage) !== "undefined") {
    sessionStorage.setItem("inPost", "true");
  }
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
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
function changeFontSizeInit() {
  if (document.body.className.match("item-view")) {
    var font_size_cookie = getCookie("font-size");
    if (font_size_cookie == "") {
      font_size_cookie = getCookie("font_size");
    }
    if (font_size_cookie != "") {
      var body = document.body;
      body.classList.remove("f12px");
      body.classList.remove("f14px");
      body.classList.remove("f16px");
      body.classList.remove("f18px");
      body.classList.add(font_size_cookie);
      writeCookie("font-size", font_size_cookie);
    }
  }
}
function changeFontSize() {
  var body = document.body;
  var next_font_size = "f16px";
  
  if (body.classList.contains("f12px")) {
    next_font_size = "f14px";
  }
  else if (body.classList.contains("f14px")) {
    next_font_size = "f16px";
  }
  else if (body.classList.contains("f16px")) {
    next_font_size = "f18px";
  }
  else if (body.classList.contains("f18px")) {
    next_font_size = "f12px";
  }

  body.classList.remove("f12px");
  body.classList.remove("f14px");
  body.classList.remove("f16px");
  body.classList.remove("f18px");
  body.classList.add(next_font_size);
  setCookieFontSize(next_font_size);
}
function setCookieFontSize(px) {
  writeCookie("font-size", px);
}


function getStars() {
  var star = getCookie("star_today");
  if (star == "") {
    star = Math.floor(Math.random() * 10) + 1;
    var someDate = new Date();
    //var timeZone = -(someDate.getTimezoneOffset() / 60);
    someDate.setHours(0, 0, 0);
    someDate.setDate(someDate.getDate() + 1);
    var cookie = "star_today=" + star + "; expires=" + someDate.toUTCString() + "; path=/; samesite=lax";
    document.cookie = (cookie);
  }
  var str = '';
  var starCount = star;
  for (i = 0; i < 10; i++) {
    if (starCount > 0) {
      str += '★　';
      starCount--;
    }
    else {
      str += '☆　';
    }
  }

  var starDiv = document.getElementById('stars');
  if (starDiv) {
    starDiv.innerHTML = str;
  }
}

function setStarsYear(star) {
  var d = new Date();
  var year = d.getFullYear();
  var someDate = new Date(year + 1, 0, 1, 0, 0, 0, 0);
  var cookie = "star-year=" + star + "; expires=" + someDate.toUTCString() + "; path=/; samesite=lax";
  document.cookie = (cookie);
}

function getStarsYear() {
  var star2020 = getCookie("star-2020");
  if (star2020 != "") {
    setStarsYear(star2020);
  }



  var star = getCookie("star-year");
  if (star == "") {
    star = Math.floor(Math.random() * 10) + 1;
    setStarsYear(star);
  }
  var str = '';
  var starCount = star;
  for (i = 0; i < 10; i++) {
    if (starCount > 0) {
      str += '★　';
      starCount--;
    }
    else {
      str += '☆　';
    }
  }

  var starDiv = document.getElementById('star-year');
  if (!starDiv) {
    starDiv = document.getElementById('star-2020');
  }
  if (starDiv) {
    starDiv.innerHTML = str;
  }

  var retryTimes = getCookie('star-year-retry');
  if (retryTimes > 0) {
    var str = '平行時空：' + retryTimes;
    var starRetryDiv = document.getElementById('star-year-retry');
    if (starRetryDiv) {
      starRetryDiv.innerHTML = str;
    }
  }
}

function retryStarsYear() {
  clearCookie('star-2020');
  clearCookie('star-year');
  var retryTimes = getCookie('star-year-retry');
  if (retryTimes == '') {
    retryTimes = 0;
  }
  retryTimes++;
  var d = new Date();
  var year = d.getFullYear();
  var someDate = new Date(year + 1, 0, 1, 0, 0, 0, 0);
  var cookie = "star-year-retry=" + retryTimes + "; expires=" + someDate.toUTCString() + "; path=/; samesite=lax";
  document.cookie = (cookie);

  getStarsYear();
}

function clearCookie(cookie_key) {
  var someDate = new Date(0);
  var cookie = cookie_key + "=" + 0 + "; expires=" + someDate.toUTCString() + "; path=/; samesite=lax";
  document.cookie = (cookie);
}

function writeCookie(key, value, days=30) {
  var someDate = new Date();
  someDate.setDate(someDate.getDate() + days);
  someDate.setHours(0,0,0,0);

  var cookie = key + "=" + value + "; expires=" + someDate.toUTCString() + "; path=/; samesite=lax";  
  document.cookie = (cookie);
}

function darkMode() {
  var body = document.body;
  var darkOverlay = document.getElementById("dark_mode_overlay");
  if (!darkOverlay) {
    darkOverlay = document.getElementById("dark-mode-overlay");
  }

  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
    writeCookie("dark-mode", 1);
  }
  else {
    body.classList.remove("dark-mode");
    clearCookie("dark-mode");
  }
}
function darkModeInit() {
  var body = document.body;
  var cookie_value = getCookie("dark-mode");
  var someDate = new Date();
  var numberOfDaysToAdd = 30;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  if (cookie_value != "") {
    if (cookie_value == "1") {
      body.classList.add("dark-mode");
      writeCookie("dark-mode", 1);
    }
  }
  else {
    body.classList.remove("dark-mode");
    clearCookie("dark-mode");
  }
}
