function updateRangeValue() {
    var ratingInput = document.getElementById("page_rating");
    var ratingValue = document.getElementById("rating_value");
    ratingValue.textContent = ratingInput.value;
  }
  
document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        var password = document.getElementById("password");
        var confirm_password = document.getElementById("confirm_password");
        var password_error = document.getElementById("password_error");

        if (password.value !== confirm_password.value) {
            password_error.textContent = "Passwords do not match";
            password.value = "";
            confirm_password.value = "";
            password.focus();
            event.preventDefault();
        } else {
            password_error.textContent = "";
        }

        var ratingInput = document.getElementById("page_rating");
        var ratingValue = document.getElementById("rating_value");
        var rating_error = document.getElementById("rating_error");
        if (ratingValue.textContent != ratingInput.value)
        {
            rating_error.textContent = "Please select a rating";
            event.preventDefault();
        } else {
            rating_error.textContent = "";
        }
    });
});