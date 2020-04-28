const light=document.getElementById("light-theme")
const dark=document.getElementById("dark-theme")
const dark2=document.getElementById("dark-theme-2")
const headElement=document.getElementsByTagName("head")[0]
const url='https://modelsaber.com'
const iframeURL=url+'/resources/iframe.css'
const transition='https://cdn.assistant.moe/css/transition.css'
let darkMode=(localStorage.getItem("dark")==='true')
const iframeParent='https://bsaber.com'
const allowedKeys={37:'left',38:'up',39:'right',40:'down',65:'a',66:'b'}
const konamiCode=['up','up','down','down','left','right','left','right','b','a']
let konamiCodePosition=0
localStorage.removeItem('theme')
function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}
function addCSS(cssFile){let newStyle=document.createElement("link")
newStyle.setAttribute("rel","stylesheet")
newStyle.setAttribute("type","text/css")
newStyle.setAttribute("href",cssFile)
newStyle.setAttribute("id","theme")
headElement.appendChild(newStyle)}
if(inIframe()){addCSS(iframeURL)
light.disabled=true
dark.disabled=true
dark2.disabled=true
document.addEventListener("DOMContentLoaded",function(){const sectionElement=document.getElementsByClassName("section")[0]
const navElement=document.getElementsByTagName("nav")[0]
function trueHeight(){return sectionElement.scrollHeight+navElement.scrollHeight}
parent.postMessage(trueHeight(),iframeParent)
document.addEventListener('fetchingStart',function(){parent.postMessage(trueHeight(),iframeParent)},false)
document.addEventListener('fetchingDone',function(){parent.postMessage(trueHeight(),iframeParent)},false)
window.addEventListener('message',function(event){if(event.origin==iframeParent){if(event.data=='triggerHeight'){parent.postMessage(trueHeight(),iframeParent)}}})})}else{function darkToggle(enabled){light.disabled=enabled
dark.disabled=!enabled
dark2.disabled=!enabled
darkMode=!enabled
localStorage.setItem("dark",enabled?true:false)}
function applyCurrentMode(enabled){darkToggle(enabled)
addCSS(transition)}
applyCurrentMode(darkMode)
document.addEventListener('keydown',function(event){let key=allowedKeys[event.keyCode]
let requiredKey=konamiCode[konamiCodePosition]
if(key==requiredKey){konamiCodePosition++
if(konamiCodePosition==konamiCode.length){activateCheats()
konamiCodePosition=0}}else{konamiCodePosition=0}})
function activateCheats(){darkToggle(darkMode)
console.log("cheats activated")}}