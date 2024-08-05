//import Cliente from "./Componentes/Cliente";
import { useState } from "react";

function App() {
  const [nome, Setnome] = useState('Nome')
  const [carro, Setcarro] = useState('Carro')
  const [valor, Setvalor] = useState('Valor')
  const [showInfo, setShowInfo] = useState(false);

   function handleChangeInfo(nome, carro, valor) {
      Setnome (nome)
      Setcarro (carro)
      Setvalor (valor)
      setShowInfo(true);
  }
  
  
    return (
    <div>
      
      <h1>Projeto inicial</h1>
      {showInfo && (
      <h1>olá {nome} dono do Carro {carro} de valor {valor}</h1>)}
      <button onClick={ () => handleChangeInfo('carlos', 'Cobalt', '35.000,00') }> Trocar Informações</button>
    </div>
  );
}

export default App;
