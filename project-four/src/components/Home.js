import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

const Home = () =>
{
  return (
    <div className='container'>        
        <div className="header">
            <Header />
        </div>
        <section>
            <Sidebar />
            <article>
                <h3>
                    Est culpa tempor aliqua exercitation adipisicing (Home)
                </h3>
                <p>
                    Nostrud labore id ea exercitation dolore enim. Nulla anim eu tempor voluptate reprehenderit pariatur 
                    velit id eu aute. Proident anim consectetur incididunt sit anim dolor nisi in eu ut. Officia irure 
                    nulla commodo consectetur. Ea tempor adipisicing eiusmod aute. Incididunt consequat ipsum consectetur 
                    ullamco ullamco Lorem reprehenderit qui qui dolor excepteur cupidatat eiusmod. Laboris do sint et ex cillum.
                </p>
                <p>
                    Magna Lorem exercitation amet ullamco cupidatat excepteur esse commodo laboris. Minim elit occaecat 
                    adipisicing nostrud deserunt laboris in dolore proident ipsum. Eu magna velit exercitation cupidatat. 
                    Excepteur ea anim deserunt veniam sunt magna commodo velit enim ut cillum elit sint magna.
                </p>
            </article>
        </section>        
        <div className="footer">
          <Footer />
        </div>
    </div>
  )
}

export default Home