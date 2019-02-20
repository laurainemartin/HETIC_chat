/*
Imports
*/

    // Création des constantes pour importer les modules NPM
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const ejs = require('ejs');

    // dotenv qui est un peu différent au niveau de l'importation
    require('dotenv').config();

    // Inner
    const mainRouter = require('./routes/main.router');

/*
Configuration
*/

    // Configuration du serveur en créant une constante
    const server = express();
    const port = process.env.PORT;

    // Création d'une classe pour bien structurer le code
    class ServerClass {

        init() {
        // Configuration du dossier client
        server.set( 'views', __dirname + '/www' );
        server.use( express.static(path.join(__dirname, 'www')) );

        // Config du moteur de rendu
        server.set( 'view engine', 'ejs' );

        // Configuration des routes
        server.use('/', mainRouter)

        // Lancer le serveur
        this.launch();
        }

        launch() {
            server.listen( port, () => {
                console.log( `Server is listening on port ${port}` );
            });
        }

    }



/*
Démarrer le serveur
*/

    new ServerClass().init();
    


