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
            Desarrollador Frontend | Diseño de Interfaces
          </p>
          <div className="divider"></div>
          <div className="social-links">
            <a
              className="App-link"
              href="#projects"
              rel="noopener noreferrer"
            >
              Portafolio
            </a>
            <a
              className="App-link"
              href="#contact"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;