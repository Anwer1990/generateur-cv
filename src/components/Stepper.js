import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Stepper extends Component {
    render() {
        return (
            <div className="container">
                <div className="contStepper">
                    <div className="boxEtape">
                        {this.props.etape === 1 ?(                            
                        <div className="barreEtapeVert">Coordonnées</div>
                        ):(                            
                            <div className="barreEtapeGris">Coordonnées</div> 
                        )
                        }
                    </div>
                    <div className="boxEtape">
                    {this.props.etape === 2 ?(
                            <div className="barreEtapeVert">Formations</div>
                        ):(
                            <div className="barreEtapeGris">Formations</div>
                        )
                        }
                    </div>
                    <div className="boxEtape">
                    {this.props.etape === 3 ?(
                            <div className="barreEtapeVert">Experiences</div>
                        ):(
                            <div className="barreEtapeGris">Experiences</div>
                        )
                        }
                    </div>
                    <div className="boxEtape">
                    {this.props.etape === 4 ?(
                            <div className="barreEtapeVert">Competences</div>
                        ):(
                            <div className="barreEtapeGris">Competences</div>
                        )
                        }
                    </div>
                    <div className="boxEtape">
                    {this.props.etape === 5 ?(
                            <div className="barreEtapeVert">Aperçu</div>
                        ):(
                            <div className="barreEtapeGris">Aperçu</div>
                        )
                        }
                    </div>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state)
{
    return{etape : state.activeStep}
}
export default connect(mapStateToProps)(Stepper)