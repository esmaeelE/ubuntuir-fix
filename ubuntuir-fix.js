str = window.location.href;
var re = /\/([a-zA-Z]+)\,/;

if (str.match(re)){
	var res = str.replace(re, "\?$1\=");
	document.location.href = res;
}
