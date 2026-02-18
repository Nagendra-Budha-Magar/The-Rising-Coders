<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "Contact_Db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data safely
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert query
$sql = "INSERT INTO contacts (name, email, message)
        VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message saved successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
