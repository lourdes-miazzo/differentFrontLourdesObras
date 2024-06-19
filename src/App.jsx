

import './App.css'
import { BrowserRouter,  Route, Routes} from 'react-router-dom'

import Home from './pages/home/Home'
import Bio from './pages/bio/Bio'
import Obras from './pages/obras/Obras'
import Textos from './pages/textos/Textos'
import Videos from "./pages/videos/Videos"
import Procesos from "./pages/procesos/Procesos"
import TextoInd from './pages/textoInd/TextoInd.jsx'
import ObraInd from './pages/obraInd/ObraInd.jsx'
import ProcessIndiv from './pages/processIndiv/ProcessIndiv.jsx'
import Error from './pages/error/Error.jsx'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/bio' element={<Bio/>}></Route>
          <Route exact path='/obras' element={<Obras/>}></Route>
          <Route exact path='/obras/:id' element={<ObraInd/>}></Route>
          <Route exact path='/textos' element={<Textos/>}></Route>
          <Route path="/textos/:id" element={<TextoInd/>}/>
          <Route exact path='/videos' element={<Videos/>}></Route>
          <Route exact path='/procesos' element={<Procesos/>}></Route>
          <Route path='/procesos/:id' element={<ProcessIndiv/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
