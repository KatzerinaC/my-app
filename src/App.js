// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello everyone!</h1>
        <Weather city="Berlin" />
      </header>
    </div>
  );
}

export default App;
