function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.style.color = "red";

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    // Email pattern check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        error.innerText = "Enter a valid email address!";
        return false;
    }

    // If valid
    error.innerText = "";
    return true;
}
