<?php
require 'includes/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");

    try {
        $stmt->execute([$username, $email, $password]);
        header('Location: views/index.html?success=register');
        exit();
    } catch (PDOException $e) {
        if (str_contains($e->getMessage(), 'username')) {
            header('Location: views/index.html?error=username');
        } elseif (str_contains($e->getMessage(), 'email')) {
            header('Location: views/index.html?error=email');
        } else {
            header('Location: views/index.html?error=unknown');
        }
        exit();
    }
}
