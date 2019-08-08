/**
 * @param {STRING} elementId containing the element that contains only the text to add the effect to.
 * @param {INT} delay containing in miliseconds the delay before start "typing".
 * @param {INT} writingspeed containing in miliseconds the speed between each character.
 * @param {INT} cursorspeed containing in miliseconds the speed to blink the simulated cursor.
 * @param {STRING} cursorcolor containing the string with the cursor color. All formats acceptable by CSS are supported.
 */
function typewriting(elementId, delay = 0, writingspeed = 100, cursorspeed = 600, cursorcolor = mainColor){
  var containerElement = document.getElementById(elementId);
  containerElement.style.display = "inline block";
  var fullText = containerElement.innerHTML;
  containerElement.innerHTML = "";
  var textArea = document.createElement("span");
  var cursorArea = document.createElement("span");
  containerElement.appendChild(textArea);
  containerElement.appendChild(cursorArea);
  simulateWritingCursor(cursorArea, cursorspeed, cursorcolor);
  var typewriterSet = setTimeout(function(){setInterval(function(){if(typewriter(textArea, fullText) == false){clearInterval(typewriterSet)}},writingspeed)},delay);
}

function typewriter(containerElemt, fulltext){
  var actualText = containerElemt.innerHTML;
  if(containerElemt.innerHTML.length == fulltext.length){
    return false;
  }
  containerElemt.innerHTML = actualText + fulltext[actualText.length];
}

function simulateWritingCursor(element, speed, color){
  var blinkingcursor = document.createElement("span");
  blinkingcursor.textContent = "|";
  blinkingcursor.style.color = color;
  element.append(blinkingcursor);
  setInterval(function(){cursorBlinker(blinkingcursor, color)},speed);
}

function cursorBlinker(element, color){
  console.log("blinking");
  if(element.style.opacity == "1"){
    element.style.opacity = "0";
  } else {
    element.style.opacity = "1";
  }
}