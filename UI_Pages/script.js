document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    let isValid = true;

    // Validate email
    if (!username.value.endsWith("@gmail.com")) {
        username.classList.add("is-invalid");
        isValid = false;
    } else {
        username.classList.remove("is-invalid");
    }

    // Validate password length
    if (password.value.length <= 8) {
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        password.classList.remove("is-invalid");
    }

    if (isValid) {
        window.location.href = "./HomePage.html";
    }
});
