import React, { useState, useEffect } from 'react';
import './Pokemon.css';

function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonData(data[0])); // Fetching data for the first Pokemon only
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img className="card-image" src={pokemonData.image} alt={pokemonData.name.english} />
      <h2 className="name">{pokemonData.name.english}</h2>
      <ul className="elementType">
        {pokemonData.type.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
      <div className="stats">
        <div className="column">
          <p>HP: {pokemonData.base.HP}</p>
          <p>Attack: {pokemonData.base.Attack}</p>
          <p>Defense: {pokemonData.base.Defense}</p>
        </div>
        <div className="column">
          <p>Speed: {pokemonData.base.Speed}</p>
          <p>Sp. Attack: {pokemonData.base['Sp. Attack']}</p>
          <p>Sp. Defense: {pokemonData.base['Sp. Defense']}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;