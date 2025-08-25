document.addEventListener("DOMContentLoaded", () => {
  // Add entrance animation to login card with neon effect
  const loginCard = document.querySelector(".sign-in-form-container");
  if (loginCard) {
    loginCard.style.opacity = "0";
    loginCard.style.transform = "translateY(60px) scale(0.9)";

    setTimeout(() => {
      loginCard.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
      loginCard.style.opacity = "1";
      loginCard.style.transform = "translateY(0) scale(1)";
    }, 200);
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

document.querySelectorAll("input")?.forEach((element) => {
  element.addEventListener("focusout", (e) => {
    if (!e.target.validity.valid) {
      if (!e.target.nextElementSibling) {
        let errorMsg = document.createElement("p");
        errorMsg.classList = "error-msg";
        errorMsg.innerHTML = e.target.id + " is not valid!!";
        e.target.parentNode.appendChild(errorMsg);
        e.target.parentNode.classList.add("animated");
      } else {
        e.target.parentNode.classList.remove("animated");
        e.target.parentNode.offsetWidth;
        e.target.parentNode.classList.add("animated");
      }
    } else {
      if (e.target.id === "confirm-password") {
        const pass = document.querySelector("#password").value;
        const condition = e.target.value === pass;
        if (!condition) {
          if (!e.target.nextElementSibling) {
            let errorMsg = document.createElement("p");
            errorMsg.classList = "error-msg";
            errorMsg.innerHTML = "password didn't match";
            e.target.setCustomValidity(errorMsg.textContent);
            e.target.parentNode.appendChild(errorMsg);
            e.target.parentNode.classList.add("animated");
          } else {
            e.target.parentNode.classList.remove("animated");
            e.target.parentNode.offsetWidth;
            e.target.parentNode.classList.add("animated");
          }
        }
      } else {
        e.target.validity.valid = true;
        e.target.nextElementSibling?.remove();
        e.target.parentNode.classList.remove("animated");
      }
    }
  });
});
