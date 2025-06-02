import React from 'react';
import { useParams } from 'react-router-dom';

function Accommodation() {
  const { id } = useParams();

  return (
    <main>
      <h1>Accommodation Page</h1>
      <p>Logement sélectionné : {id}</p>
    </main>
  );
}

export default Accommodation;
