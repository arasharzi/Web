import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home />}></Route>
      <Route path = "page-3" element = {<Page3 />}></Route>
      <Route path = "page-4" element = {<Page4 />}></Route>
      <Route path = "contact" element = {<Contact />}></Route>
    </Routes>
  );
}

export default App;
