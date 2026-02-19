function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.style.color = "red";

    if (name === "" || email === "" || message === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        error.innerText = "Enter a valid email address!";
        return false;
    }

    error.innerText = "";
    return true;
}

// Load contacts via AJAX
window.onload = function() {
    loadContacts();
};

function loadContacts() {
    fetch('save.php?action=read')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contactsTable').innerHTML = data;
    });
}

function editContact(id, name, email, message) {
    document.getElementById('id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
    document.getElementById('submitBtn').innerText = "Update";
}

function deleteContact(id) {
    if(confirm("Are you sure to delete this contact?")) {
        fetch('save.php?action=delete&id=' + id)
        .then(() => loadContacts());
    }
}
