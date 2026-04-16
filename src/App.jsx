import React from 'react'
import './App.css'

function App() {
  const stats = [
    { value: '10+', label: 'published projects' },
    { value: 'Full-stack', label: 'React, Express, and Spring Boot' },
    { value: 'Live demos', label: 'deployed and visitable work' },
  ]

  const repos = [
    {
      name: 'CoronaHUB',
      description: 'Restaurant management platform with React frontend, Express backend, and live production use.',
      stack: ['React', 'Express', 'MongoDB'],
      focus: 'Production app',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814533/CoronaHUB_kiz565.png',
      link: 'https://github.com/GerardoCL31/CoronaHUB',
      demoLink: 'https://barcorona.es',
    },
    {
      name: 'Area96WEB',
      description: 'Personal website for an airsoft community with clean UI, media sections, and responsive layouts.',
      stack: ['React', 'UI', 'Responsive'],
      focus: 'Airsoft community',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/area96_jdgv8h.png',
      link: 'https://github.com/GerardoCL31/Area96WEB',
      demoLink: 'https://area96.es',
    },
    {
      name: 'ArchTech Landing',
      description: 'Professional landing page with responsive sections, clear hierarchy, and polished visual structure.',
      stack: ['Landing', 'CSS', 'Vite'],
      focus: 'Commercial landing',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/arch-tech_fn5rwz.png',
      link: 'https://github.com/GerardoCL31/ArchTech_Landing',
      demoLink: 'https://archtech.gerardocorona.io/',
    },
    {
      name: 'FOXHOUND',
      description: 'Fast web application with a dynamic layout, cinematic direction, and deployed frontend experience.',
      stack: ['Frontend', 'Motion', 'Deploy'],
      focus: 'Experiencia dinamica',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814533/FoxHound_n0acvo.png',
      link: 'https://github.com/GerardoCL31/FOXHOUND',
      demoLink: 'http://foxhound.gerardocorona.io/',
    },
    {
      name: 'Fury of Thor',
      description: 'Norse-themed interactive game with sound, modular JavaScript, and retro arcade style.',
      stack: ['Game', 'JavaScript', 'Audio'],
      focus: 'Interaction',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/FuryOfThor_ndufjm.png',
      link: 'https://github.com/GerardoCL31/fury',
      demoLink: 'https://fury.gerardocorona.io/',
    },
    {
      name: 'Faceless',
      description: 'Cultural web project built around identity, storytelling, and responsive content cards.',
      stack: ['Storytelling', 'CSS', 'Responsive'],
      focus: 'Cultural content',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814533/Faceless_igolqz.png',
      link: 'https://github.com/GerardoCL31/Faceless',
      demoLink: 'https://faceless.gerardocorona.io',
    },
    {
      name: 'Toy Robot',
      description: 'Interactive robot simulation focused on movement rules, state control, and frontend logic.',
      stack: ['Logic', 'React', 'Simulation'],
      focus: 'Rules and state',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814531/ToyRobot_ivk9qc.png',
      link: 'https://github.com/GerardoCL31/toy-robot',
      demoLink: 'https://toy-robot-rust.vercel.app/',
    },
    {
      name: '3EnRayasMaven',
      description: 'Tic-tac-toe application built with Spring Boot, Docker, and deployment-ready backend structure.',
      stack: ['Spring Boot', 'Docker', 'Java'],
      focus: 'Deployable backend',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814531/3enRaya_rxmpty.png',
      link: 'https://github.com/GerardoCL31/3EnRayasMaven',
      demoLink: 'https://actividadrafa.gerardocorona.io',
    },
    {
      name: 'To-Do',
      description: 'Lightweight productivity app using HTML, CSS, JavaScript, and local browser storage.',
      stack: ['HTML', 'CSS', 'LocalStorage'],
      focus: 'Frontend base',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814531/ToDo_ioowf4.png',
      link: 'https://github.com/GerardoCL31/To-Do',
      demoLink: 'https://todo-two-inky.vercel.app/',
    },
    {
      name: 'Area96 Halloween',
      description: 'Seasonal interactive web experience with atmospheric visuals, playful motion, and live deployment.',
      stack: ['Seasonal', 'Motion', 'Vercel'],
      focus: 'Landing',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/Area96Hallowen_erclto.png',
      link: 'https://github.com/GerardoCL31/Area96Hallowen',
      demoLink: 'https://apocalisis-nuclear-gerardocl31-gerardos-projects-d26175bb.vercel.app/',
    },
  ]

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-frame" aria-hidden="true">
          <span className="hero-line hero-line-one" />
          <span className="hero-line hero-line-two" />
          <span className="hero-line hero-line-three" />
        </div>
        <p className="hero-kicker">Gerardo Corona Lopez</p>
        <h1 className="hero-title">PORTFOLIO</h1>
        <p className="hero-subtitle">
          Frontend, full-stack, and interactive experiences with a visual focus.
        </p>
        <a
          href="http://cv.gerardocorona.io/"
          className="hero-cv-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
        <div className="hero-stats" aria-label="Portfolio highlights">
          {stats.map((item) => (
            <div className="hero-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="content">
        <section className="projects-intro">
          <p className="section-kicker">Selected Work</p>
          <h2>Projects with context, deployment, and technical detail</h2>
          <p>
            Frontend, full-stack, and interactive projects built by Gerardo
            Corona Lopez.
          </p>
        </section>

        <section className="featured-project" aria-label="Featured project">
          <div className="featured-copy">
            <p className="section-kicker">Featured</p>
            <h2>CoronaHUB</h2>
            <p>
              Restaurant management with a React frontend, Express backend,
              and a real production demo.
            </p>
          </div>
          <a
            className="featured-link"
            href="https://barcorona.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit demo
          </a>
        </section>

        <section className="billboard">
          {repos.map((repo, index) => (
            <article
              key={repo.name}
              className="movie-card"
              style={{ '--card-index': index + 1 }}
            >
              <div className="movie-poster">
                <img src={repo.icon} alt={repo.name} />
                <span className="movie-focus">{repo.focus}</span>
              </div>
              <div className="movie-info">
                <p className="movie-number">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="movie-title">{repo.name}</h3>
                <p className="movie-description">{repo.description}</p>
                <div className="movie-stack" aria-label={`${repo.name} stack`}>
                  {repo.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="movie-actions">
                  <a
                    href={repo.link}
                    className="movie-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  {repo.demoLink ? (
                    <a
                      href={repo.demoLink}
                      className="movie-link movie-link-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Gerardo Corona Lopez (c) 2026</p>
      </footer>
    </div>
  )
}

export default App
