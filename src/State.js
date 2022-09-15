import { useEffect, useState } from 'react';
import './App.css';
import store from './store';

const useStore = (selector = (state) => state) => {
  const [state, setState] = useState(selector(store.getState()))
  console.log('usestore');
  useEffect(() => store.subscribe((state) => setState(selector(state))), [])

  return state
}

console.log(store);
const IncrementValue = ({ item }) => (<button onClick={() => {

  const state = store.getState()

  store.setState({ ...state, [item]: state[item] + 1 })


}}>
  Increment {item}
</button>)


const DisplayValue = ({ item }) => (<div>
  {item} :{useStore(state => state[item])[item]}
</div>)


function State() {




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
