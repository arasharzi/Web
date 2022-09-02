import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

const Contact = () => 
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
                    Aliqua ullamco commodo nulla laboris sunt. (Contact)
                </h3>
                <p>
                    Adipisicing dolore sit reprehenderit occaecat est. Consectetur nisi ut velit nostrud dolore anim labore
                    nulla nulla. Ullamco eu elit sunt excepteur id tempor fugiat eiusmod proident culpa aliquip ipsum commodo 
                    laboris. Irure Lorem irure cillum elit magna veniam adipisicing ad consectetur ullamco in et aliqua tempor.
                </p>
                <p>
                    Consectetur laboris aute non consequat duis do irure adipisicing ut. Officia aliquip veniam ex dolore ex 
                    cupidatat aliquip incididunt officia sunt dolor in tempor. Incididunt et Lorem irure ea sunt ipsum aliqua 
                    incididunt labore ex deserunt ipsum.
                </p>
            </article>
        </section>        
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default Contact