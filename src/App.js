import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenido a mi espacio profesional</h1>
        <div className="profile-card">
          <h2 className="name">Ramón López García</h2>
          <p className="App-intro">
            Desarrollador en proceso
          </p>
          <div className="divider"></div>
        </div>
      </header>
    </div>
  );
}

export default App;