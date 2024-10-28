const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("mouseover", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("mouseover", () => {
	container.classList.add("right-panel-active");
});
signInBtn.onclick=function()
				{	 location.href="index.html";
				}	
fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
