/*-------------- Audio Files --------------- */
const success = new Audio('https://github.com/healer-op/HealCloud/blob/main/mp3/Harry%20Potter%20Theme%20Song_48k.mp3?raw=true');
function wishme(){
  success.play();
  success.play();
}
const params = new URLSearchParams(document.location.search);
var name = params.get("name");
const date = params.get("date");

var a  = ["1","2","3","4","5","6","7","8","9"];
var b  = ["A","B","C","D","E","F","G","H","I"];
var c  = ["11:00AM","11:30AM","12:00PM","12:30PM","1:00PM","1:30PM","2:00PM","2:30PM",]
var d  = ["001256733","001256722","001256711","001256700","001256744","001256755","001256766","001256777",]

var alen = a.length;
var blen = b.length;
var clen = c.length;
var i = Math.floor(Math.random() * alen);
var j = Math.floor(Math.random() * blen);
var k = Math.floor(Math.random() * clen);

document.getElementById("name").innerHTML = name;
document.getElementById("cabin").innerHTML = b[i];
document.getElementById("date").innerHTML = date;
document.getElementById("date1").innerHTML = date;
document.getElementById("time").innerHTML = c[k];
document.getElementById("time1").innerHTML = c[k];
document.getElementById("seat").innerHTML = a[j]+b[i];
document.getElementById("bar").innerHTML = d[k];
document.getElementById("bar1").innerHTML = d[k];

/** Made By Healer-op**/

$(document).ready(function(){
    $("#button").click(function(){
        domtoimage.toBlob(document.getElementById('ticket'))
        .then(function (blob) {
            window.saveAs(blob, `${name}_${d[k]}.png`);
        });
    })
})