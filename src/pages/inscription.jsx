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
            matricule: '',
        };
        this.changementDonnee = this.changementDonnee.bind(this);
        this.envoieFormulaire = this.envoieFormulaire.bind(this);
    }

    //Sous programme qui ecoute les modifications dans les champs input
    changementDonnee = (event) => {
        const {name , value} = event.target;
        this.setState ({[name]: value});
    }

    //Sous progamme qui envoie les données du formulaire
    envoieFormulaire = (event) => {
        event.preventDefault();
        let n = 0;
        if(this.state.nom !== Number) {
            alert('Votre nom ne doit pas contenir un chiffre');
        }
        else if(this.state.numeroTel < 300000000 || this.state.numeroTel > 399999999) {
            alert('Veuillez entrer un nméro de téléphone valide');
        }
        else if(this.state.motDePasse !== this.state.motDePasse2) {
            alert('Le mot de passe et le mot de passe de confirmation sont différents');
        }
        else if(this.state.matricule > 999999) {
            alert('Votre numéro de matricule est invalide');
        }
        else {
            n = 1;
        }
        if(n === 0) {
            return false;
        }
        alert('Formulaire envoyé');
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
        //Rendue à l'affichage
        return <fieldset className='fieldset_Inscription' onLoad={this.affichage}>
                <form onSubmit={this.envoieFormulaire} autoComplete="false">
                    <h1 className='h1_Inscription'>Inscription</h1>
                    <input
                        required 
                        type='text'
                        placeholder=' '
                        name='nomPrenom'
                        className='input_Inscription nom'
                        onChange={this.changementDonnee}
                    />
                    <label className='label_Inscription'>Nom et Prénom</label>
                    <input
                        required 
                        type='email'
                        name='email'
                        placeholder=' '
                        className='input_Inscription'
                        onChange={this.changementDonnee}
                    />
                    <label className='label_Inscription'>E-mail</label>
                    <input
                        required 
                        type='number'
                        placeholder=' '
                        name='numeroTel'
                        className='input_Inscription'
                        onChange={this.changementDonnee}
                    />
                    <label className='label_Inscription'>Numéro de téléphone</label>
                    <input
                        required 
                        type='password'
                        placeholder=' '
                        name='motDePasse'
                        onChange={this.changementDonnee}
                        className='input_Inscription motdepasse'
                    />
                    <label className='label_Inscription label_Inscription_motdepasse'>Mot de passe</label>
                    <input
                        required
                        type='password'
                        placeholder=' '
                        name='motDePasse2'
                        onChange={this.changementDonnee}
                        className='input_Inscription motdepasse2'
                    />
                    <label className='label_Inscription label_Inscription_motdepasse'>Confirmer mot de passe</label>
                    <input
                        required
                        type='text'
                        name='classe'
                        placeholder=' '
                        onChange={this.changementDonnee}
                        className='input_Inscription classe'
                    />
                    <label className='label_Inscription label_Inscription_classe'>Classe</label>
                    <input
                        required
                        type='number'
                        placeholder=' '
                        name='numeroClasse'
                        onChange={this.changementDonnee}
                        className='input_Inscription numeroClasse'
                    />
                    <label className='label_Inscription label_Inscription_classe'>Numéro classe</label>
                    <input
                        required
                        type='number'
                        placeholder=' '
                        name='matricule'
                        className='input_Inscription'
                        onChange={this.changementDonnee}
                    />
                    <label className='label_Inscription'>Numéro de matricule</label>
                    <button type='submit' className='button_Inscription'>S'inscrire</button>
                    <p className='phraseCnx'>Vous avez déjà un compte? <Link to="/connexion" className='lienCnx'>Connexion</Link></p>
                </form>
            </fieldset>
    }
}

export default Inscription;