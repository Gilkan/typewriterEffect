/**
 * @param {STRING} elementId containing the element that contains only the text to add the effect to.
 * @param {INT} delay containing in miliseconds the delay before start "typing".
 * @param {INT} writingspeed containing in miliseconds the speed between each character.
 * @param {INT} cursorspeed containing in miliseconds the speed to blink the simulated cursor.
 * @param {STRING} cursorcolor containing the string with the cursor color. All formats acceptable by CSS are supported.
 *
 * The container to apply the effect must have only the text to use the effect on.
 * 
 * Example:
 * 
 * <div id="typewriterContainer1">Typewrite this text here...</div>
 * <script>typewriting("typewriterContainer1")</script>
 * 
 */
function typewriting(elementId, delay = 0, writingspeed = 100, cursorspeed = 600){
  var containerElement = document.getElementById(elementId);
  containerElement.style.display = "inline block";
  var fullText = containerElement.innerHTML;
  containerElement.innerHTML = "";
  var textArea = document.createElement("span");
  var cursorArea = document.createElement("span");
  containerElement.appendChild(textArea);
  containerElement.appendChild(cursorArea);
  simulateWritingCursor(cursorArea, cursorspeed);
  var typewriterSet = setTimeout(function(){setInterval(function(){if(typewriter(textArea, fullText) == false){clearInterval(typewriterSet)}},writingspeed)},delay);
}

function typewriter(containerElemt, fulltext){
  var actualText = containerElemt.innerHTML;
  if(containerElemt.innerHTML.length == fulltext.length){
    return false;
  }
  containerElemt.innerHTML = actualText + fulltext[actualText.length];
}

function simulateWritingCursor(element, speed){
  var blinkingcursor = document.createElement("span");
  blinkingcursor.textContent = "|";
  element.append(blinkingcursor);
  setInterval(function(){cursorBlinker(blinkingcursor)},speed);
}

function cursorBlinker(element){
  console.log("blinking");
  if(element.style.opacity == "1"){
    element.style.opacity = "0";
  } else {
    element.style.opacity = "1";
  }
}
