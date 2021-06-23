function ShowTime() {
	// body...
	var date=new Date();
	var h=date.getHours();
	var m= date.getMinutes();
	var s = date.getSeconds();
if (h==0) {
	h=12
}
if (h>12) {
	h=h-12
	session="PM"
}
if (h<12) {
	
	session="AM"
}
h=(h<10)?"0" +h:h;
m=(m<10)? "" + m:m;
s=(s<10)? "" + s:s;
var time = h + ":"+ m +":"+ s +":"+""+session;
document.getElementById("MyClock").innerText=time;
document.getElementById("MyClock").textContent=time;
SetTimeout(ShowTime,1000)
}
ShowTime()