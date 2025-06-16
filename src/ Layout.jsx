import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            RLG
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/about" className="nav-link">Acerca de</Link>
            <a href="#contact" className="nav-link">Contacto</a>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} RLG. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="/privacy">Política de Privacidad</a>
            <a href="/terms">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}