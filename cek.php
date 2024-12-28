<?php
// login.php - Menangani login dan mencatat pengguna yang login
session_start();

$allowedNames = ["fani", "pipi"];
if (isset($_POST['username']) && in_array($_POST['username'], $allowedNames)) {
    $_SESSION['username'] = $_POST['username'];
    $username = $_POST['username'];

    // Simpan ke database login history (gunakan database MySQL atau lainnya)
    $conn = new mysqli('localhost', 'root', '', 'your_database');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("INSERT INTO login_history (username, login_time) VALUES (?, NOW())");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    header("Location: benar.html");
} else {
    header("Location: salah.html");
}
?>
