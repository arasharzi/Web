import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
        <div className="header">
            <Header />
        </div>

        <section>
            <Sidebar />
            <Body />
        </section>

        <div className="footer">
          <Footer />
        </div>
    </div> 
  );
}
export default App;
