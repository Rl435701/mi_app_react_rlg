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
            Desarrollador web especializado en crear experiencias digitales elegantes 
            y funcionales. Combinando diseño cuidadoso con tecnología moderna.
          </p>
          
          <div className="divider"></div>
          
          <div className="social-links">
            <a className="App-link" href="#projects">
              Proyectos
            </a>
            <a className="App-link" href="#about">
              Sobre mí
            </a>
            <a className="App-link" href="#contact">
              Contacto
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;