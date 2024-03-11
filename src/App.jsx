
import { Link,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Show from './components/Show'
import Services from './components/Services'

function App() {
  

  return (
    <div className='overflow-hidden'>


    <nav className='flex gap-16 p-3 justify-center items-center h-14 shadow-lg shadow-slate-300 '>

      <Link to="/" className='hover:border-b-2 border-zinc-950'>Home</Link>
      <Link to="/show" className='hover:border-b-2 border-zinc-950'>Show</Link>
      <Link to="/services" className='hover:border-b-2 border-zinc-950'>Services</Link>
    </nav>


    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/show" element={<Show/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
    </Routes>

    
    </div>
  )
}

export default App