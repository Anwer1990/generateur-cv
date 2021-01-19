import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import '../../Model2.css';

export class Model2 extends Component {
    render() {
        return (
            <Paper  className="paper container" elevation={5}>
                <div  className="container">
                    <div className="row">
                        <div className="col-3 left-bloc">
                            <div className="avatar-countainer">
                                <img src="img_avatar.png" width="150" className="avatar" alt="avatar" />
                            </div>
                            <div className="bloc-resume">
                                <h3>A PROPOS DE MOI</h3>
                                <p className="resume">
                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                                </p>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="nom-job-container">
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
            </Paper>
        )
    }
}

export default Model2
