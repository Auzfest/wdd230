const modeButton = document.querySelector("#checkbox");
const main = document.querySelector("main");
const ad = document.querySelector(".ad");
const weather = document.querySelector(".weather");

modeButton.addEventListener("click", () => {
    if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#fff";
		ad.style.border = "2px solid #fff";
		weather.style.border = "2px solid #fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		ad.style.border = "2px solid #000";
		weather.style.border = "2px solid #000";
		modeButton.textContent = "🕶️";
	}
});