import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import Forms from './components/Forms';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import User from './components/User';
import Api from './components/Api';
import Callback from './components/Callback';
import Usememo from './components/Usememo';
import Useeffectclean from './components/Useeffectclean';
function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/> */}
      {/* <Parent></Parent> */}
      {/* <Forms></Forms> */}
      {/* <ParentComp/> */}
      {/* <RefDemo/> */}
      {/* <User name = {(isLoggedIn) => isLoggedIn ? "user": "Guest"}></User> */}
      {/* <Api></Api> */}
      {/* <Callback></Callback> */}
      {/* <Usememo></Usememo> */}
      <Useeffectclean></Useeffectclean>
    </div>
  );
}

export default App;
