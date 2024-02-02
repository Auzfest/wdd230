var currentDate = new Date();

// Format the date (you can customize the format as needed)
var formattedDate = currentDate.getFullYear();

// Set the formatted date as the content of the paragraph
document.getElementById('dateParagraph').innerHTML = '@' + formattedDate;