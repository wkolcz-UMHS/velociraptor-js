//Set Up
let seq = [];
// up, up, down, down, left, right, left, right, B, A
let kanami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let raptor = new Audio();
let element = document.getElementById("vr");
var script = document.currentScript;
let src = script.src.replace('vr.js','')

//Dynamically add CSS to page
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = src + 'css/main.css';
link.media = 'all';

//Check for audio compatibilty
  if (raptor.canPlayType("audio/mpeg")) {
    raptor.setAttribute("src",src + "sound/raptor-sound.mp3");
  } else {
    raptor.setAttribute("src",src + "sound/raptor-sound.ogg");
  }
//Record key strokes, check last 10, if matches let the majic begin
document.onkeydown = function(e) {
  seq.push(e.which);
  let check = seq.slice(-10,seq.length)
  if(JSON.stringify(kanami)==JSON.stringify(check)){
    head.appendChild(link);
    console.log('rarh');
    element.addEventListener("animationend", listener, false);
    element.classList.add("show");
    raptor.play();
  }
    e.preventDefault();
};

//Remove the fun after its done
function listener(e) {
  if(e.type==='animationend'){
    element.classList.remove("show");
  }
}
