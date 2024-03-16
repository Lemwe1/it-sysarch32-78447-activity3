import React, { useState, useEffect } from 'react';
function Pokedex() {
    const [pokemonData, setPokemonData] = useState(null);
    
    useEffect(() => {
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
          .then(response => response.json())
          .then(data => setPokemonData(data))
          .catch(error => console.error('Error',error));
      }, []);
    

    return(
         <header>
                 <nav className="navbar">
                     <div className="navdiv">
                         <ul>
                             <li><button>English</button></li>
                             <li><button>Japanese</button></li>
                             <li><button>Chinese</button></li>
                             <li><button>French</button></li>
                             
                         </ul>
                     </div>
                 </nav>
         </header> 
    );
 }
 
 export default Pokedex