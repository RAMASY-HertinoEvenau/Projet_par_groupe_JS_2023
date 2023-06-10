                      //Importation des scripts react
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

                      //Importation des css
import '../css/inscription.css'
import '../css/@media/inscription@media.css'
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
        return <fieldset className='fieldset_Inscription' onLoad={this.affichage}>
                <form onSubmit={this.envoieFormulaire}>
                    <h1 className='h1_Inscription'>Inscription</h1>
                    <input type='text' className='input_Inscription'name='nomPrenom' onChange={this.changementDonnee}  placeholder=' ' required/>
                    <label className='label_Inscription'>Nom et Prénom</label>
                    <input type='email' className='input_Inscription' name='email' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription'>E-mail</label>
                    <input type='number' className='input_Inscription' name='numeroTel' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription'>Numéro de téléphone</label>
                    <input type='password' className='input_Inscription motdepasse' name='motDePasse' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription label_Inscription_motdepasse'>Mot de passe</label>
                    <input type='password' className='input_Inscription motdepasse2' name='motDePasse2' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription label_Inscription_motdepasse'>Confirmer mot de passe</label>
                    <input type='text' className='input_Inscription classe' name='classe' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription label_Inscription_classe'>Classe</label>
                    <input type='number' className='input_Inscription numeroClasse' name='numeroClasse' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription label_Inscription_classe'>Numéro classe</label>
                    <input type='number' className='input_Inscription' name='matricule' onChange={this.changementDonnee} placeholder=' ' required/>
                    <label className='label_Inscription'>Numéro de matricule</label>
                    <button type='submit' className='button_Inscription'>S'inscrire</button>
                    <p className='phraseCnx'>Vous avez déjà un compte? <Link to="/connexion" className='lienCnx'>Connexion</Link></p>
                </form>
            </fieldset>
    }
}

export default Inscription;