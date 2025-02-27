document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profileButton");
    const loginPage = document.getElementById("loginPage");
    const signupPage = document.getElementById("signupPage");
    const closeLogin = document.getElementById("closeLogin");
    const closeSignup = document.getElementById("closeSignup");
    const openSignup = document.getElementById("openSignup"); // "Don't have an account? Sign Up" button
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // Profile button click karne par login popup show hoga
    profileButton.addEventListener("click", function () {
        loginPage.classList.remove("hidden");
    });

    // Login modal close karne ke liye
    closeLogin.addEventListener("click", function () {
        loginPage.classList.add("hidden");
    });

    // Signup modal close karne ke liye
    closeSignup.addEventListener("click", function () {
        signupPage.classList.add("hidden");
    });

    // Signup button par click karne par signup modal show hoga aur login modal hide hoga
    openSignup.addEventListener("click", function () {
        loginPage.classList.add("hidden");
        signupPage.classList.remove("hidden");
    });

    // Login form submit event
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login functionality not implemented yet.");
    });

    // Signup form submit event
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Signup functionality not implemented yet.");
    });

    // Escape key dabane par popups close karna
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            loginPage.classList.add("hidden");
            signupPage.classList.add("hidden");
        }
    });

    // Background click karne par popups close karna
    window.addEventListener("click", function (event) {
        if (event.target === loginPage) {
            loginPage.classList.add("hidden");
        }
        if (event.target === signupPage) {
            signupPage.classList.add("hidden");
        }
    });
});
