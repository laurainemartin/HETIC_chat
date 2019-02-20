# HETIC_chat

Mise en place d'une application de chat (chatbot)

# Configuration de base
- Créer un fichier pour le serveur
- Initialiser le dossier serveur (npm init)
- Importer les composants express, body-parser, dotenv, ejs, mongoose, path (npm i -s)
- Configurer le fichier serveur :
    - Créer une constance pour les impots (attention à dotenv)
    - Créer une constante pour le serveur (utilisation de la fonction express)
    - Configurer les composants
    - Lancer le serveur

# Configuration des vues client
- Définir le moteur de rendu en ejs
- Définir un dossier www comme étant le dossier client
- Créer un fichier index.ejs dans le dossier www
- Créer un router front
    - Créer la routes Homepage
    - Créer la route register
    - Créer la route login
    - Créer la route chat

# Création de l'API
- Créer un fichier de routes pour l'API (cf. font.routes)
- Créer une route "/register"
- Créer une route "/login"

# Création des formulaires register/login
- Le formulaire d'inscription contient 
    - email
    - pseudo
    - password (x2)
    - cgu

- Le formulaire de connexion contient :
    - email
    - password
