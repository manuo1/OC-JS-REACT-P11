# Architecture du projet

* `/components` contient tous les composants réutilisables pour maximiser la séparation des responsabilités.
* `/pages` regroupe les vues principales accessibles par le routing.
* `/styles` stocke les variables SCSS globales pour centraliser les couleurs, tailles, breakpoints, etc.
* `/router/Router.jsx` isole la logique de routing React Router pour éviter d’encombrer `App.jsx`.
* `*.module.scss` Chaque composant ou page a son propre module .scss associé : Les SCSS modules garantissent une encapsulation des styles (évite les conflits de classes). Chaque composant gère son propre style.


---

# Gestion des routes avec React Router

```jsx
// router/Router.jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="logement/:id" element={<Accommodation />} />
    <Route path="404" element={<Error404 />} />
    <Route path="*" element={<Error404 />} />
  </Route>
</Routes>
```

* **`<Routes>`** : Conteneur principal pour définir toutes les routes.
* **`<Route path="/" element={<Layout />}>`** : Route "parente", applique le layout à toutes les sous-routes.
* **`<Route index element={<Home />}`** : Route d’accueil (`/`). index est utilisé pour la route par défaut d’un parent.
* **`<Route path="about"`** : Route vers la page À propos.
* **`<Route path="logement/:id"`** : Route dynamique. `:id` capturé dans `Accommodation.jsx` via `useParams()`.
* **`<Route path="404"`** : Route explicite vers la page 404
* **`<Route path="*"`** : Toutes les routes non définies redirigent vers la 404

---
 
### Fichier `Layout.jsx` – Structure commune des pages

```jsx
<Header />
<main>
  <Outlet />
</main>
<Footer />
```

* **`<Header />`** et **`<Footer />`** : affichés sur **toutes les pages**
* **`<Outlet />`** : composant de `react-router-dom`. Il **rend dynamiquement la page enfant**.

---

# Fetch des données

---  

> `logements.json` placé dans le dossier `public/` => `fetch()` Pour simuler un futur Backend
---


## `CardGrid.jsx` 

```jsx
const [logements, setLogements] = useState([]);

useEffect(() => {
  fetch("/logements.json")
    .then((response) => response.json())
    .then((data) => setLogements(data))
    .catch((err) => console.error("Error loading logements:", err));
}, []);

```
* `useState` avec `logements` pour stocker les logements.
* `useEffect` charger les données au montage du composant.
* `fetch("/logements.json")` Fetch des data.
* `setLogements()` = re-render CardGrid avec les data
* `catch` en cas d’erreur.


---

## `Accommodation.jsx`

```jsx
const { id } = useParams();
const navigate = useNavigate();
const [logement, setLogement] = useState(null);

useEffect(() => {
  fetch("/logements.json")
    .then((res) => res.json())
    .then((data) => {
      const found = data.find((item) => item.id === id);
      if (found) {
        setLogement(found);
      } else {
        navigate("/404");
      }
    })
    .catch((err) => {
      console.error("Error loading logement:", err);
      navigate("/404");
    });
}, [id, navigate]);

```
* `useState` avec `logement` pour stocker le logement.
* `:id` récupéré via `useParams()` depuis l’URL.
* `useNavigate()` hook React Router pour naviguer
* `fetch("/logements.json")` Fetch des data.
* `find()` Recherche de l’entrée correspondant à l’`id` du logement**.
* Si on ne trouve rien, redirection vers 404.
* `catch` en cas d’erreur avec redirection vers 404.
* `setLogements()` = re-render Accommodation avec les data

---

# Gestion d’erreurs sur les images

```jsx
// components/Card.jsx
<img
src={cover}
alt={title}
className={styles.image}
onError={(e) => {
    console.warn("Cover Image failed to load for id :", id);
    e.target.src = fallbackImage;
}}
/>
```
```jsx
// components/Slideshow.jsx
<img
src={pictures[currentIndex]}
alt={`Slide ${currentIndex + 1}`}
className={styles.image}
onError={(e) => {
    console.warn("Image failed to load:", pictures[currentIndex]);
    e.target.src = fallbackImage;
}}
/>
```
- `onError` sur les images pour afficher une image par défaut (`fallbackImage`).

---

# Points code

## `Collapse.jsx` : Texte ou Array possible en props de Collapse

```jsx
// components/Collapse.jsx
<div className={styles.contentInner}>
    {Array.isArray(content) ? (
    content.map((item, index) => (
        <p key={index} className={styles.line}>
        {item}
        </p>
    ))
    ) : (
    <p>{content}</p>
    )}
</div>
```
  

## `Rating.jsx` : Gestion du nombre d'étoiles

```jsx
// components/Rating.jsx
function Rating({ value }) {
  const totalStars = 5;
  const rating = parseInt(value, 10);

  return (
    <div className={styles.rating}>
      {Array.from({ length: totalStars }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${styles.star} ${i < rating ? styles.active : ""}`} 
          xmlns="http://www.w3.org/2000/svg"
        >...
        </svg>
      ))}
    </div>
  );
}
```


## `Slideshow.jsx` : Déplacement dans les images du Carousel

```jsx
// components/Slideshow.jsx
function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slideshow}>
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
        onError={(e) => {
          console.warn("Image failed to load:", pictures[currentIndex]);
          e.target.src = fallbackImage;
        }}
      />

      {pictures.length > 1 && (
        <>
          <button className={styles.prev} onClick={handlePrev}>...</button>
          <button className={styles.next} onClick={handleNext}>...</button>

          <div className={styles.counter}>
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}
```
# Responsive

J’ai utilisé autant que possible la fonction CSS clamp() pour gérer le responsive design. Cette approche permet d’adapter dynamiquement les tailles (marges, polices, images, etc.) en fonction de la largeur de l’écran, sans avoir recours à des media queries traditionnelles avec des breakpoints fixes.
Cela évite notamment les "sauts visuels" ou "cassures" lorsqu’on redimensionne la fenêtre, en assurant une transition fluide entre les tailles.