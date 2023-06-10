                      //Importation des scripts react
import React, { Component } from 'react'

                      //Importation css
//import '../css/connexion.css'

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            motDePasse: '',
        };
    }

    //Sous programme qui ecoute les modifications dans les champs input
    changementDonnee = (event) => {
        const {name , value} = event.target;
        this.setState ({[name]: value});
    }

    //Sous progamme qui envoie les données du formulaire
    envoieFormulaire = (event) => {
        event.preventDefault();
    }
    render () {
        return <fieldset>
                <form onSubmit={this.envoieFormulaire}>
                <p><b>Connexion</b></p>
                <input type="email" placeholder="Entrer votre adresse mail" name="email"  onChange={this.changementDonnee}  required></input>
                <input type="password" placeholder="Entrer votre mot de passe" name="motDePasse"   onChange={this.changementDonnee} required></input>
                <button id="btnConnex" name="valider" type="submit" onmouseover="btnBouge()">Se Connecter</button>
                </form>
            </fieldset>
    }
}

export default Connexion;