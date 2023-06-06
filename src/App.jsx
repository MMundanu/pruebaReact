import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectLayouts } from './layouts/ProjectLayouts';
import { Index } from './element';
import { ProjectProvider } from './context/ProjectProvider';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
     <ProjectProvider>
      <Routes>
        <Route  path='/' element={<ProjectLayouts />}>
        <Route index element={ <Index/>} />
        </Route>
      </Routes>

      </ProjectProvider>
    </BrowserRouter>
  )
}

export default App
