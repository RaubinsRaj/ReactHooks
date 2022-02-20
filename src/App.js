import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterObject from './components/HookCounterObject';
import HookCounterArray from './components/HookCounterArray';
import UseStateArray from './components/UseStateArray';

function App() {
  return (
    <div className="App">
         <UseStateArray />
      {/* <HookCounterArray /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <CounterClass /> */}
    </div>
  );
}

export default App;
