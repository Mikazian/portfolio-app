# **Portfolio de Mike Xiong**
***

## **Description**

Projet portfolio monorepository qui présente mes expériences et mes compétences. Site web entièrement responsive, adapté sur mobile, tablette et desktop.

> #### **Frontend :**
> - React/TypeScript
> - Redux
> - HTML/CSS
> - JavaScript
> - Tailwind CSS
> - Framer Motion

> #### **Backend :**
> - Nest JS
> - PostgreSQL

> #### **CI/CD :**
> - Docker
> - Nginx
> - Github Actions

<br>

## **Liens utiles**

Site :

Figma :  

<br>

## **Installation en local**

- Installer les **dépendances**
```
npm install
```

- Créer un fichier **.env** à la racine du projet
```
BACKEND_HOST=YOUR_HOST
BACKEND_PORT=YOUR_PORT

FRONTEND_HOST=YOUR_HOST
FRONTEND_PORT=YOUR_PORT

DB_HOST=YOUR_HOST
DB_PORT=YOUR_PORT
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DB_NAME
```

- Créer un fichier **.env** dans le répertoire deployment
```
POSTGRES_PORT="YOUT_PORT"
POSTGRES_ROOT_PASSWORD="YOUR_ROOT_PASSWORD"
POSTGRES_DATABASE="YOUR_DATABASE_NAME"
POSTGRES_USER="YOUR_DB_USER"
POSTGRES_PASSWORD="YOUR_DB_PASSWORD"
```

- Build et exécuter les conteneurs **Nginx** et **PostgreSQL**
```
npm run compose:up
```

- Lancer le serveur Nest JS
```
npm run start
```

- Lancer l'application React
```
npm run dev
```