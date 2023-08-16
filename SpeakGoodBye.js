(function(window) {
  var byeSpeaker = {}; // Create an object

  var speakWord = "Good Bye"; // Move the speakWord inside the object

  byeSpeaker.speak = function(name) { // Attach the speak function to byeSpeaker
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Expose byeSpeaker to the global scope
})(window);
