(function(window) {
  var helloSpeaker = {}; // Create an object

  var speakWord = "Hello"; // Move the speakWord inside the object

  helloSpeaker.speak = function(name) { // Attach the speak function to helloSpeaker
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Expose helloSpeaker to the global scope
})(window);
