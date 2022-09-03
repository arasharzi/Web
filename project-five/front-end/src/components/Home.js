import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CharacterService from '../services/CharacterService'


class Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {characters:[]}
    }

    componentDidMount()
    {
        CharacterService.getCharacters().then((Response) =>
        {
            this.setState({characters: Response.data})
        });
    }

    componentDidCatch(error, info)
    {
        this.setState({ hasError: true});
    }

    render()
    {
        return (
        <div className='container'>        
            <div className="header">
                <Header />
            </div>
            <section>
                <article>
                    <h2>
                        Characters
                    </h2>                    
                    <div>
                        <table className = "table table-striped">
                            <thead>
                                <tr>
                                    <td> Character Id</td>
                                    <td> Character Name</td>
                                    <td> Character Class</td>
                                    <td> Character Level</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.characters.map
                                (
                                    characters => 
                                    <tr key = {characters.id}>
                                        <td> {characters.id}</td>   
                                        <td> {characters.name}</td>   
                                        <td> {characters.player_class}</td>   
                                        <td> {characters.level}</td>   
                                    </tr>
                                )
                            }
                            </tbody>  
                        </table>
                    </div>                    
                    <p>
                    </p>
                </article>
            </section>        
            <div className="footer">
            <Footer />
            </div>
        </div>
        )
    }
}

export default Home