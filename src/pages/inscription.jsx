import './css/inscription.css'
import React, { Component } from 'react'

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomPrenom: '',
            email: '',
            numeroTel: '',
            motDePasse: '',
            motDePasse2: '',
            classe: '',
            numeroClasse: '',
            matricule: ''
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
        //Retourne 1 si tous les données sont correcte
        const n = this.verifieDonnee();
        if(n === 1) {
            console.log(this.state);
        }
    }

    //Sous programme qui valide que tous les champs sont bien correcte
    verifieDonnee () {
        //Verification que les deux mot de passe sont les mêmes
        if(this.state.motDePasse !== this.state.motDePasse2) {
            alert("Les deux mot de passe entrer sont differents");
            return 0;
        }
        return 1;
    }

    render () {
        return <fieldset>
                <form onSubmit={this.envoieFormulaire}>
                    <h1>Inscription</h1>
                    <input type='text' id='nom' name='nomPrenom' onChange={this.changementDonnee}  placeholder=' ' required></input>
                    <label>Nom et Prénom</label>
                    <input type='email' id='email' name='email' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label>E-mail</label>
                    <input type='number' id='numeroTel' name='numeroTel' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label >Numéro de téléphone</label>
                    <input type='password' id='motdepasse' name='motDePasse' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label>Mot de passe</label>
                    <input type='text' id='classe' name='classe' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label id='label'>Classe</label>
                    <input type='password' id='motdepasse2' name='motDePasse2' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label>Confirmer mot de passe</label>
                    <input type='number' id='numeroClasse' name='numeroClasse' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label id='label'>Numéro classe</label>
                    <input type='number' id='matricule' name='matricule' onChange={this.changementDonnee} placeholder=' ' required></input>
                    <label>Numéro de matricule</label>
                    <button type='submit'>S'inscrire</button>
                    <p id='phraseCnx'>Vous avez déjà un compte? <a href='test' id='lienCnx'>Connexion</a></p>
                </form>
            </fieldset>
    }
}

export default Inscription;