function setCookie(colorTheme) {
    let date = new Date();
    date.setTime(date.getTime() + (3 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = "theme=" + colorTheme + ";" + expires + "; path=/";
}

function getCookie(theme) {
    let name = theme + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

function checkCookie() {
    let theme = getCookie("theme");
    if (theme == "default") {
    body.className = "";
    }
    if (theme == "dark") {
    body.className = "dark";
    }  
}

let body = document.querySelector("body"),
goDefault = function () {
  body.className = "";
  setCookie("default");
},
goDark = function () {
  body.className = "";
  body.classList.add("dark");
  setCookie("dark");
};

document.querySelector(".theme1").addEventListener("click", goDefault, false);
document.querySelector(".theme2").addEventListener("click", goDark, false);

checkCookie();
