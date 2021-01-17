import React, { Component } from 'react'
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Stepper from '../Stepper';


class Apercu extends Component {
    state = {
        coordonnees:[],
        formations :[],
        experiences:[],
        activeStep:5
    }
    componentWillReceiveProps(nextProps)
    {
        console.log("nextProps",this.props)
        // this.setState({
        //     coordonnees: nextProps.coordonnees,
        //     formations : nextProps.formations,
        //     experiences : nextProps.experiences            
        // })
    }
    handleDownload = () =>
    {
        const printableElements = document.getElementById('doc_pdf').innerHTML;
        
        document.body.innerHTML = printableElements;
        window.print();
    }
  
    render() {
        console.log("competences",this.props.competences);
        const { nom_prenom,poste,date_naissance,adresse,email,linkedin,telephone,profil } = this.props.coordonnees
        
        return (
            <div className="container">
                <Stepper />
                
                    <Paper id="doc_pdf" className="paper row" elevation={5}>
                    <div className="col-lg-4 left-container ">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" width="150" alt="avatar" />
                        
                        <h3>{nom_prenom}</h3>
                        <h6>{poste}</h6>
                        <ul className="liste_coordonnees">
                            <li><i class="fas fa-birthday-cake"></i> {date_naissance}</li>
                            <li><i class="fas fa-map-marker-alt"></i> {adresse}</li>
                            <li><i class="fas fa-phone"></i> {telephone}</li>
                            <li><i class="fas fa-envelope"></i> {email}</li>
                            <li><i class="fab fa-linkedin"></i> {linkedin}</li>
                        </ul>
                        <h4 className="text-left">Compétences</h4>
                        <ul>
                        {this.props.competences.map((row,index)=>(
                            <li key={index} className="row"><span className="col-lg-6">{row.nom}</span> <span className="col-lg-6">
                                {(() => {
                                     switch (row.selectedValue) {
                                        case 'Debutant(e)':
                                            return (
                                                <div>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            );
                                            break;
                                        case 'Intermédiaire':
                                            return (
                                                <div>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            );
                                            break;
                                        case 'Bien':
                                            return (
                                                <div>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            );
                                            break;
                                        case 'Trés bien':
                                        return (
                                            <div>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        );
                                        break;
                                        case 'Excellent':
                                        return (
                                            <div>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        );
                                        break;
                                        default:
                                            break;
                                    }
                                })()}
                                </span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-8">
                       <Paper className="paper" elevation={1}> 
                        <h4>PROFIL</h4>
                        <p>{profil}</p>
                        </Paper>
                        <Paper className="paper" elevation={1}>                           
                            <h4>FORMATIONS</h4>
                            {this.props.formations.map((row, index)=>(
                            <div className="row" key={index}>
                                <div className="col-lg-2">{row.annee_promotion}</div>
                                <div className="col-lg-8">
                                    <div className="col-lg-8">
                                        <strong>{row.titre}</strong>
                                    </div>
                                    <div className="col-lg-12">
                                        <span>{row.etablissement}</span>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </Paper>
                        <Paper className="paper" elevation={1} >
                            <h4>EXPERIENCES</h4>
                            {this.props.experiences.map((row,index)=>(
                               <div className="row" key={index}>
                                <div className="col-lg-4">{row.date_debut} - {row.date_fin}</div>
                                <div className="col-lg-8">
                                    <div className="col-lg-12" >
                                        <strong>{row.employeur}</strong>
                                    </div>
                                    <div className="col-lg-12" >
                                        <span>{row.poste}</span>
                                    </div>
                                </div>
                               </div> 
                            ))}
                        </Paper>
                    </div>
                    </Paper>
                    <button className="btn btn-success mt-10" onClick={this.handleDownload}>Generer un PDF</button>
                
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{coordonnees : state.coordonnees,formations:state.formations,experiences:state.experiences,competences:state.competences}
}
export default connect(mapStateToProps,null)(Apercu)
