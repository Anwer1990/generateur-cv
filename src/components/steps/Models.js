import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {Link}  from "react-router-dom";
import { connect } from 'react-redux';

export class Models extends Component {
    state= {
        model:""
    }
    handleChoice = (e) =>
    {
        
        this.props.ChoiceCvModel(e.target.name)
        this.props.history.push("/coordonnees");
    }
    render() {
        console.log("modelchoice",this.state.model)
        return (
            <Paper  className="paper container" variant="outlined" square >
                <h2>Nos modèles</h2>
                <h5>Choisissez votre modèle préféré</h5>
                <div className="container">
                    <p></p>
                    <div className="row ">
                            <div className="modelBox">
                                <img className="img-fluid" src="images/model01.jpg" />
                                <Link onClick={this.handleChoice} name="model1" className="btnModelStart">Model numéro 1</Link>
                            </div>
                            <div className="modelBox">
                                <img className="img-fluid" src="images/model02.jpg" />
                                <Link onClick={this.handleChoice} name="model2" className="btnModelStart">Model numéro 2</Link>
                            </div>
                        {/* <div className="modelBox">
                            
                                <img className="img-fluid" src="images/model03.jpg" />
                            <button className="btnModelStart">Model numéro 3</button>
                        </div>
                        <div className="modelBox">
                            
                                <img className="img-fluid" src="images/model04.jpg" />
                            <button className="btnModelStart">Model numéro 4</button>
                        </div> */}
                    </div>
                </div>
            </Paper>
        )
    }
}

const mapDispatchToProps = dispatch =>
{
    return {
        ChoiceCvModel :(model) =>
        {
            dispatch({type:"CHOICEMODEL",model:model})
        }
    }
}

export default connect(null,mapDispatchToProps)(Models)
