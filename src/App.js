import React from "react";
function App() {
  const [celsius, setCelsius] = React.useState(0);
  const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
  }
  const conversor = () =>{
    setCelsius((celsius * 1.8) + 32);
    document.getElementById("mostrar").innerText = celsius;
  }
  return (
    <div className="App">
     <h1>Conversor Graus Celsius para Fahrenheit</h1>
     <br/>
     <label>Digite o valor em Graus Celsius:</label>
     <br/> <br/>
     <input type= "number" value={celsius} onChange = {handleCelsiusChange}></input>
     <br/>
     <button onClick={conversor}>Converter para Fahrenheit</button>
    </div>
  );
}

export default App;
