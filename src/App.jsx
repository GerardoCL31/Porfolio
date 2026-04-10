import React from 'react'
import './App.css'

function App() {
  const repos = [
    {
      name: 'CoronaHUB',
      description: 'A full-stack restaurant management app with React frontend and Express backend.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814533/CoronaHUB_kiz565.png',
      link: 'https://github.com/GerardoCL31/CoronaHUB',
      demoLink: 'https://barcorona.es',
    },
    {
      name: 'Area96WEB',
      description: 'A personal website focused on clean UI and modern frontend presentation.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/area96_jdgv8h.png',
      link: 'https://github.com/GerardoCL31/Area96WEB',
      demoLink: 'https://area96.es',
    },
    {
      name: 'ArchTech Landing',
      description: 'A professional landing page with responsive structure and polished visuals.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/arch-tech_fn5rwz.png',
      link: 'https://github.com/GerardoCL31/ArchTech_Landing',
      demoLink: 'https://archtech.gerardocorona.io/',
    },
    {
      name: 'FOXHOUND',
      description: 'A fast web application with a more dynamic and cinematic visual direction.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814533/FoxHound_n0acvo.png',
      link: 'https://github.com/GerardoCL31/FOXHOUND',
      demoLink: 'http://foxhound.gerardocorona.io/',
    },
    {
      name: 'Fury of Thor',
      description: 'A Norse-themed interactive game with sound, modular code, and retro style.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/FuryOfThor_ndufjm.png',
      link: 'https://github.com/GerardoCL31/fury',
    },
    {
      name: 'Faceless',
      description: 'A cultural project built around identity, storytelling, and responsive cards.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814533/Faceless_igolqz.png',
      link: 'https://github.com/GerardoCL31/Faceless',
    },
    {
      name: 'Toy Robot',
      description: 'An interactive robot simulation built as a frontend logic exercise.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814531/ToyRobot_ivk9qc.png',
      link: 'https://github.com/GerardoCL31/toy-robot',
      demoLink: 'https://toy-robot-rust.vercel.app/',
    },
    {
      name: '3EnRayasMaven',
      description: 'Tic-tac-toe built with Spring Boot, Docker, and deployment-ready structure.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814531/3enRaya_rxmpty.png',
      link: 'https://github.com/GerardoCL31/3EnRayasMaven',
      demoLink: 'https://actividadrafa.gerardocorona.io',
    },
    {
      name: 'To-Do',
      description: 'A lightweight productivity app using HTML, CSS, JavaScript, and local storage.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814531/ToDo_ioowf4.png',
      link: 'https://github.com/GerardoCL31/To-Do',
      demoLink: 'https://todo-two-inky.vercel.app/',
    },
    {
      name: 'Area96 Halloween',
      description: 'A seasonal interactive web experience with atmosphere and playful motion.',
      icon: 'https://res.cloudinary.com/djuisin8z/image/upload/v1775814532/Area96Hallowen_erclto.png',
      link: 'https://github.com/GerardoCL31/Area96Hallowen',
      demoLink: 'https://apocalisis-nuclear-gerardocl31-gerardos-projects-d26175bb.vercel.app/',
    },
  ]

  return (
    <div className="app">
      <header className="hero">
        <p className="hero-kicker">Gerardo Corona López</p>
        <h1 className="hero-title">PORTFOLIO</h1>
        <p className="hero-subtitle">Projects</p>
      </header>

      <main className="content">
        <section className="projects-intro">
          <h2>Selected Work</h2>
          <p>
            Frontend, full-stack, and interactive projects built by Gerardo
            Corona López.
          </p>
        </section>

        <section className="billboard">
          {repos.map((repo) => (
            <article key={repo.name} className="movie-card">
              <div className="movie-poster">
                <img src={repo.icon} alt={repo.name} />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{repo.name}</h3>
                <p className="movie-description">{repo.description}</p>
                <div className="movie-actions">
                  <a
                    href={repo.link}
                    className="movie-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>

                  {repo.demoLink ? (
                    <a
                      href={repo.demoLink}
                      className="movie-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEMO-LIVE
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Gerardo Corona López © 2026</p>
      </footer>
    </div>
  )
}

export default App
