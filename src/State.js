import { useEffect, useState } from 'react';
import './App.css';
import store from './store';

const useStore =()=>{
    const [state,setState] =useState(store.getState())
    useEffect(()=>store.subscribe(setState),[])

    return state
}

function State() {

  const IncrementValue = ({ item }) => (<button onClick={() => { 

    const state = store.getState()
    console.log(state,item);
    store.setState({ ...state, [item]: state[item] + 1 })
    

  }}>
    Increment {item}
  </button>)


  const DisplayValue = ({ item }) => (<div>
    {item} :{useStore()[item]}
  </div>)
    
  




  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      maxWidth: 600, gap: "1rem"
    }}>
      <IncrementValue item="value1" />
      <DisplayValue item="value1" />
      <IncrementValue item="value2" />
      <DisplayValue item="value2" />

      

    </div>
  );
}

export default State;
