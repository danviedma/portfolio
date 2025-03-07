import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage'
import AboutPages from './pages/AboutPages'
import './assets/css/fonts.css';
import ResumePages from './pages/ResumePages'
import ProjectsPage from './pages/ProjectsPages'
import ContactPages from './pages/ContactPages'
import Footer from '../src/components/Footer'
//import './App.css'

function App() {

  return (
    <>
      <HomePage />
      <AboutPages />
      <ResumePages />
      <ProjectsPage />
      <ContactPages />
      <Footer />
    </>
  )
}

export default App
