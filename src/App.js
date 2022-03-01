import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterObject from './components/HookCounterObject';
import HookCounterArray from './components/HookCounterArray';
import UseStateArray from './components/UseStateArray';
import CounterClassOne from './components/CounterClassOne';
import EffectCounterOne from './components/EffectCounterOne';
import DataFetching from './components/DataFetching';
import ParentComponent from './components/useCallBack/ParentComponent';
import Focus from './components/useRefHook/Focus';
import DocTitleOne from './components/useCustomHook/DocTitleOne';
import DocTitleTwo from './components/useCustomHook/DocTitleTwo';
import CounterOne from './components/useCustomHook/CounterOne';
import CounterTwo from './components/useCustomHook/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <Focus /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetching /> */}
      {/* <EffectCounterOne /> */}
      {/* <CounterClassOne /> */}
      {/* <UseStateArray /> */}
      {/* <HookCounterArray /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <CounterClass /> */}
    </div>
  );
}

export default App;
