import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

const Page4 = () => 
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
                    Officia occaecat consequat culpa officia amet. (Page 4)
                </h3>
                <p>
                    Nulla laborum fugiat est et. Fugiat fugiat deserunt ea consequat excepteur officia proident dolore. Laborum 
                    do laborum dolor enim. Velit velit consectetur nostrud consequat Lorem mollit nulla culpa enim ipsum 
                    consectetur id sint.
                    Mollit veniam sit officia ut dolor est cupidatat irure dolor. Laborum officia nisi sunt qui eu nulla nostrud 
                    proident dolore. Id eu ex adipisicing elit qui reprehenderit velit amet nisi est cupidatat consequat sint. 
                    Ipsum id esse excepteur sunt irure magna minim duis magna et ex velit tempor esse. Ipsum ullamco elit ex Lorem.
                </p>
                <p>
                    Ea irure tempor voluptate aliquip pariatur deserunt culpa ut do adipisicing ex elit. Do laboris ullamco dolor 
                    enim voluptate ad sint. Mollit irure incididunt esse nisi anim occaecat elit. Voluptate voluptate veniam sint 
                    magna est quis aute ut nulla eu ad ipsum nisi. Non cupidatat veniam occaecat quis nisi. Eu veniam ut cillum ipsum 
                    id quis esse id nisi cillum esse commodo reprehenderit. Culpa sit nostrud nisi duis qui eu nostrud.
                </p>
            </article>
        </section>        
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default Page4