
import { useState } from 'react';
import './App.css';
import useCoronaData from './useCoronaData';

function App() {

const [value, setValue] =  useState("");

const data = useCoronaData(value);


let confirmed = "";
if(data !== undefined) {

  confirmed = data.data.latest_data.confirmed;
}
  
  return (
    <div className="App">
      <input type="text" value={value} onChange={(evt) => 
        setValue(evt.target.value)
      }></input>

      <h1>{confirmed}</h1>
    </div>
  );
}

export default App;
