import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './ Layout';
import './App.css';

function Home() {
  return (
    <div className="portfolio-container">
      <section className="hero-section">
        <h1 className="hero-title">Hola, soy <span className="highlight">RLG</span></h1>
        <p className="tagline">Desarrollador Full Stack | Especialista en React & Node.js</p>
        <p className="hero-text">
          Creo soluciones digitales escalables y eficientes con más de 5 años de experiencia 
          ayudando a startups y empresas a materializar sus ideas en productos funcionales.
        </p>
      </section>

      <section className="projects-section">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>E-commerce Platform</h3>
            <p>Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.</p>
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">Stripe API</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Sistema de Gestión Hospitalaria</h3>
            <p>Sistema integral para gestión de pacientes, citas y historiales médicos con dashboard analítico.</p>
            <div className="tech-stack">
              <span className="tech-item">Angular</span>
              <span className="tech-item">NestJS</span>
              <span className="tech-item">PostgreSQL</span>
              <span className="tech-item">Chart.js</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Aplicación de Tareas en Tiempo Real</h3>
            <p>Aplicación colaborativa de gestión de tareas con notificaciones en tiempo real y sincronización multiplataforma.</p>
            <div className="tech-stack">
              <span className="tech-item">Vue.js</span>
              <span className="tech-item">Firebase</span>
              <span className="tech-item">WebSockets</span>
              <span className="tech-item">PWA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Habilidades Técnicas</h2>
        <ul className="skills-list">
          <li><strong>Frontend:</strong> React, Angular, Vue.js, TypeScript, Redux, CSS-in-JS</li>
        </ul>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <h2>Acerca de Mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Mi enfoque se centra en escribir código limpio, mantenible y bien documentado, siguiendo 
            las mejores prácticas y patrones de diseño. Creo firmemente en el desarrollo ágil y en la 
            mejora continua tanto a nivel técnico como personal.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>Email: ramon@ejemplo.com</p>
          <p>Ubicación: Ciudad de México, México</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/mi_app_react_rlg">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;