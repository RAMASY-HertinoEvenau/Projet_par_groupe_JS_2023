                      //Importation des scripts react
import React from 'react'
import {Link} from 'react-router-dom'

                      //Importation des css
import '../css/navigation.css'
import '../css/@media/navigation@media.css'

export default function Navigation() {
  return (
    <nav>
      <Link to="/connexion">
        <button className='bouton_Navigation connexion'>Connexion</button>
      </Link>
    </nav>
  )
}
