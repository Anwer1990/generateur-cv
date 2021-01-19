import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';


export class Model1 extends Component {
    render() {
        return (
        <Paper  className="paper container" elevation={5}>    
            <div className="container">
                <div className="bloc-top">
                    <div className="row">
                        <div className="col-3 img-container">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" width="150" alt="avatar" />
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-4">Adresse</div>
                                <div className="col-4">date de naissance</div>
                                <div className="col-4">Telephone</div>
                                <div className="col-4">email</div>
                                <div className="col-4">Linkedin</div>
                            </div>
                            <div className="name-job col-12">
                                <h1 className="nom-prenom">
                                    Prénom Nom
                                </h1>
                                <h4 className="poste-recherche">
                                    Nom du job recherché
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloc-mid">
                    <div className="col-12 section">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">A PROPOS DE MOI</div>
                            <div className="col-9">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</div>
                        </div>
                    </div>
                    <div className="col-12 section">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">FORMATION</div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-8 titre-formation">DIPLOME XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                                    <div className="col-4 periode">20XX-20XX</div>
                                </div>
                                <div className="col-12">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 section">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">EXPERIENCE</div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-8 titre-formation">Développeur web</div>
                                    <div className="col-4 periode">Sept 20XX- Jan 20XX</div>
                                </div>
                                <div className="col-12">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloc-bottom">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3 title-bloc-mid">COMPETENCES</div>
                            <div className="col-9">
                                <ul className="competences row">
                                    <li className="col-4">
                                    <label >HTML5</label>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width':'70%'}}>
                                            70%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-4">
                                        <label >HTML5</label>
                                            <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width':'70%'}}>
                                            70%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-4">
                                        <label >HTML5</label>
                                            <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width':'70%'}}>
                                            70%
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-4">
                                        <label >HTML5</label>
                                            <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{'width':'70%'}}>
                                            70%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
        )
    }
}

export default Model1
