import React, { Component } from 'react';
import  './Model1.css';
import { connect } from 'react-redux';


 class Model1 extends Component {
    render() {
        console.log("coordonnees",this.props.coordonnees)
        return (
           
            <div className="container">
                <div className="bloc-top">
                    <div className="row">
                        <div className="col-3 img-container-m1">
                        <img src="img_avatar.png" className="img-rounded" width="150" alt="avatar" />
                        </div>
                        <div className="col-9">
                            <div className="row coordonnees">
                                <div className="col-4"><i class="fas fa-map-marker-alt"></i> {this.props.coordonnees.adresse}</div>
                                <div className="col-4"><i class="fas fa-birthday-cake"></i> {this.props.coordonnees.date_naissance}</div>
                                <div className="col-4"><i class="fas fa-phone"></i> {this.props.coordonnees.telephone}</div>
                                <div className="col-4"><i class="fas fa-envelope"></i> {this.props.coordonnees.email}</div>
                                <div className="col-4"><i class="fab fa-linkedin"></i> {this.props.coordonnees.linkedin}</div>
                            </div>
                            <div className="name-job col-12">
                                <h1 className="nom-prenom-m1">
                                    {this.props.coordonnees.nom_prenom}
                                </h1>
                                <h4 className="poste-recherche-m1">
                                    {this.props.coordonnees.poste}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloc-mid">
                    <div className="col-12 section">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">A PROPOS DE MOI</div>
                            <div className="col-9">{this.props.coordonnees.profil}</div>
                        </div>
                    </div>
                    <div className="col-12 section">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">FORMATION</div>
                            
                            <div className="col-9" >
                            {this.props.formations.map((row, index)=>(
                                <div className="row" key={index}>
                                    <div className="col-8 titre-formation-m1">{row.titre}</div>
                                    <div className="col-4 periode-m1">{row.annee_promotion}</div>
                                    <div className="col-12">{row.etablissement}</div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 section">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">EXPERIENCE</div>
                            <div className="col-9">
                            {this.props.experiences.map((row,index)=>(
                                <div className="row" key={index}>
                                    <div className="col-8 titre-formation-m1">{row.poste} - {row.employeur}</div>
                                    <div className="col-4 periode-m1">{row.date_debut}-{row.date_fin}</div>
                                    <div className="col-12">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloc-bottom">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">COMPETENCES</div>
                            <div className="col-9">
                                <ul className="competences-m1 row">
                                {this.props.competences.map((row,index)=>(
                                    <li className="col-6">
                                    <label >{row.nom}</label>
                                    {(() => {
                                     switch (row.selectedValue) {
                                        case 'Debutant(e)':
                                            return (
                                                <div class="progress">
                                                    <div class="progress-bar-m1" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{'width':'30%','textAlign':'center','color':'#fff'}}>
                                                    30%
                                                    </div>
                                                </div>
                                            );
                                            break;
                                        case 'Intermédiaire':
                                            return (
                                                <div class="progress">
                                                    <div class="progress-bar-m1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'width':'50%','textAlign':'center','color':'#fff'}}>
                                                    50%
                                                    </div>
                                                </div>
                                            );
                                            break;
                                        case 'Bien':
                                            return (
                                                <div class="progress">
                                                    <div class="progress-bar-m1" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width':'70%','textAlign':'center','color':'#fff'}}>
                                                    70%
                                                    </div>
                                                </div>
                                            );
                                            break;
                                        case 'Trés bien':
                                        return (
                                            <div class="progress">
                                                <div class="progress-bar-m1" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{'width':'85%','textAlign':'center','color':'#fff'}}>
                                                85%
                                                </div>
                                            </div>
                                        );
                                        break;
                                        case 'Excellent':
                                        return (
                                            <div class="progress">
                                                <div class="progress-bar-m1" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'width':'95%','textAlign':'center','color':'#fff'}}>
                                                95%
                                                </div>
                                            </div>
                                        );
                                        break;
                                        default:
                                            break;
                                    }
                                })()}
                                    </li>                                    
                                   ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

function mapStateToProps(state)
{
    console.log("state redux",state);
    return{coordonnees : state.coordonnees,formations:state.formations,experiences:state.experiences,competences:state.competences}
}
export default connect(mapStateToProps,null)(Model1)
