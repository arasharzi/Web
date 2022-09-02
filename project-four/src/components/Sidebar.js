import { Link } from 'react-router-dom'

const Sidebar = () => 
{
  return (
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/contact'>Contact</Link></li>
        <li><Link to = '/page-3'>Page 3</Link></li>
        <li><Link to = '/page-4'>Page 4</Link></li>
      </ul>
    </nav>
  )
}

export default Sidebar