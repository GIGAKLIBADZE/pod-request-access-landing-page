let emailInput = document.querySelector(".email-input")
let button = document.querySelector("main button")
let errorMessage = document.querySelector(".error")

button.addEventListener("click", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        errorMessage.innerText = "";
    } else {
        errorMessage.innerText = "Oops! Please check your email";
    }
});
  
