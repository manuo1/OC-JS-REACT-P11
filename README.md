# OC-JS-REACT-P11
Développeur d'application JavaScript React - Projet 11 - Développez une application Web avec React et React Router


# Kasa

Projet front-end réalisé dans le cadre de la formation OpenClassrooms.  
**Kasa** est une application web de location d'appartements entre particuliers.

## Technologies

- Vite v6
- React v19
- React Router DOM v6
- Sass (SCSS)

Aucune librairie externe (UI, state management...) n’est utilisée, conformément aux contraintes du projet.

## Structure du projet

```
kasa/
├── public/
│   └── logements.json         # Données simulant une API
├── assets/                     
├── src/
│   ├── components/            # Composants réutilisables : Card, Slideshow, Rating, Collapse, etc.
│   │   ├── Banner.jsx
│   │   ├── Banner.module.scss # (chaque composant a son propre module .scss associé)
│   │   ├── etc...
│   ├── pages/                 # Pages principales : Home, About, Accommodation, Error404
│   │   ├── About.jsx
│   │   ├── About.module.scss  # (chaque composant a son propre module .scss associé)
│   │   ├── etc...
│   ├── styles/                # Variables SCSS
│   └── App.jsx, main.jsx      # Entrée du projet
│   ├── router
│   │   └── Router.jsx         # Définit la structure des routes avec React Router v6
```

## Installation

```bash
git clone https://github.com/manuo1/OC-JS-REACT-P11.git
cd OC-JS-REACT-P11/kasa/
npm install
npm run dev
```

Accès à l'application : [http://localhost:5173](http://localhost:5173)

