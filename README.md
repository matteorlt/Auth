
# 🔐 Auth – Système de Connexion et Inscription en PHP

Ce projet est une implémentation simple et fonctionnelle d’un système de **connexion/inscription**
avec gestion des erreurs, sessions, et vérification de la force du mot de passe.

---

## 📁 Structure du projet

```

auth/
├── assets/
│   ├── css/style.css
│   └── js/script.js
├── includes/
│   └── db.php
├── views/
│   ├── index.html
│   └── accueil.php
├── database/
│   └── bdd.sql
├── login.php
├── register.php
├── logout.php
├── README.md

```

---

## ⚙️ Fonctionnalités

- ✅ Formulaire unique pour **connexion et inscription** (switch via JavaScript)
- ✅ Vérification de la **force du mot de passe**
- ✅ Gestion des erreurs :
  - Identifiants invalides
  - Nom d'utilisateur ou email déjà utilisé
- ✅ Affichage dynamique des messages d'erreur/succès
- ✅ Sécurité : hashage des mots de passe avec `password_hash`
- ✅ Déconnexion via `logout.php` et protection des pages par `$_SESSION`

---

## 🛠️ Installation

### 1. Cloner ou copier le projet dans `htdocs` (XAMPP) :
```

C:\xampp\htdocs\auth\\

````

### 2. Créer la base de données

- Lancer Apache et MySQL via XAMPP
- Aller sur [http://localhost:8080/phpmyadmin](http://localhost:8080/phpmyadmin)
- Importer le fichier `database/bdd.sql`

### 3. Vérifier la configuration de la base de données

Dans `includes/db.php` :
```php
$host = 'localhost';
$db   = 'auth_system';
$user = 'root';
$pass = ''; // mot de passe MySQL (souvent vide avec XAMPP)
````

### 4. Accéder au site

[http://localhost:8080/auth/views/index.html](http://localhost:8080/auth/views/index.html)

---

## ✅ Auteurs

Projet développé par Mattéo – dans le cadre d’un apprentissage du PHP natif avec MySQL.

---

## 🔒 Conseils pour aller plus loin

* Ajouter un système de confirmation par email
* Utiliser des tokens CSRF pour sécuriser les formulaires
* Passer à un framework (Laravel, Symfony) pour des projets plus complexes
