import React from 'react';
import './Pokemon.css'
const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;

  const getNameByLanguage = () => {
    switch (language) {
      case 'english':
        return name.english;
      case 'japanese':
        return name.japanese;
      case 'chinese':
        return name.chinese;
      case 'french':
        return name.french;
      default:
        return name.english;
    }
  };

  return (
    <div className="pokemon">
      <img src={image} alt={getNameByLanguage()} />
      <h3>[{id}]&nbsp;{getNameByLanguage()}</h3>
      
      <div>
        {type.map((t, index) => (
          <p key={index} className="elementType">{t}</p>
        ))}
      </div>
      <div className="stats">
        <div className="column">
          <p>HP: {base.HP}</p>
          <p>Attack: {base.Attack}</p>
          <p>Defense: {base.Defense}</p>
        </div>
        <div className="column">
          <p>Speed: {base.Speed}</p>
          <p>Sp. Attack: {base['Sp. Attack']}</p>
          <p>Sp. Defense: {base['Sp. Defense']}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;