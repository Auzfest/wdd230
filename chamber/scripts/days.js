document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    
    var lastVisit = localStorage.getItem("lastVisit");
    
    if (lastVisit === null) {
      document.getElementById("lastdays").textContent = "Welcome! Let us know if you have any questions.";
    } 
    else {
      var diffTime = currentDate - new Date(lastVisit);
      var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 1) {
        document.getElementById("lastdays").textContent = "Back so soon! Awesome!";
      } 
      else {
        var message = "You last visited " + diffDays + " day";
        if (diffDays !== 1) {
          message += "s";
        }
        message += " ago.";
        document.getElementById("lastdays").textContent = message;
      }
    }
    
    localStorage.setItem("lastVisit", currentDate);
  });