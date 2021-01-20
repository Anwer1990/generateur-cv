import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Model2.css';
import { connect } from 'react-redux';

export class Model2 extends Component {
    render() {
        const { nom_prenom,poste,date_naissance,adresse,email,linkedin,telephone,profil } = this.props.coordonnees
        return (
            <Paper  className="paper container" elevation={5}>
                <div  className="container">
                    <div className="row">
                        <div className="col-3 left-bloc">
                            <div className="avatar-countainer-m2">
                                <img src="img_avatar.png" width="150" className="avatar-m2" alt="avatar" />
                            </div>
                            <div className="bloc-resume-m2">
                                <h3>A PROPOS DE MOI</h3>
                                <p className="resume-m2">
                                    {profil}
                                </p>
                            </div>
                            <div className="bloc-contact-m2">
                                <h3>CONTACT</h3>
                                <ul className="coordonnees-m2">
                                    <li><i class="fas fa-map-marker-alt"></i> {adresse}</li>
                                    <li><i class="fas fa-birthday-cake"></i> {date_naissance}</li>
                                    <li><i class="fas fa-phone"></i> {telephone}</li>
                                    <li><i class="fas fa-envelope"></i> {email}</li>
                                    <li><i class="fab fa-linkedin"></i>{linkedin}</li>
                                </ul>
                            </div>
                            <div className="bloc-competences-m2">

                            </div>
                        </div>
                        <div className="col-9 main-bloc-m2">
                            <div className="nom-job-container-m2">
                                <h1 className="nom-prenom-m2">
                                   {nom_prenom}
                                </h1>
                                <h4 className="poste-recherche-m2">
                                    {poste}
                                </h4>
                            </div>
                            <div className="bloc-formations-m2">
                                <h3>FORMATIONS</h3>
                                {this.props.formations.map((row, index)=>(
                                <div className="row formation" key={index}>
                                    <div className="col-2 text-center periode-m2">{row.annee_promotion}</div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-12 titre-formation-m2">{row.titre}</div>
                                            <div className="col-12 etablissement-m2">{row.etablissement}</div>
                                        </div>
                                    </div>
                                </div>))}
                            </div>
                            <div className="bloc-experiences-m2">
                                <h3>EXPERIENCES PROFESSIONNELLES</h3>
                                {this.props.experiences.map((row,index)=>(
                                <div className="row experience" key={index}>
                                    <div className="col-3 text-center periode-m2">{row.date_debut} - {row.date_fin}</div>
                                    <div className="col-9">
                                        <div className="row">
                                            <div className="col-12 nom-entreprise-m2">{row.employeur}</div>
                                            <div className="col-12 poste-occupe-m2">{row.poste}</div>
                                            <p className="col-12">
                                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        )
    }
}

function mapStateToProps(state)
{
    return{coordonnees : state.coordonnees,formations:state.formations,experiences:state.experiences,competences:state.competences}
}
export default connect(mapStateToProps,null)(Model2)
