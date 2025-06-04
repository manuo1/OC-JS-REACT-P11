import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (found) {
          setLogement(found);
        } else {
          navigate('/404');
        }
      })
      .catch((err) => {
        console.error('Error loading logement:', err);
        navigate('/404');
      });
  }, [id, navigate]);

  if (!logement) return null; 

  return (
    <main>
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.description}</p>
    </main>
  );
}

export default Accommodation;
