import React from 'react'
import ReactDOM from 'react-dom/client'

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
  lifeMotto: string;
}

const cvData: CVData = {
  photo: "https://placehold.co/400x400?text=Ela%20JS",
  name: "Ela",
  lastName: "JS",
  position: "JavaScript Wizard",
  experience: [
    {year: 2022, description: "Discovered that 'undefined' is just a misunderstood mythical creature living in the console"},
    {year: 2023, description: "Found a bug that made the app play 'Never Gonna Give You Up' every time someone clicked 'Exit'"},
    {year: 2024, description: "Created a React component that communicates with parallel universes (still waiting for a response)"},
  ],
  education: [
    "Bachelor's Degree in Code Spells, School of Wizardry and Web Development",
    "Certified in Debugging with Yellow Rubber Ducks",
    "Master's Degree in Memes and Stack Overflow Searches",
  ],
  lifeMotto: "'Remember, every curly brace { you close } is a portal to a new adventure! 🚀🔮'"
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <header>
        <h1>CV - {cvData.name} {cvData.lastName}</h1>
      </header>
      <aside>
        <h2>Personal data</h2>
        <img src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`} />
        <p>{ cvData.name } { cvData.lastName }</p>
        <small>{ cvData.position }</small>
      </aside>
      <section>
        <h2>Experience</h2>
        <ul>
          { cvData.experience.map((experience) => (
            <li key={ experience.year }>
              <strong>{ experience.year }</strong> - { experience.description }
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          { cvData.education.map ((education, index) => (
            <li key={ index }>
              {education}
            </li>
          ))}
        </ul>
        <p><strong>Life motto:</strong> { cvData.lifeMotto }</p>
      </section>
    </main>
  </React.StrictMode>,
)
