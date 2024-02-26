const modeButton = document.querySelector("#checkbox");
const main = document.querySelector("main");
const ad = document.querySelector(".ad");
const weather = document.querySelector(".weather");
const sidebar = document.querySelector(".sidebar");
const imagebar = document.querySelector(".imagebar");


modeButton.addEventListener("click", () => {
    if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#fff";
		main.style.transition = "all 0.3s ease";
		modeButton.textContent = "🔆";
	} 
	else {
		main.style.background = "#fff";
		main.style.color = "#000";
		main.style.transition = "all 0.3s ease";
		modeButton.textContent = "🕶️";
	}

	if (window.location.pathname == '/chamber/index.html')
	{
		if (modeButton.checked == true) {
			ad.style.border = "2px solid #fff";
			weather.style.border = "2px solid #fff";
		}
		else {
			ad.style.border = "2px solid #000";
			weather.style.border = "2px solid #000";
		}
	}

	if (window.location.pathname == '/chamber/discover.html')
	{
		if (modeButton.checked == true) {
			sidebar.style.border = "5px solid #fff";
			imagebar.style.border = "5px solid #fff";
		}
		else {
			sidebar.style.border = "5px solid #000";
			imagebar.style.border = "5px solid #000";
		}
	}
});