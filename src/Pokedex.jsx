import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemonList(data))
      .catch((error) => console.error('Error', error));
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navdiv">
            <ul>
              <li>
                <button onClick={() => handleLanguageChange('english')}>English</button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange('french')}>French</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <Pokemon 
            key={pokemon.id} 
            pokemon={pokemon} 
            language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;