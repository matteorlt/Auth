<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: index.html');
    exit();
}

$username = htmlspecialchars($_SESSION['user']);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Bienvenue</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <div class="form-container">
        <h2>Connexion réussie !</h2>
        <p>Bienvenue, <strong><?php echo $username; ?></strong> 👋</p>
        <form action="../logout.php" method="POST">
            <button type="submit">Se déconnecter</button>
        </form>
    </div>
</body>
</html>
