<?php
$conn = new mysqli("localhost", "root", "", "Contact_Db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? '';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if($id) {
        // UPDATE
        $stmt = $conn->prepare("UPDATE contacts SET name=?, email=?, message=? WHERE id=?");
        $stmt->bind_param("sssi", $name, $email, $message, $id);
        $stmt->execute();
    } else {
        // CREATE
        $stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);
        $stmt->execute();
    }
    header("Location: index.html");
    exit;
}

if($action === 'read') {
    $result = $conn->query("SELECT * FROM contacts ORDER BY id DESC");

    echo "<table border='1' width='100%' cellpadding='5'>";
    echo "<tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Action</th></tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>{$row['id']}</td>";
        echo "<td>{$row['name']}</td>";
        echo "<td>{$row['email']}</td>";
        echo "<td>{$row['message']}</td>";
        echo "<td>
                <button onclick=\"editContact('{$row['id']}', '{$row['name']}', '{$row['email']}', '{$row['message']}')\">Edit</button>
                <button onclick=\"deleteContact('{$row['id']}')\">Delete</button>
              </td>";
        echo "</tr>";
    }

    echo "</table>";
}

if($action === 'delete') {
    $id = $_GET['id'];
    $stmt = $conn->prepare("DELETE FROM contacts WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
}

$conn->close();
?>
