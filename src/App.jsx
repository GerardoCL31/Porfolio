import React from 'react'
import './App.css'

function App() {
  const repos = [
    {
      name: 'CoronaHUB',
      description: 'A full-stack restaurant management app with React frontend and Express backend.',
      icon: '/images/CoronaHUB.png',
      link: 'https://github.com/GerardoCL31/CoronaHUB',
    },
    {
      name: 'Are96WEB',
      description: 'A personal website focused on clean UI and modern frontend presentation.',
      icon: '/images/area96.png',
      link: 'https://github.com/GerardoCL31/Are96WEB',
    },
    {
      name: 'ArchTech Landing',
      description: 'A professional landing page with responsive structure and polished visuals.',
      icon: '/images/arch-tech.png',
      link: 'https://github.com/GerardoCL31/ArchTech_Landing',
    },
    {
      name: 'FOXHOUND',
      description: 'A fast web application with a more dynamic and cinematic visual direction.',
      icon: '/images/FoxHound.png',
      link: 'https://github.com/GerardoCL31/FOXHOUND',
    },
    {
      name: 'Fury of Thor',
      description: 'A Norse-themed interactive game with sound, modular code, and retro style.',
      icon: '/images/FuryOfThor.png',
      link: 'https://github.com/GerardoCL31/fury',
    },
    {
      name: 'Faceless',
      description: 'A cultural project built around identity, storytelling, and responsive cards.',
      icon: '/images/Faceless.png',
      link: 'https://github.com/GerardoCL31/Faceless',
    },
    {
      name: 'Toy Robot',
      description: 'An interactive robot simulation built as a frontend logic exercise.',
      icon: '/images/ToyRobot.png',
      link: 'https://github.com/GerardoCL31/toy-robot',
    },
    {
      name: '3EnRayasMaven',
      description: 'Tic-tac-toe built with Spring Boot, Docker, and deployment-ready structure.',
      icon: '/images/3enRaya.png',
      link: 'https://github.com/GerardoCL31/3EnRayasMaven',
    },
    {
      name: 'To-Do',
      description: 'A lightweight productivity app using HTML, CSS, JavaScript, and local storage.',
      icon: '/images//ToDo.png',
      link: 'https://github.com/GerardoCL31/To-Do',
    },
    {
      name: 'Area96 Halloween',
      description: 'A seasonal interactive web experience with atmosphere and playful motion.',
      icon: '/images/Area96Hallowen.png',
      link: 'https://github.com/GerardoCL31/Area96Hallowen',
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
                <a
                  href={repo.link}
                  className="movie-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
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
