import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";
function App() {
  //Uso de estado para que cuando el estado sea null aparezca el boton de buscar personajes
  //y si no sifnigica que trae datos y se quita ese parte
  const [characters, setCharacters] = useState(null);
  //Request a la API mediante Async y await
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
    
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? ( <Characters characters = {characters} setCharacters = {setCharacters}/>)
        :(
          <>
           <img src={imageRickMorty}
              alt="Rick & Morty"
              className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
       
       
      </header>
    </div>
  );
}

export default App;
