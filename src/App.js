import './App.css';
import State from './State';


function App() {



  // const test = (val) => {
  //   console.log('ok');
  //   let current = val

  //   return {
  //     old: () => current,
  //     new: (newi) =>
  //       current = newi

  //   }
  // }

  // const test1 = test(2)
  // console.log(test1);


  return (
    <div >

      <State />
      {/* <button onClick={() => {
        console.log(test1.old());
        console.log(test1.new(test1.old() + 1));
        console.log(test1.old());

      }}>Click {test1.old()}</button> */}

    </div>
  );
}

export default App;
