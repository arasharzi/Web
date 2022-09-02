import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

const Page3 = () => 
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
                    Elit proident labore aliqua commodo tempor proident. (Page 3)
                </h3>
                <p>
                    Cupidatat ex ipsum nulla cupidatat sit commodo occaecat dolor esse. Quis officia sint eu veniam. Magna 
                    tempor minim est laboris et eiusmod cillum esse reprehenderit et culpa officia mollit. Minim exercitation 
                    consequat non aute est minim Lorem officia deserunt. Sunt enim elit elit culpa adipisicing fugiat sint 
                    esse quis officia aliquip aute. Ipsum id quis irure nostrud incididunt deserunt ut exercitation do et 
                    deserunt nostrud. Aliqua nulla exercitation sunt incididunt commodo tempor ullamco.
                </p>
                <p>
                    Voluptate do voluptate eiusmod occaecat cillum irure sit. Enim nostrud ad sint do esse do velit dolore sit 
                    labore Lorem laboris laboris non. Laborum ad proident laborum et voluptate do occaecat ut eiusmod dolor 
                    eiusmod dolor id.
                </p>
            </article>
        </section>        
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default Page3