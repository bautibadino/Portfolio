
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage/HomePage'
import { AboutPage } from '../AboutPage/AboutPage'
import { ContactPage } from '../ContactPage/ContactPage'
import { ProjectsPage } from '../ProjectsPage/ProjectsPage'

export const RouterApp = () => {
  return (
    <>
    <Routes>
        <Route  path="/Home" element={<HomePage/>} />
        <Route  path= "/SobreMi" element={<AboutPage/>} />
        <Route  path= "/Proyectos" element={<ProjectsPage/>} />
        <Route  path="/Contacto" element={<ContactPage/>}/>
        <Route path="*" element={<HomePage/>} />
    </Routes>
    </>
  )
}
