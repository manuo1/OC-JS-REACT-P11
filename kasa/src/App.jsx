import { useEffect, useState } from "react";

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <div>
      <h1>Bienvenue sur Kasa</h1>
      <ul>
        {logements.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
