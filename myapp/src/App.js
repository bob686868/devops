import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [names,setNames]=useState({})
  useEffect(()=>{
    async function getNames(){
      let res=await fetch(`http://localhost:3001/pets`)
      res=await res.json()
      console.log(res)
    }
    console.log('hahahahahha')
    getNames()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App</code> and save to reload.
        </p>

          Learn React

      </header>
    </div>
  );
}

export default App;
